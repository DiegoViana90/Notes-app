const express = require('express');
const {
  createNote,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote,
} = require('../controllers/noteController');

const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

router.post('/create', createNote);
router.get('/getnotes', getNotes);
router.get('/getById/:id', getNoteById);
router.put('/update/:id', updateNote);
router.delete('/delete/:id', deleteNote);


module.exports = router;
