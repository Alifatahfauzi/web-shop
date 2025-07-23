document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');

    // Penanganan Form Login
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Mencegah pengiriman form default

        // Reset pesan error
        passwordError.classList.remove('show-error');
        passwordError.textContent = '';

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === '' || password === '') {
            passwordError.textContent = 'Nama pengguna/email dan kata sandi tidak boleh kosong.';
            passwordError.classList.add('show-error');
            return;
        }

        // --- PENTING: BAGIAN INI HARUS DIIMPLEMENTASIKAN DI SISI SERVER ---
        // Ini hanya simulasi pengiriman data.
        // Dalam aplikasi nyata, Anda akan mengirimkan kredensial ini ke API server.
        console.log('Mengirim data login:', { username, password });

        // Contoh simulasi respons server
        // Dalam produksi, gunakan fetch() untuk mengirim ke server Anda
        setTimeout(() => {
            if (username === 'user' && password === 'password') { // Contoh kredensial dummy
                alert('Login berhasil! Selamat datang, ' + username + '!');
                // Redirect ke halaman dashboard atau beranda setelah login berhasil
                // window.location.href = '/dashboard.html';
            } else {
                passwordError.textContent = 'Nama pengguna atau kata sandi salah.';
                passwordError.classList.add('show-error');
            }
        }, 1000); // Simulasi penundaan jaringan
    });


    // Theme Switcher Logic
    const themeToggleButton = document.getElementById('themeToggleButton');
    const themeOptions = document.getElementById('themeOptions');
    const themeButtons = document.querySelectorAll('.theme-button');

    themeToggleButton.addEventListener('click', () => {
        themeOptions.classList.toggle('show');
    });

    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedTheme = button.dataset.theme;

            // Hapus kelas tema sebelumnya dari body
            document.body.classList.remove('theme-red', 'theme-blue');

            // Tambahkan kelas tema yang dipilih
            if (selectedTheme === 'red') {
                document.body.classList.add('theme-red');
            } else if (selectedTheme === 'blue') {
                document.body.classList.add('theme-blue');
            }
            // Jika 'green', tidak perlu menambahkan kelas tambahan karena itu default

            // Atur tombol aktif
            themeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Simpan tema yang dipilih ke localStorage (opsional, untuk mengingat preferensi)
            localStorage.setItem('selectedTheme', selectedTheme);
        });
    });

    // Muat tema dari localStorage saat halaman dimuat
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
        document.body.classList.remove('theme-red', 'theme-blue'); // Hapus semua tema default
        if (savedTheme === 'red') {
            document.body.classList.add('theme-red');
        } else if (savedTheme === 'blue') {
            document.body.classList.add('theme-blue');
        }

        // Set tombol tema yang aktif
        themeButtons.forEach(btn => {
            if (btn.dataset.theme === savedTheme) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

});
