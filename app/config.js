/*
yang bisa di ubah ubah icon ( Fauzialifata )
=========================
fas fa-rocket
fas fa-bolt
fas fa-tachometer-alt
fas fa-plane-departure
fas fa-shield-alt
fas fa-lock
fas fa-user-shield
fas fa-fingerprint
fas fa-clock
fas fa-hourglass-half
fas fa-business-time
fas fa-headset
fas fa-hand-holding-usd
fas fa-dollar-sign
fas fa-tags
fas fa-wallet
=========================
*/
const products = [
    {
        category: 'Paket Panel Pterodactyl',
        items: [
            { value: 'panel-1gb', name: 'Paket 1 GB', price: 2000, specs: 'CPU Load: 10%, Memory: 512MB', badge: 'Termurah' },
            { value: 'panel-2gb', name: 'Paket 2 GB', price: 3000, specs: 'CPU Load: 20%, Memory: 1GB', badge: 'Termurah' },
            { value: 'panel-3gb', name: 'Paket 3 GB', price: 4000, specs: 'CPU Load: 30%, Memory: 2GB', badge: 'Termurah' },
            { value: 'panel-4gb', name: 'Paket 4 GB', price: 5000, specs: 'CPU Load: 40%, Memory: 4GB', badge: 'Termurah' },
            { value: 'panel-5gb', name: 'Paket 5 GB', price: 6000, specs: 'CPU Load: 50%, Memory: 8GB', badge: 'Termurah' },
            { value: 'panel-6gb', name: 'Paket 6 GB', price: 7000, specs: 'CPU Load: 60%, Memory: 12GB', badge: 'Termurah' },
            { value: 'panel-7gb', name: 'Paket 7 GB', price: 8000, specs: 'CPU Load: 70%, Memory: 16GB', badge: 'Termurah' },
            { value: 'panel-8gb', name: 'Paket 8 GB', price: 9000, specs: 'CPU Load: 80%, Memory: 24GB', badge: 'Termurah' },
            { value: 'panel-9gb', name: 'Paket 9 GB', price: 10000, specs: 'CPU Load: 90%, Memory: 32GB', badge: 'Termurah' }
        ]
    },
    {
        category: 'Paket VPS',
        items: [
            { value: 'vps-1core-1gb', name: 'VPS Mini', price: 15000, specs: '1 vCore CPU, 1GB RAM, 20GB SSD, 1TB Bandwidth', badge: 'Populer' },
            { value: 'vps-2core-2gb', name: 'VPS Standar', price: 25000, specs: '2 vCore CPU, 2GB RAM, 40GB SSD, 2TB Bandwidth' },
            { value: 'vps-4core-4gb', name: 'VPS Pro', price: 45000, specs: '4 vCore CPU, 4GB RAM, 80GB SSD, Unlimited Bandwidth', badge: 'Terbaik' }
        ]
    }
];

const faqData = [
    {
        question: 'Apa itu FauziHost?',
        answer: '<ul>FauziHost adalah penyedia layanan hosting terkemuka yang berfokus pada panel Pterodactyl untuk server game dan aplikasi. Kami menawarkan hosting berkualitas premium dengan harga terjangkau dan performa optimal.</ul>'
    },
    {
        question: 'Bagaimana cara membeli hosting di FauziHost?',
        answer: '<ul>Untuk membeli hosting, Anda perlu mengisi "Informasi Akun" Anda, memilih "Paket Hosting" yang diinginkan, memilih "Metode Pembayaran" (QRIS, Gopay, atau DANA), lalu memeriksa "Ringkasan Pesanan". Setelah itu, klik tombol "BELI" untuk melanjutkan konfirmasi pembayaran dan aktivasi layanan melalui WhatsApp Admin FauziHost.</ul>'
    },
    {
        question: 'Metode pembayaran apa saja yang tersedia?',
        answer: '<ul>Kami menerima pembayaran melalui QRIS, Gopay, dan DANA untuk kemudahan transaksi Anda. Detail lebih lanjut akan diberikan saat proses pemesanan.</ul>'
    },
    {
        question: 'Apakah FauziHost menyediakan layanan support?',
        answer: '<ul>Tentu saja! Kami menyediakan layanan support responsif untuk membantu Anda dengan segala pertanyaan atau masalah terkait hosting Anda. Anda dapat menghubungi kami melalui saluran yang tersedia setelah pemesanan.</ul>'
    },
    {
        question: 'Berapa lama waktu aktivasi layanan setelah pembayaran?',
        answer: '<ul>Setelah konfirmasi pembayaran, layanan Anda akan segera diaktivasi. Proses ini biasanya cepat, dan Anda akan menerima informasi akses melalui WhatsApp dari Admin kami.</ul>'
    }
];

const whyChooseUsData = [
    {
        icon: 'fas fa-rocket',
        title: 'Performa Super Cepat',
        description: 'Infrastruktur server terkini menjamin kecepatan dan responsivitas tanpa batas untuk situs atau game Anda.'
    },
    {
        icon: 'fas fa-shield-alt',
        title: 'Keamanan Berlapis',
        description: 'Perlindungan canggih terhadap serangan siber dan data Anda selalu aman bersama kami.'
    },
    {
        icon: 'fas fa-clock',
        title: 'Dukungan Non-Stop 24/7',
        description: 'Tim ahli kami siap membantu Anda kapan saja, memastikan operasional Anda berjalan lancar.'
    },
    {
        icon: 'fas fa-hand-holding-usd',
        title: 'Harga Terjangkau',
        description: 'Nikmati layanan premium dengan harga yang bersahabat, tanpa mengorbankan kualitas.'
    }
];

window.productsData = products;
window.faqData = faqData;
window.whyChooseUsData = whyChooseUsData; 
