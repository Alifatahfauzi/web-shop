document.addEventListener('DOMContentLoaded', function () {
    const halamanPemuatan = document.getElementById('loading-page');
    const progressBarFill = document.getElementById('progressBarFill');
    const loadingMessage = document.getElementById('loadingMessage');
    const tubuhDokumen = document.body;

    let progress = 0;
    const intervalTime = 30;
    const totalTime = 1200;
    const increment = (100 / (totalTime / intervalTime));

    tubuhDokumen.classList.add('no-scroll');

    const loadingInterval = setInterval(() => {
        if (progress < 99) {
            progress += increment;
            progressBarFill.style.width = progress + '%';
        } else {
            clearInterval(loadingInterval);
            progressBarFill.style.width = '100%';

            setTimeout(() => {
                halamanPemuatan.classList.add('fade-out');
                halamanPemuatan.addEventListener('transitionend', function () {
                    halamanPemuatan.style.display = 'none';
                    tubuhDokumen.classList.remove('no-scroll');

                    tampilkanModalNotifikasi();
                }, { once: true });
            }, 200);
        }
    }, intervalTime);


    let nilaiProdukTerpilih = null;
    let namaProdukTerpilih = '';
    let hargaProdukTerpilih = 0;
    let metodePembayaranTerpilih = null;

    window.nilaiProdukTerpilih = nilaiProdukTerpilih;
    window.namaProdukTerpilih = namaProdukTerpilih;
    window.hargaProdukTerpilih = hargaProdukTerpilih;
    window.metodePembayaranTerpilih = metodePembayaranTerpilih;

    const notificationModal = document.getElementById('notificationModal');
    const closeButton = document.querySelector('.close-button');
    const understoodButton = document.getElementById('understoodButton');

    function tampilkanModalNotifikasi() {
        notificationModal.classList.add('show');
        tubuhDokumen.classList.add('no-scroll');
    }

    function sembunyikanModalNotifikasi() {
        notificationModal.classList.remove('show');
        tubuhDokumen.classList.remove('no-scroll');
    }

    if (closeButton) {
        closeButton.addEventListener('click', sembunyikanModalNotifikasi);
    }

    if (understoodButton) {
        understoodButton.addEventListener('click', sembunyikanModalNotifikasi);
    }

    if (notificationModal) {
        window.addEventListener('click', function (event) {
            if (event.target == notificationModal) {
                sembunyikanModalNotifikasi();
            }
        });
    }

    const sidebar = document.getElementById("sidebar");
    const sidebarOverlay = document.getElementById("sidebar-overlay");
    const openSidebarBtn = document.getElementById("openSidebarBtn");
    const closeSidebarBtn = document.getElementById("closeSidebarBtn");

    function openSidebar() {
        sidebar.style.width = "250px";
        sidebarOverlay.classList.add("show");
        tubuhDokumen.classList.add('no-scroll');
    }

    function closeSidebar() {
        sidebar.style.width = "0";
        sidebarOverlay.classList.remove("show");
        tubuhDokumen.classList.remove('no-scroll');
    }

    if (openSidebarBtn) {
        openSidebarBtn.addEventListener('click', openSidebar);
    }
    if (closeSidebarBtn) {
        closeSidebarBtn.addEventListener('click', closeSidebar);
    }
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebar);
    }

    const sidebarLinks = document.querySelectorAll('#sidebar a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            if (this.hash && this.pathname === window.location.pathname) {
                closeSidebar();
            }
        });
    });

    const themeButtons = document.querySelectorAll('.floating-theme-switcher .theme-button');
    const bodyElement = document.body;
    const toggleThemeButton = document.getElementById('toggleThemeButton');
    const themeOptions = document.getElementById('themeOptions');

    function applyTheme(themeName) {
        bodyElement.classList.remove('theme-red', 'theme-blue');
        if (themeName !== 'green') {
            bodyElement.classList.add(`theme-${themeName}`);
        }

        themeButtons.forEach(button => button.classList.remove('active'));
        document.getElementById(`theme${themeName.charAt(0).toUpperCase() + themeName.slice(1)}`).classList.add('active');

        localStorage.setItem('selectedTheme', themeName);

        let accentColorForButton;
        if (themeName === 'red') {
            accentColorForButton = '#ef4444';
        } else if (themeName === 'blue') {
            accentColorForButton = '#3b82f6';
        } else {
            accentColorForButton = '#48bb78';
        }
        toggleThemeButton.style.backgroundColor = accentColorForButton;
    }

    if (toggleThemeButton) {
        toggleThemeButton.addEventListener('click', function () {
            themeOptions.classList.toggle('show');
            if (themeOptions.classList.contains('show')) {
                setTimeout(() => {
                    document.addEventListener('click', closeThemeOptionsOutside, true);
                }, 100);
            } else {
                document.removeEventListener('click', closeThemeOptionsOutside, true);
            }
        });
    }

    function closeThemeOptionsOutside(event) {
        const floatingSwitcher = document.getElementById('floatingThemeSwitcher');
        if (!floatingSwitcher.contains(event.target)) {
            themeOptions.classList.remove('show');
            document.removeEventListener('click', closeThemeOptionsOutside, true);
        }
    }

    themeButtons.forEach(button => {
        button.addEventListener('click', function () {
            let themeName;
            if (button.id === 'themeGreen') {
                themeName = 'green';
            } else if (button.id === 'themeRed') {
                themeName = 'red';
            } else if (button.id === 'themeBlue') {
                themeName = 'blue';
            }
            applyTheme(themeName);
            themeOptions.classList.remove('show');
            document.removeEventListener('click', closeThemeOptionsOutside, true);
        });
    });

    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        applyTheme('green');
    }

    const formulirHosting = document.getElementById('hostingForm');
    const masukanKataSandi = document.getElementById('password');
    const petunjukKataSandi = document.getElementById('passwordHint');
    const wadahAkordeonProduk = document.getElementById('productAccordion');
    const metodePembayaran = document.querySelectorAll('.payment-method');

    function tampilkanProduk() {
        if (!wadahAkordeonProduk) {
            console.error("Elemen #productAccordion tidak ditemukan!");
            return;
        }
        wadahAkordeonProduk.innerHTML = '';

        if (window.productsData && Array.isArray(window.productsData)) {
            window.productsData.forEach(kategori => {
                const itemAkordeon = document.createElement('div');
                itemAkordeon.classList.add('accordion-item');

                const kepalaAkordeon = document.createElement('div');
                kepalaAkordeon.classList.add('accordion-header');
                kepalaAkordeon.innerHTML = `
                    <span>${kategori.category}</span>
                    <i class="fas fa-chevron-down"></i>
                `;
                itemAkordeon.appendChild(kepalaAkordeon);

                const isiAkordeon = document.createElement('div');
                isiAkordeon.classList.add('accordion-content');
                const isiDalamAkordeon = document.createElement('div');
                isiDalamAkordeon.classList.add('accordion-content-inner');

                kategori.items.forEach(item => {
                    const divItemProduk = document.createElement('div');
                    divItemProduk.classList.add('product-item');
                    divItemProduk.setAttribute('data-value', item.value);
                    divItemProduk.setAttribute('data-price', item.price);
                    divItemProduk.innerHTML = `
                        <div>
                            <div class="product-name">${item.name} ${item.badge ? `<span class="product-badge">${item.badge}</span>` : ''}</div>
                            <div class="product-specs">${item.specs}</div>
                        </div>
                        <div class="product-price">Rp ${item.price.toLocaleString('id-ID')}/bulan</div>
                    `;
                    isiDalamAkordeon.appendChild(divItemProduk);
                });

                isiAkordeon.appendChild(isiDalamAkordeon);
                itemAkordeon.appendChild(isiAkordeon);
                wadahAkordeonProduk.appendChild(itemAkordeon);
            });

            inisialisasiPendengarAkordeon();
            aturKlikProduk();
        } else {
            console.error("Data produk tidak ditemukan atau tidak valid di window.productsData. Pastikan produk.js dimuat dengan benar.");
        }
    }

    function inisialisasiPendengarAkordeon() {
        const kepalaAkordeon = document.querySelectorAll('.accordion-header');
        kepalaAkordeon.forEach(header => {
            header.removeEventListener('click', tanganiKlikAkordeon);
            header.addEventListener('click', tanganiKlikAkordeon);
        });
    }

    function tanganiKlikAkordeon() {
        const isiAkordeon = this.nextElementSibling;
        const ikon = this.querySelector('i');

        document.querySelectorAll('.accordion-header').forEach(kepalaLain => {
            if (kepalaLain !== this && kepalaLain.classList.contains('active')) {
                kepalaLain.classList.remove('active');
                kepalaLain.nextElementSibling.style.maxHeight = null;
                kepalaLain.querySelector('i').classList.remove('fa-chevron-up');
                kepalaLain.querySelector('i').classList.add('fa-chevron-down');
            }
        });

        this.classList.toggle('active');

        if (this.classList.contains('active')) {
            ikon.classList.remove('fa-chevron-down');
            ikon.classList.add('fa-chevron-up');
            isiAkordeon.style.maxHeight = isiAkordeon.scrollHeight + 'px';
        } else {
            ikon.classList.remove('fa-chevron-up');
            ikon.classList.add('fa-chevron-down');
            isiAkordeon.style.maxHeight = null;
        }
    }

    function aturKlikProduk() {
        const itemProduk = document.querySelectorAll('.product-item');
        itemProduk.forEach(item => {
            item.removeEventListener('click', tanganiKlikProduk);
            item.addEventListener('click', tanganiKlikProduk);
        });
    }

    function tanganiKlikProduk() {
        document.querySelectorAll('.product-item').forEach(i => i.classList.remove('selected'));
        this.classList.add('selected');
        nilaiProdukTerpilih = this.getAttribute('data-value');
        namaProdukTerpilih = this.querySelector('.product-name').textContent.replace(/Populer/g, '').trim();
        hargaProdukTerpilih = parseInt(this.getAttribute('data-price'));

        window.nilaiProdukTerpilih = nilaiProdukTerpilih;
        window.namaProdukTerpilih = namaProdukTerpilih;
        window.hargaProdukTerpilih = hargaProdukTerpilih;

        perbaruiRingkasanPesanan();
    }

    metodePembayaran.forEach(metode => {
        metode.addEventListener('click', function () {
            metodePembayaran.forEach(m => m.classList.remove('selected'));
            this.classList.add('selected');
            metodePembayaranTerpilih = this.getAttribute('data-method');
            window.metodePembayaranTerpilih = metodePembayaranTerpilih;
            perbaruiRingkasanPesanan();
        });
    });

    function validasiKataSandi() {
        const kataSandi = masukanKataSandi.value;

        if (kataSandi.length > 0 && kataSandi.length < 8) {
            masukanKataSandi.setCustomValidity("Kata sandi minimal harus 8 karakter");
            petunjukKataSandi.classList.add('show-error');
        } else {
            masukanKataSandi.setCustomValidity('');
            petunjukKataSandi.classList.remove('show-error');
        }
        masukanKataSandi.reportValidity();
    }

    masukanKataSandi.addEventListener('input', validasiKataSandi);

    function calculateTax(price) {
        const taxTiers = [
            { maxPrice: 50000, tax: 1000 },
            { maxPrice: 100000, tax: 2000 },
            { maxPrice: 200000, tax: 3000 },
            { maxPrice: 500000, tax: 4000 },
            { maxPrice: Infinity, tax: 5000 }
        ];

        for (const tier of taxTiers) {
            if (price <= tier.maxPrice) {
                return tier.tax;
            }
        }
        return 0;
    }

    function perbaruiRingkasanPesanan() {
        const ringkasanPaket = document.getElementById('summary-package');
        const ringkasanHarga = document.getElementById('summary-price');
        const ringkasanPajak = document.getElementById('summary-tax');
        const ringkasanTotal = document.getElementById('summary-total');
        const ringkasanPembayaran = document.getElementById('summary-payment');

        let hargaSaatIni = hargaProdukTerpilih;
        let jumlahPajak = 0;
        let total = 0;

        if (nilaiProdukTerpilih) {
            ringkasanPaket.textContent = namaProdukTerpilih;
            ringkasanHarga.textContent = 'Rp ' + hargaSaatIni.toLocaleString('id-ID');

            jumlahPajak = calculateTax(hargaSaatIni);
            total = hargaSaatIni + jumlahPajak;

            ringkasanPajak.textContent = 'Rp ' + jumlahPajak.toLocaleString('id-ID');
            ringkasanTotal.textContent = 'Rp ' + total.toLocaleString('id-ID');
        } else {
            ringkasanPaket.textContent = '-';
            ringkasanHarga.textContent = 'Rp 0';
            ringkasanPajak.textContent = 'Rp 0';
            ringkasanTotal.textContent = 'Rp 0';
        }

        if (metodePembayaranTerpilih) {
            const elemenMetode = document.querySelector(`.payment-method[data-method="${metodePembayaranTerpilih}"]`);
            ringkasanPembayaran.textContent = elemenMetode.querySelector('span').textContent;
        } else {
            ringkasanPembayaran.textContent = '-';
        }
    }

    formulirHosting.addEventListener('submit', function (e) {
        e.preventDefault();

        validasiKataSandi();

        if (!formulirHosting.checkValidity()) {
            alert('Mohon lengkapi semua bidang yang wajib diisi dan perbaiki kesalahan.');
            return;
        }

        if (!nilaiProdukTerpilih) {
            alert('Silakan pilih paket hosting terlebih dahulu.');
            return;
        }

        if (!metodePembayaranTerpilih) {
            alert('Silakan pilih metode pembayaran.');
            return;
        }

        const namaPengguna = document.getElementById('username').value;
        const surel = document.getElementById('email').value;

        const pajakAkhir = calculateTax(hargaProdukTerpilih);

        const totalAkhir = hargaProdukTerpilih + pajakAkhir;

        const namaMetodePembayaran = document.querySelector(`.payment-method[data-method="${metodePembayaranTerpilih}"] span`).textContent;

        const nomorTelepon = "6282132710183";
        let pesanWhatsApp = `Halo Admin FauziHost!\n\nSaya ingin memesan hosting dengan detail sebagai berikut:\n\n`;
        pesanWhatsApp += `*Informasi Akun:*\n`;
        pesanWhatsApp += `Nama Pengguna: ${namaPengguna}.fauzihost.biz.id\n`;
        pesanWhatsApp += `Surel: ${surel}\n\n`;
        pesanWhatsApp += `*Detail Pesanan:*\n`;
        pesanWhatsApp += `Paket Hosting: ${namaProdukTerpilih}\n`;
        pesanWhatsApp += `Harga Paket: Rp ${hargaProdukTerpilih.toLocaleString('id-ID')}/bulan\n`;
        pesanWhatsApp += `Pajak: Rp ${pajakAkhir.toLocaleString('id-ID')}\n`;
        pesanWhatsApp += `Metode Pembayaran: ${namaMetodePembayaran}\n`;
        pesanWhatsApp += `*Total Pembayaran: Rp ${totalAkhir.toLocaleString('id-ID')}*\n\n`;
        pesanWhatsApp += `Saya telah menyetujui Syarat dan Ketentuan yang berlaku.\n\nTerima kasih.`;

        const pesanTerkode = encodeURIComponent(pesanWhatsApp);
        const urlWhatsApp = `https://wa.me/${nomorTelepon}?text=${pesanTerkode}`;

        window.open(urlWhatsApp, '_blank');

        alert('Pesanan Anda telah diteruskan ke WhatsApp! Silakan lanjutkan obrolan untuk konfirmasi pembayaran.');

        formulirHosting.reset();
        document.querySelectorAll('.product-item.selected').forEach(el => el.classList.remove('selected'));
        document.querySelectorAll('.payment-method.selected').forEach(el => el.classList.remove('selected'));

        nilaiProdukTerpilih = null;
        namaProdukTerpilih = '';
        hargaProdukTerpilih = 0;
        metodePembayaranTerpilih = null;
        window.nilaiProdukTerpilih = nilaiProdukTerpilih;
        window.namaProdukTerpilih = namaProdukTerpilih;
        window.hargaProdukTerpilih = hargaProdukTerpilih;
        window.metodePembayaranTerpilih = metodePembayaranTerpilih;

        perbaruiRingkasanPesanan();
    });

    tampilkanProduk();
    perbaruiRingkasanPesanan();
});
