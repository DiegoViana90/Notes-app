document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginButton').addEventListener('click', function() {
        console.log('Botão de login clicado');
    });

    document.getElementById('registerButton').addEventListener('click', function() {
        window.location.href = 'register.html';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('loginButton');
    const registerButton = document.getElementById('registerButton');

    if (loginButton) {
        loginButton.addEventListener('click', function() {
            console.log('Botão de login clicado');
        });
    }

    if (registerButton) {
        registerButton.addEventListener('click', function() {
            window.location.href = 'register.html';
        });
    }

    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', async function(e) {
            e.preventDefault(); 

            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            try {
                const response = await fetch('/api/auth/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, email, password })
                });

                const data = await response.json();
                if (response.ok) {
                    alert('Registrado com sucesso');
                } else {
                    alert(`Erro: ${data.error}`);
                }
            } catch (error) {
                alert('Erro na comunicação com o servidor');
            }
        });
    }
});

