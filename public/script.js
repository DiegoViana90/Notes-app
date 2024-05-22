document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('loginButton');
    const registerButton = document.getElementById('registerButton');

    if (loginButton) {
        loginButton.addEventListener('click', function() {
            window.location.href = 'login.html';
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
                    window.location.href = 'login.html'; 
                } else {
                    alert(`Erro: ${data.error}`);
                }
            } catch (error) {
                alert('Erro na comunicação com o servidor');
            }
        });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            try {
                const response = await fetch('/api/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                });

                const data = await response.json();
                if (response.ok) {
                    alert('Login realizado com sucesso');
                    // Redirecionar ou fazer outra ação
                } else {
                    alert(`Erro: ${data.error}`);
                }
            } catch (error) {
                alert('Erro na comunicação com o servidor');
            }
        });
    }

    const backButton = document.getElementById('backButton');
    if (backButton) {
        backButton.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
});
