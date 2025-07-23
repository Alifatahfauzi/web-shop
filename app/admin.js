document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        passwordError.classList.remove('show-error');
        passwordError.textContent = '';

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === '' || password === '') {
            passwordError.textContent = 'Nama pengguna/email dan kata sandi tidak boleh kosong.';
            passwordError.classList.add('show-error');
            return;
        }

        console.log('Mengirim data login:', { username, password });

        setTimeout(() => {
            if (username === 'user' && password === 'password') {
                alert('Login berhasil! Selamat datang, ' + username + '!');
            } else {
                passwordError.textContent = 'Nama pengguna atau kata sandi salah.';
                passwordError.classList.add('show-error');
            }
        }, 1000);
    });

    const themeToggleButton = document.getElementById('themeToggleButton');
    const themeOptions = document.getElementById('themeOptions');
    const themeButtons = document.querySelectorAll('.theme-button');

    themeToggleButton.addEventListener('click', () => {
        themeOptions.classList.toggle('show');
    });

    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedTheme = button.dataset.theme;

            document.body.classList.remove('theme-red', 'theme-blue');

            if (selectedTheme === 'red') {
                document.body.classList.add('theme-red');
            } else if (selectedTheme === 'blue') {
                document.body.classList.add('theme-blue');
            }

            themeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            localStorage.setItem('selectedTheme', selectedTheme);
        });
    });

    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
        document.body.classList.remove('theme-red', 'theme-blue');
        if (savedTheme === 'red') {
            document.body.classList.add('theme-red');
        } else if (savedTheme === 'blue') {
            document.body.classList.add('theme-blue');
        }

        themeButtons.forEach(btn => {
            if (btn.dataset.theme === savedTheme) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
});
