const Note = require('../models/Note');

const createNote = async (req, res) => {
  const { title, content, tags } = req.body;

  try {
    const note = await Note.create({
      userId: req.user.id,
      title,
      content,
      tags,
    });

    res.status(201).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getNotes = async (req, res) => {
  try {
    const notes = await Note.findAll({ where: { userId: req.user.id } });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getNoteById = async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id);

    if (!note || note.userId !== req.user.id) {
      return res.status(404).json({ error: 'Nota não encontrada' });
    }

    res.json(note);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateNote = async (req, res) => {
  const { title, content, tags } = req.body;

  try {
    const note = await Note.findByPk(req.params.id);

    if (!note || note.userId !== req.user.id) {
      return res.status(404).json({ error: 'Nota não encontrada' });
    }

    note.title = title;
    note.content = content;
    note.tags = tags;

    await note.save();
    res.json(note);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteNote = async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id);

    if (!note || note.userId !== req.user.id) {
      return res.status(404).json({ error: 'Nota não encontrada' });
    }

    await note.destroy();
    res.json({ message: 'Nota removida com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createNote, getNotes, getNoteById, updateNote, deleteNote };
