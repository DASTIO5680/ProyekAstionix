document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("start-game");
    const sdButton = document.getElementById("sd");
    const smpButton = document.getElementById("smp");
    const smkButton = document.getElementById("smk");
    const menu = document.getElementById("menu");
    const levelSelection = document.getElementById("level-selection");
    const subjectSelection = document.getElementById("subject-selection");
    const subjectList = document.getElementById("subjects-list");
    const gameScreen = document.getElementById("game");
    const levelTitle = document.getElementById("level-title");
    const questionText = document.getElementById("question");
    const questionNumber = document.getElementById("question-number");
    const answerInput = document.getElementById("answer");
    const jawabButton = document.getElementById("jawab");
    const feedback = document.getElementById("feedback");
    const backToLevel = document.getElementById("back-to-level");

    let currentLevel = "";
    let currentSubject = "";
    let currentQuestionIndex = 0;
    let questions = [];

    // Data soal dengan mata pelajaran
const soalData = {
"SD": {
   "Matematika": [
    { "soal": "7 + 8 = ?", "jawaban": "15" },
    { "soal": "12 - 4 = ?", "jawaban": "8" },
    { "soal": "6 × 5 = ?", "jawaban": "30" },
    { "soal": "36 ÷ 6 = ?", "jawaban": "6" },
    { "soal": "1 lusin berapa buah?", "jawaban": "12" },
    { "soal": "10 × 10 = ?", "jawaban": "100" },
    { "soal": "25 + 37 = ?", "jawaban": "62" },
    { "soal": "50 - 23 = ?", "jawaban": "27" },
    { "soal": "8 × 7 = ?", "jawaban": "56" },
    { "soal": "49 ÷ 7 = ?", "jawaban": "7" },
    { "soal": "Keliling persegi sisi 4 cm?", "jawaban": "16" },
    { "soal": "Luas persegi panjang 5 cm × 6 cm?", "jawaban": "30" },
    { "soal": "Volume kubus sisi 3 cm?", "jawaban": "27" },
    { "soal": "Berapa hasil 15% dari 200?", "jawaban": "30" },
    { "soal": "Sudut segitiga jumlahnya?", "jawaban": "180" },
    { "soal": "Sisi segi enam ada berapa?", "jawaban": "6" },
    { "soal": "Keliling lingkaran jari-jari 7 cm? (π=22/7)", "jawaban": "44" },
    { "soal": "5 lusin berapa buah?", "jawaban": "60" },
    { "soal": "Jumlah sudut segi empat?", "jawaban": "360" },
    { "soal": "8 kotak masing-masing berisi 5 bola, total?", "jawaban": "40" },
    { "soal": "Jika jam 8 pagi ke jam 1 siang berapa jam?", "jawaban": "5" },
    { "soal": "24 dibagi 3 sama dengan?", "jawaban": "8" },
    { "soal": "Luas segitiga alas 10 cm tinggi 8 cm?", "jawaban": "40" },
    { "soal": "Volume balok 4×3×2 cm?", "jawaban": "24" },
    { "soal": "Jumlah sudut segi lima?", "jawaban": "540" },
    { "soal": "Hasil dari 72 ÷ 8?", "jawaban": "9" },
    { "soal": "10% dari 500 adalah?", "jawaban": "50" },
    { "soal": "Luas lingkaran jari-jari 14 cm? (π=22/7)", "jawaban": "616" },
    { "soal": "Harga 1 pensil 2000, beli 5 pensil?", "jawaban": "10000" },
    { "soal": "Nilai dari 144 ÷ 12?", "jawaban": "12" },
    { "soal": "KPK dari 4 dan 6?", "jawaban": "12" },
    { "soal": "FPB dari 24 dan 36?", "jawaban": "12" },
    { "soal": "Luas persegi panjang 8 cm × 9 cm?", "jawaban": "72" },
    { "soal": "12 x 0 = ?", "jawaban": "0" },
    { "soal": "Keliling segitiga sisi 7 cm?", "jawaban": "21" },
    { "soal": "Jika 1 meter = 100 cm, maka 2,5 m = ?", "jawaban": "250" },
    { "soal": "Hasil 5/10 dari 80?", "jawaban": "40" },
    { "soal": "1/2 dari 64 adalah?", "jawaban": "32" },
    { "soal": "Luas persegi sisi 11 cm?", "jawaban": "121" },
    { "soal": "Jika suhu naik dari 27°C ke 31°C, naik berapa derajat?", "jawaban": "4" },
    { "soal": "Harga 1 kg gula 12.000, beli 3 kg?", "jawaban": "36000" },
    { "soal": "Sebuah kereta berangkat pukul 6 tiba pukul 9, lama perjalanan?", "jawaban": "3" },
    { "soal": "Luas permukaan kubus sisi 5 cm?", "jawaban": "150" },
    { "soal": "Berapa jumlah hari dalam seminggu?", "jawaban": "7" },
    { "soal": "2/5 dari 100 adalah?", "jawaban": "40" },
    { "soal": "Hasil dari 30% dari 200?", "jawaban": "60" },
    { "soal": "10 kg beras dibagi 5 orang, dapat masing-masing?", "jawaban": "2" },
    { "soal": "Hasil dari 15 + 25 + 35?", "jawaban": "75" },
    { "soal": "Luas lingkaran jari-jari 21 cm? (π=22/7)", "jawaban": "1386" },
    { "soal": "Jika 1 jam = 60 menit, maka 3 jam = ?", "jawaban": "180" }
],
"IPA": [
    { "soal": "Bagian tumbuhan yang\nmenyerap air?", "jawaban": "Akar" },
    { "soal": "Indra untuk melihat?", "jawaban": "Mata" },
    { "soal": "Planet ketiga dari Matahari?", "jawaban": "Bumi" },
    { "soal": "Hewan yang hidup di air?", "jawaban": "Ikan" },
    { "soal": "Bagian tubuh untuk bernapas?", "jawaban": "Paru-paru" },
    { "soal": "Proses air menjadi uap disebut?", "jawaban": "Menguap" },
    { "soal": "Bintang terdekat dengan bumi?", "jawaban": "Matahari" },
    { "soal": "Hewan mamalia berkembang biak dengan cara?", "jawaban": "Melahirkan" },
    { "soal": "Alat ukur suhu?", "jawaban": "Termometer" },
    { "soal": "Zat hijau daun disebut?", "jawaban": "Klorofil" },
    { "soal": "Bagian daun untuk bernapas?", "jawaban": "Stomata" },
    { "soal": "Alat untuk mendengar?", "jawaban": "Telinga" },
    { "soal": "Bagian tubuh yang berfungsi sebagai alat gerak?", "jawaban": "Kaki" },
    { "soal": "Perubahan air menjadi es disebut?", "jawaban": "Membeku" },
    { "soal": "Bagian tumbuhan yang berfungsi sebagai penopang?", "jawaban": "Batang" },
    { "soal": "Sumber energi terbesar di bumi?", "jawaban": "Matahari" },
    { "soal": "Hewan yang mengalami metamorfosis sempurna?", "jawaban": "Kupu-kupu" },
    { "soal": "Proses pembuatan makanan pada tumbuhan?", "jawaban": "Fotosintesis" },
    { "soal": "Bagian pohon tempat buah tumbuh?", "jawaban": "Bunga" },
    { "soal": "Indra untuk merasakan makanan?", "jawaban": "Lidah" },
    { "soal": "Benda yang dapat ditarik magnet disebut?", "jawaban": "Logam" },
    { "soal": "Planet terbesar di tata surya?", "jawaban": "Jupiter" },
    { "soal": "Proses air hujan turun disebut?", "jawaban": "Kondensasi" },
    { "soal": "Bagian tubuh untuk mencium bau?", "jawaban": "Hidung" },
    { "soal": "Contoh hewan pemakan daging?", "jawaban": "Harimau" },
    { "soal": "Bagian tanaman yang paling banyak mengandung klorofil?", "jawaban": "Daun" },
    { "soal": "Sumber energi alternatif selain matahari?", "jawaban": "Angin" },
    { "soal": "Bagian tubuh yang berfungsi memompa darah?", "jawaban": "Jantung" },
    { "soal": "Indra peraba manusia?", "jawaban": "Kulit" },
    { "soal": "Hewan yang memiliki cangkang keras?", "jawaban": "Kura-kura" },
    { "soal": "Contoh benda cair di rumah?", "jawaban": "Air" },
    { "soal": "Hewan yang hidup di dua alam?", "jawaban": "Katak" },
    { "soal": "Planet terdekat dari Matahari?", "jawaban": "Merkurius" },
    { "soal": "Sistem peredaran darah besar berakhir di?", "jawaban": "Serambi kanan" },
    { "soal": "Benda langit yang mengelilingi bumi?", "jawaban": "Bulan" },
    { "soal": "Alat untuk melihat benda jauh?", "jawaban": "Teropong" },
    { "soal": "Hewan yang berkembang biak dengan bertelur?", "jawaban": "Ayam" },
    { "soal": "Alat pernapasan ikan?", "jawaban": "Insang" },
    { "soal": "Benda langit selain matahari yang memancarkan cahaya sendiri?", "jawaban": "Bintang" },
    { "soal": "Bagian mata yang berfungsi mengatur banyaknya cahaya?", "jawaban": "Pupil" },
    { "soal": "Contoh benda gas di sekitar kita?", "jawaban": "Oksigen" },
    { "soal": "Proses tumbuhan menyerap air disebut?", "jawaban": "Transpirasi" },
    { "soal": "Hewan yang aktif di malam hari disebut?", "jawaban": "Nocturnal" },
    { "soal": "Apa nama zat dalam darah yang memberi warna merah?", "jawaban": "Hemoglobin" },
    { "soal": "Benda padat yang mudah menghantarkan panas?", "jawaban": "Logam" },
    { "soal": "Planet yang disebut planet merah?", "jawaban": "Mars" },
    { "soal": "Hewan pemakan tumbuhan dan daging disebut?", "jawaban": "Omnivora" },
    { "soal": "Organ gerak utama pada burung?", "jawaban": "Sayap" },
    { "soal": "Bagian tubuh yang berfungsi sebagai pusat pengaturan?", "jawaban": "Otak" }
],
"IPS": [
    { "soal": "Ibu kota Indonesia?", "jawaban": "Jakarta" },
    { "soal": "Pulau terbesar di Indonesia?", "jawaban": "Kalimantan" },
    { "soal": "Hari Kemerdekaan Indonesia?", "jawaban": "17 Agustus" },
    { "soal": "Presiden pertama Indonesia?", "jawaban": "Soekarno" },
    { "soal": "Mata uang Indonesia?", "jawaban": "Rupiah" },
    { "soal": "Rumah adat dari Sumatera Barat?", "jawaban": "Rumah Gadang" },
    { "soal": "Gunung tertinggi di Indonesia?", "jawaban": "Puncak Jaya" },
    { "soal": "Laut di utara Pulau Jawa?", "jawaban": "Laut Jawa" },
    { "soal": "Sungai terpanjang di Indonesia?", "jawaban": "Kapuas" },
    { "soal": "Negara tetangga Indonesia di utara?", "jawaban": "Malaysia" },
    { "soal": "Bentuk pemerintahan Indonesia?", "jawaban": "Republik" },
    { "soal": "Jumlah sila dalam Pancasila?", "jawaban": "5" },
    { "soal": "Lambang sila ke-5 Pancasila?", "jawaban": "Padi dan Kapas" },
    { "soal": "Pulau Bali terkenal dengan tari?", "jawaban": "Kecak" },
    { "soal": "Ibu kota provinsi Jawa Timur?", "jawaban": "Surabaya" },
    { "soal": "Pahlawan wanita dari Aceh?", "jawaban": "Cut Nyak Dien" },
    { "soal": "Provinsi paling timur Indonesia?", "jawaban": "Papua" },
    { "soal": "Pelabuhan terbesar di Indonesia?", "jawaban": "Tanjung Priok" },
    { "soal": "Jembatan penghubung Surabaya dan Madura?", "jawaban": "Suramadu" },
    { "soal": "Hari Pahlawan diperingati setiap?", "jawaban": "10 November" },
    { "soal": "Nama suku asli Papua?", "jawaban": "Dani" },
    { "soal": "Semboyan negara Indonesia?", "jawaban": "Bhinneka Tunggal Ika" },
    { "soal": "Candi terbesar di Indonesia?", "jawaban": "Borobudur" },
    { "soal": "Alat musik khas Jawa Barat?", "jawaban": "Angklung" },
    { "soal": "Pahlawan dari Maluku?", "jawaban": "Pattimura" },
    { "soal": "Nama pegunungan di Sumatera?", "jawaban": "Bukit Barisan" },
    { "soal": "Hari Proklamasi Indonesia?", "jawaban": "17 Agustus 1945" },
    { "soal": "Ibu kota Jawa Barat?", "jawaban": "Bandung" },
    { "soal": "Alat penunjuk arah?", "jawaban": "Kompas" },
    { "soal": "Danau terbesar di Indonesia?", "jawaban": "Toba" },
    { "soal": "Nama alat tangkap ikan tradisional?", "jawaban": "Jaring" },
    { "soal": "Nama pahlawan dari Rembang?", "jawaban": "R.A. Kartini" },
    { "soal": "Sebutan provinsi Aceh?", "jawaban": "Serambi Mekah" },
    { "soal": "Mata pencaharian utama masyarakat desa?", "jawaban": "Bertani" },
    { "soal": "Negara Indonesia terletak di benua?", "jawaban": "Asia" },
    { "soal": "Hasil perkebunan terbesar Indonesia?", "jawaban": "Kopi" },
    { "soal": "Provinsi dengan hasil batu bara terbesar?", "jawaban": "Kalimantan" },
    { "soal": "Nama tari dari Bali selain Kecak?", "jawaban": "Barong" },
    { "soal": "Pulau terluar bagian barat Indonesia?", "jawaban": "Pulau Weh" },
    { "soal": "Samudra di sebelah selatan Indonesia?", "jawaban": "Samudra Hindia" },
    { "soal": "Ibu kota Kalimantan Selatan?", "jawaban": "Banjarmasin" },
    { "soal": "Nama senjata tradisional Jawa?", "jawaban": "Keris" },
    { "soal": "Pahlawan dari Sulawesi Selatan?", "jawaban": "Sultan Hasanuddin" },
    { "soal": "Wilayah Indonesia dikenal sebagai negara?", "jawaban": "Maritim" },
    { "soal": "Contoh kegiatan ekonomi di daerah pesisir?", "jawaban": "Nelayan" },
    { "soal": "Nama laut antara Kalimantan dan Sulawesi?", "jawaban": "Laut Sulawesi" },
    { "soal": "Bagian dari peta yang menunjukkan arah?", "jawaban": "Mata angin" },
    { "soal": "Nama rempah-rempah terkenal Indonesia?", "jawaban": "Cengkeh" },
    { "soal": "Ibu kota Indonesia yang baru direncanakan?", "jawaban": "Nusantara" }
]
},
"SMP": {
   "Matematika": [
    { "soal": "Hasil dari 25 + 37 = ?", "jawaban": "62" },
    { "soal": "Hasil dari 56 ÷ 7 = ?", "jawaban": "8" },
    { "soal": "Rumus luas segitiga?", "jawaban": "1/2 × alas × tinggi" },
    { "soal": "Hasil dari 9² = ?", "jawaban": "81" },
    { "soal": "Keliling persegi dengan sisi 12 cm?", "jawaban": "48" },
    { "soal": "Volume kubus sisi 8 cm?", "jawaban": "512" },
    { "soal": "FPB dari 24 dan 36?", "jawaban": "12" },
    { "soal": "3x + 4 = 16, nilai x?", "jawaban": "4" },
    { "soal": "Rumus luas lingkaran?", "jawaban": "π × r²" },
    { "soal": "Jumlah sudut dalam segitiga?", "jawaban": "180" },
    { "soal": "Hasil dari 2³ × 3² = ?", "jawaban": "72" },
    { "soal": "Volume balok 10×5×2 cm?", "jawaban": "100" },
    { "soal": "Keliling lingkaran dengan r = 14 cm?", "jawaban": "88" },
    { "soal": "Bilangan prima antara 10 dan 30?", "jawaban": "11,13,17,19,23,29" },
    { "soal": "Jika 25% dari x adalah 50, maka x = ?", "jawaban": "200" },
    { "soal": "Akar dari 169?", "jawaban": "13" },
    { "soal": "Jika 5x - 10 = 30, nilai x?", "jawaban": "8" },
    { "soal": "Kelipatan persekutuan terkecil dari 6 dan 8?", "jawaban": "24" },
    { "soal": "Sisi miring segitiga siku-siku dengan sisi 5 dan 12?", "jawaban": "13" },
    { "soal": "Rumus Pythagoras?", "jawaban": "a² + b² = c²" },
    { "soal": "70% dari 150 adalah?", "jawaban": "105" },
    { "soal": "Mean dari 10, 15, 20?", "jawaban": "15" },
    { "soal": "Hasil dari 0,3 × 250 = ?", "jawaban": "75" },
    { "soal": "Volume tabung dengan r=7cm dan t=10cm?", "jawaban": "1540" },
    { "soal": "Sumbu simetri lingkaran?", "jawaban": "Tak hingga" },
    { "soal": "Hasil dari 1,25 + 2,75 = ?", "jawaban": "4" },
    { "soal": "Keliling segitiga dengan sisi 8 cm, 6 cm, 10 cm?", "jawaban": "24" },
    { "soal": "Sudut tumpul memiliki besar antara?", "jawaban": "90° - 180°" },
    { "soal": "Hasil 5! (faktorial 5)?", "jawaban": "120" },
    { "soal": "Bilangan bulat antara -5 dan 5?", "jawaban": "-4,-3,-2,-1,0,1,2,3,4" },
    { "soal": "Rumus luas persegi panjang?", "jawaban": "p × l" },
    { "soal": "Hasil dari 3/4 + 2/4?", "jawaban": "5/4" },
    { "soal": "KPK dari 9 dan 12?", "jawaban": "36" },
    { "soal": "Akar pangkat tiga dari 125?", "jawaban": "5" },
    { "soal": "Jika 1 km = 1000 m, maka 3,5 km = ?", "jawaban": "3500" },
    { "soal": "Sudut siku-siku besarnya?", "jawaban": "90°" },
    { "soal": "Keliling trapesium 12+8+7+13?", "jawaban": "40" },
    { "soal": "Volume kerucut r=7cm t=12cm?", "jawaban": "616" },
    { "soal": "Jika x=3, maka 4x + 2 = ?", "jawaban": "14" },
    { "soal": "Hasil dari 3⁴ = ?", "jawaban": "81" },
    { "soal": "Luas jajar genjang alas 10 cm dan tinggi 8 cm?", "jawaban": "80" },
    { "soal": "Hasil dari 225 ÷ 5 = ?", "jawaban": "45" },
    { "soal": "Jumlah sudut dalam persegi panjang?", "jawaban": "360°" },
    { "soal": "Jika diameter lingkaran 28 cm, kelilingnya?", "jawaban": "88" },
    { "soal": "Bilangan genap antara 20 dan 30?", "jawaban": "22,24,26,28" },
    { "soal": "Persentase 60 dari 240 adalah?", "jawaban": "25%" },
    { "soal": "Jika suhu 30°C, berapa dalam Fahrenheit?", "jawaban": "86°F" },
    { "soal": "Hasil dari (-8) × 6 = ?", "jawaban": "-48" },
    { "soal": "Bentuk persen dari 0,5?", "jawaban": "50%" }
],
"IPA": [
    { "soal": "Alat pernapasan pada manusia?", "jawaban": "Paru-paru" },
    { "soal": "Planet terbesar di tata surya?", "jawaban": "Jupiter" },
    { "soal": "Zat hijau daun disebut?", "jawaban": "Klorofil" },
    { "soal": "Bagian telinga yang berfungsi menangkap getaran?", "jawaban": "Gendang telinga" },
    { "soal": "Proses perubahan air menjadi uap?", "jawaban": "Penguapan" },
    { "soal": "Bagian mata yang mengatur banyaknya cahaya?", "jawaban": "Pupil" },
    { "soal": "Organ pada ikan untuk bernapas?", "jawaban": "Insang" },
    { "soal": "Fungsi akar pada tumbuhan?", "jawaban": "Menyerap air" },
    { "soal": "Contoh hewan yang mengalami metamorfosis sempurna?", "jawaban": "Kupu-kupu" },
    { "soal": "Bagian tubuh yang berfungsi memompa darah?", "jawaban": "Jantung" },
    { "soal": "Hewan pemakan tumbuhan disebut?", "jawaban": "Herbivora" },
    { "soal": "Hewan yang aktif di malam hari disebut?", "jawaban": "Nocturnal" },
    { "soal": "Bagian tumbuhan tempat terjadinya fotosintesis?", "jawaban": "Daun" },
    { "soal": "Alat gerak utama pada burung?", "jawaban": "Sayap" },
    { "soal": "Sistem peredaran darah besar berakhir di?", "jawaban": "Serambi kanan" },
    { "soal": "Planet terdekat dengan Matahari?", "jawaban": "Merkurius" },
    { "soal": "Contoh bahan penghantar panas yang baik?", "jawaban": "Logam" },
    { "soal": "Proses perubahan air menjadi es?", "jawaban": "Membeku" },
    { "soal": "Organ pernapasan pada serangga?", "jawaban": "Trakea" },
    { "soal": "Bagian tubuh untuk mencium bau?", "jawaban": "Hidung" },
    { "soal": "Alat pengukur suhu?", "jawaban": "Termometer" },
    { "soal": "Zat makanan yang berfungsi sebagai sumber energi?", "jawaban": "Karbohidrat" },
    { "soal": "Contoh hewan pemakan daging?", "jawaban": "Singa" },
    { "soal": "Lapisan pelindung bumi dari sinar ultraviolet?", "jawaban": "Ozon" },
    { "soal": "Contoh perubahan kimia adalah?", "jawaban": "Pembakaran" },
    { "soal": "Bagian bunga yang berfungsi sebagai alat kelamin jantan?", "jawaban": "Benang sari" },
    { "soal": "Hewan yang berkembang biak dengan cara melahirkan?", "jawaban": "Sapi" },
    { "soal": "Bagian darah yang berfungsi membunuh kuman penyakit?", "jawaban": "Sel darah putih" },
    { "soal": "Sistem pencernaan dimulai dari organ?", "jawaban": "Mulut" },
    { "soal": "Proses tumbuhan membuat makanan sendiri disebut?", "jawaban": "Fotosintesis" },
    { "soal": "Contoh benda padat di rumah?", "jawaban": "Meja" },
    { "soal": "Nama planet yang disebut planet merah?", "jawaban": "Mars" },
    { "soal": "Zat yang dibutuhkan tumbuhan saat fotosintesis?", "jawaban": "Karbon dioksida" },
    { "soal": "Contoh hewan yang bertelur?", "jawaban": "Ayam" },
    { "soal": "Proses perubahan dari uap menjadi air?", "jawaban": "Kondensasi" },
    { "soal": "Alat pengukur berat benda?", "jawaban": "Timbangan" },
    { "soal": "Hewan yang hidup di dua alam?", "jawaban": "Katak" },
    { "soal": "Bagian tumbuhan yang berfungsi sebagai penopang?", "jawaban": "Batang" },
    { "soal": "Contoh bahan isolator panas?", "jawaban": "Kayu" },
    { "soal": "Contoh sumber energi alternatif?", "jawaban": "Matahari" },
    { "soal": "Bagian mata yang berfungsi menangkap bayangan?", "jawaban": "Retina" },
    { "soal": "Hewan pemakan tumbuhan dan daging disebut?", "jawaban": "Omnivora" },
    { "soal": "Proses terjadinya hujan diawali dengan?", "jawaban": "Penguapan" },
    { "soal": "Indra peraba manusia adalah?", "jawaban": "Kulit" },
    { "soal": "Zat dalam darah yang memberi warna merah?", "jawaban": "Hemoglobin" },
    { "soal": "Contoh perubahan fisika adalah?", "jawaban": "Air menjadi es" },
    { "soal": "Bagian jantung yang menerima darah kotor dari tubuh?", "jawaban": "Serambi kanan" },
    { "soal": "Organ penghasil suara pada manusia?", "jawaban": "Pita suara" },
    { "soal": "Planet yang memiliki cincin?", "jawaban": "Saturnus" }
],
"IPS": [
    { "soal": "Nama benua terbesar di dunia?", "jawaban": "Asia" },
    { "soal": "Samudra terbesar di dunia?", "jawaban": "Samudra Pasifik" },
    { "soal": "Ibu kota negara Jepang?", "jawaban": "Tokyo" },
    { "soal": "Sistem pemerintahan Indonesia?", "jawaban": "Republik" },
    { "soal": "Suku asli Papua?", "jawaban": "Dani" },
    { "soal": "Pahlawan wanita dari Jawa Tengah?", "jawaban": "R.A. Kartini" },
    { "soal": "Candi peninggalan Buddha terbesar di Indonesia?", "jawaban": "Borobudur" },
    { "soal": "Pulau terkecil di Indonesia?", "jawaban": "Pulau Simping" },
    { "soal": "Mata uang negara Thailand?", "jawaban": "Baht" },
    { "soal": "Hari Sumpah Pemuda diperingati setiap?", "jawaban": "28 Oktober" },
    { "soal": "Nama pahlawan dari Maluku?", "jawaban": "Pattimura" },
    { "soal": "Letak geografis Indonesia?", "jawaban": "Antara 95°BT - 141°BT dan 6°LU - 11°LS" },
    { "soal": "Apa arti dari ASEAN?", "jawaban": "Association of Southeast Asian Nations" },
    { "soal": "Nama ibukota negara Malaysia?", "jawaban": "Kuala Lumpur" },
    { "soal": "Bentuk pemerintahan negara Brunei?", "jawaban": "Kesultanan" },
    { "soal": "Hasil utama pertanian di Indonesia?", "jawaban": "Padi" },
    { "soal": "Gunung berapi tertinggi di Indonesia?", "jawaban": "Gunung Kerinci" },
    { "soal": "Siapa presiden pertama Indonesia?", "jawaban": "Soekarno" },
    { "soal": "Laut terbesar di dunia?", "jawaban": "Laut Cina Selatan" },
    { "soal": "Kota industri terbesar di Indonesia?", "jawaban": "Jakarta" },
    { "soal": "Perang Diponegoro terjadi tahun?", "jawaban": "1825-1830" },
    { "soal": "Sungai terpanjang di Indonesia?", "jawaban": "Kapuas" },
    { "soal": "Hari buruh sedunia diperingati setiap?", "jawaban": "1 Mei" },
    { "soal": "Apa ibu kota Kalimantan Timur?", "jawaban": "Samarinda" },
    { "soal": "Candi Hindu terbesar di Indonesia?", "jawaban": "Prambanan" },
    { "soal": "Provinsi paling selatan di Indonesia?", "jawaban": "Nusa Tenggara Timur" },
    { "soal": "Sungai Nil terletak di benua?", "jawaban": "Afrika" },
    { "soal": "Kapan proklamasi kemerdekaan Indonesia?", "jawaban": "17 Agustus 1945" },
    { "soal": "Sistem tanam paksa disebut?", "jawaban": "Cultuurstelsel" },
    { "soal": "Perusahaan Belanda di Indonesia dulu bernama?", "jawaban": "VOC" },
    { "soal": "Semboyan bangsa Indonesia?", "jawaban": "Bhinneka Tunggal Ika" },
    { "soal": "Apa ibu kota provinsi Jawa Barat?", "jawaban": "Bandung" },
    { "soal": "Hari Pahlawan diperingati tanggal?", "jawaban": "10 November" },
    { "soal": "Negara kepulauan di Asia Tenggara?", "jawaban": "Indonesia" },
    { "soal": "Nama jalur perdagangan terkenal di Asia?", "jawaban": "Jalur Sutra" },
    { "soal": "Nama ibukota negara Vietnam?", "jawaban": "Hanoi" },
    { "soal": "Apa nama perjanjian kemerdekaan Indonesia dan Belanda?", "jawaban": "Konferensi Meja Bundar" },
    { "soal": "Apa ibu kota negara Filipina?", "jawaban": "Manila" },
    { "soal": "Benteng terkenal peninggalan Belanda di Maluku?", "jawaban": "Benteng Duurstede" },
    { "soal": "Siapa penjelajah yang menemukan benua Amerika?", "jawaban": "Christopher Columbus" },
    { "soal": "Senjata tradisional suku Dayak?", "jawaban": "Mandau" },
    { "soal": "Samudra di sebelah barat Indonesia?", "jawaban": "Samudra Hindia" },
    { "soal": "Nama jembatan terpanjang di Indonesia?", "jawaban": "Jembatan Suramadu" },
    { "soal": "Ibu kota provinsi Papua Barat?", "jawaban": "Manokwari" },
    { "soal": "Peristiwa G30S/PKI terjadi tahun?", "jawaban": "1965" },
    { "soal": "Negara paling besar di dunia?", "jawaban": "Rusia" },
    { "soal": "Wilayah Indonesia berada di antara dua benua yaitu?", "jawaban": "Asia dan Australia" },
    { "soal": "Apa nama organisasi perserikatan bangsa-bangsa?", "jawaban": "PBB" },
    { "soal": "Pulau terkecil di dunia?", "jawaban": "Bishop Rock" }
]
},
"SMK": {
   "Teknologi": [
    { "soal": "Singkatan dari HTML?", "jawaban": "HyperText Markup Language" },
    { "soal": "CPU adalah singkatan dari?", "jawaban": "Central Processing Unit" },
    { "soal": "Perangkat keras untuk mencetak dokumen?", "jawaban": "Printer" },
    { "soal": "Satuan kecepatan internet adalah?", "jawaban": "Mbps" },
    { "soal": "Apa fungsi dari RAM?", "jawaban": "Menyimpan data sementara" },
    { "soal": "Contoh sistem operasi komputer?", "jawaban": "Windows" },
    { "soal": "Nama browser buatan Google?", "jawaban": "Google Chrome" },
    { "soal": "Panjang gelombang radio diukur dengan satuan?", "jawaban": "Meter" },
    { "soal": "Apa itu IoT?", "jawaban": "Internet of Things" },
    { "soal": "Singkatan dari URL?", "jawaban": "Uniform Resource Locator" },
    { "soal": "Alat untuk mengubah sinyal digital ke analog?", "jawaban": "Modem" },
    { "soal": "Jenis kabel jaringan komputer?", "jawaban": "UTP" },
    { "soal": "Bahasa pemrograman untuk web?", "jawaban": "JavaScript" },
    { "soal": "Perangkat untuk menyimpan data?", "jawaban": "Harddisk" },
    { "soal": "Bagian komputer untuk menampilkan gambar?", "jawaban": "Monitor" },
    { "soal": "Apa itu coding?", "jawaban": "Menulis program komputer" },
    { "soal": "Singkatan dari IP Address?", "jawaban": "Internet Protocol Address" },
    { "soal": "Jaringan komputer terbesar di dunia?", "jawaban": "Internet" },
    { "soal": "Jenis printer yang menggunakan tinta cair?", "jawaban": "Inkjet" },
    { "soal": "Singkatan dari HTTP?", "jawaban": "HyperText Transfer Protocol" },
    { "soal": "Apa fungsi motherboard?", "jawaban": "Menghubungkan semua komponen komputer" },
    { "soal": "Nama penyimpanan berbasis awan?", "jawaban": "Cloud Storage" },
    { "soal": "Fungsi dari software antivirus?", "jawaban": "Melindungi komputer dari virus" },
    { "soal": "Perangkat lunak untuk mengolah angka?", "jawaban": "Microsoft Excel" },
    { "soal": "Apa itu software?", "jawaban": "Perangkat lunak" },
    { "soal": "Apa itu hardware?", "jawaban": "Perangkat keras" },
    { "soal": "Apa nama aplikasi untuk desain grafis?", "jawaban": "CorelDraw" },
    { "soal": "Sistem operasi buatan Apple?", "jawaban": "MacOS" },
    { "soal": "Contoh media sosial?", "jawaban": "Instagram" },
    { "soal": "Apa nama server web terkenal?", "jawaban": "Apache" },
    { "soal": "Kepanjangan dari LAN?", "jawaban": "Local Area Network" },
    { "soal": "Perangkat yang digunakan untuk input data?", "jawaban": "Keyboard" },
    { "soal": "Bahasa pemrograman untuk aplikasi Android?", "jawaban": "Kotlin" },
    { "soal": "Proses mengubah data menjadi kode rahasia disebut?", "jawaban": "Enkripsi" },
    { "soal": "Alat untuk memproyeksikan gambar ke layar?", "jawaban": "Proyektor" },
    { "soal": "Apa itu domain?", "jawaban": "Alamat website" },
    { "soal": "Contoh software open source?", "jawaban": "Linux" },
    { "soal": "Alat yang digunakan untuk menyimpan data secara portable?", "jawaban": "Flashdisk" },
    { "soal": "Singkatan dari VPN?", "jawaban": "Virtual Private Network" },
    { "soal": "Bahasa pemrograman Python termasuk jenis?", "jawaban": "High-level" },
    { "soal": "Sensor yang digunakan di smartphone?", "jawaban": "Accelerometer" },
    { "soal": "Fungsi dari router?", "jawaban": "Menghubungkan jaringan" },
    { "soal": "Singkatan dari GUI?", "jawaban": "Graphical User Interface" },
    { "soal": "Penyimpanan data tercepat di komputer?", "jawaban": "SSD" },
    { "soal": "Apa itu firewall?", "jawaban": "Pengaman jaringan komputer" },
    { "soal": "Contoh alat output komputer?", "jawaban": "Speaker" },
    { "soal": "Bahasa pemrograman untuk data science?", "jawaban": "Python" },
    { "soal": "Teknologi yang memungkinkan belanja online?", "jawaban": "E-commerce" },
    { "soal": "Apa itu QR Code?", "jawaban": "Kode batang dua dimensi" },
    { "soal": "Alat untuk menghubungkan komputer ke internet?", "jawaban": "Modem" }
],
"Sejarah": [
    { "soal": "Kapan Indonesia merdeka?", "jawaban": "17 Agustus 1945" },
    { "soal": "Siapa proklamator Indonesia?", "jawaban": "Soekarno dan Mohammad Hatta" },
    { "soal": "Apa nama kerajaan Hindu tertua di Indonesia?", "jawaban": "Kutai" },
    { "soal": "Siapa penemu benua Amerika?", "jawaban": "Christopher Columbus" },
    { "soal": "Nama perjanjian kemerdekaan Indonesia dengan Belanda?", "jawaban": "Konferensi Meja Bundar" },
    { "soal": "VOC didirikan tahun?", "jawaban": "1602" },
    { "soal": "Siapa raja terbesar Majapahit?", "jawaban": "Hayam Wuruk" },
    { "soal": "Apa isi Sumpah Pemuda?", "jawaban": "Satu tanah air, satu bangsa, satu bahasa" },
    { "soal": "Kapan peristiwa G30S/PKI terjadi?", "jawaban": "1965" },
    { "soal": "Nama pahlawan wanita dari Aceh?", "jawaban": "Cut Nyak Dien" },
    { "soal": "Buku sejarah terkenal karya Pramoedya Ananta Toer?", "jawaban": "Bumi Manusia" },
    { "soal": "Perang Diponegoro terjadi tahun?", "jawaban": "1825-1830" },
    { "soal": "Apa nama kerajaan Islam pertama di Indonesia?", "jawaban": "Samudera Pasai" },
    { "soal": "Siapa Presiden RI ke-2?", "jawaban": "Soeharto" },
    { "soal": "Apa arti reformasi di Indonesia?", "jawaban": "Perubahan sistem pemerintahan" },
    { "soal": "Kapan Belanda menjajah Indonesia?", "jawaban": "350 tahun" },
    { "soal": "Siapa pahlawan dari Maluku?", "jawaban": "Pattimura" },
    { "soal": "Organisasi Budi Utomo berdiri tahun?", "jawaban": "1908" },
    { "soal": "Siapa presiden pertama Amerika Serikat?", "jawaban": "George Washington" },
    { "soal": "Apa nama perjanjian yang mengakhiri Perang Dunia I?", "jawaban": "Perjanjian Versailles" },
    { "soal": "Kapan peristiwa Bandung Lautan Api?", "jawaban": "1946" },
    { "soal": "Siapa raja pertama Kerajaan Mataram Islam?", "jawaban": "Sultan Agung" },
    { "soal": "Kapan Indonesia menjadi anggota PBB?", "jawaban": "1966" },
    { "soal": "Apa nama perjanjian Jepang menyerah kepada Sekutu?", "jawaban": "Perjanjian San Francisco" },
    { "soal": "Dimana tempat pertempuran Ambarawa?", "jawaban": "Jawa Tengah" },
    { "soal": "Apa nama organisasi pergerakan perempuan Indonesia?", "jawaban": "Kowani" },
    { "soal": "Dimana Candi Borobudur berada?", "jawaban": "Magelang, Jawa Tengah" },
    { "soal": "Perang Dunia II dimulai tahun?", "jawaban": "1939" },
    { "soal": "Perang Dunia II berakhir tahun?", "jawaban": "1945" },
    { "soal": "Siapa tokoh pelopor kebangkitan nasional?", "jawaban": "Dr. Sutomo" },
    { "soal": "Kapan Soekarno wafat?", "jawaban": "21 Juni 1970" },
    { "soal": "Apa nama organisasi internasional yang didirikan 1945?", "jawaban": "PBB" },
    { "soal": "Siapa tokoh pejuang dari Bali?", "jawaban": "I Gusti Ngurah Rai" },
    { "soal": "Kapan Kongres Pemuda II dilaksanakan?", "jawaban": "28 Oktober 1928" },
    { "soal": "Apa nama perjanjian antara Inggris dan Belanda?", "jawaban": "Perjanjian London" },
    { "soal": "Siapa pahlawan nasional dari Jawa Timur?", "jawaban": "KH Hasyim Asy'ari" },
    { "soal": "Dimana ibu kota Kerajaan Sriwijaya?", "jawaban": "Palembang" },
    { "soal": "Apa nama pemberontakan di Madiun 1948?", "jawaban": "PKI Madiun" },
    { "soal": "Dimana proklamasi kemerdekaan dibacakan?", "jawaban": "Jl. Pegangsaan Timur 56, Jakarta" },
    { "soal": "Peristiwa serangan umum terjadi di kota?", "jawaban": "Yogyakarta" },
    { "soal": "Kapan Soeharto lengser dari presiden?", "jawaban": "1998" },
    { "soal": "Apa nama perang besar di Amerika tahun 1861?", "jawaban": "Perang Saudara" },
    { "soal": "Kapan kerajaan Majapahit berdiri?", "jawaban": "1293" },
    { "soal": "Apa nama perjanjian pembagian dunia antara Spanyol dan Portugis?", "jawaban": "Perjanjian Tordesillas" },
    { "soal": "Siapa tokoh Proklamasi dari golongan muda?", "jawaban": "Sutan Syahrir" },
    { "soal": "Dimana lokasi peristiwa Rengasdengklok?", "jawaban": "Karawang" },
    { "soal": "Apa nama sistem tanam paksa oleh Belanda?", "jawaban": "Cultuurstelsel" },
    { "soal": "Kapan peristiwa tragedi Trisakti?", "jawaban": "1998" },
    { "soal": "Apa nama kerajaan Hindu di Jawa Timur yang terkenal?", "jawaban": "Majapahit" }
],
"Fisika": [
    { "soal": "Alat untuk mengukur arus listrik?", "jawaban": "Amperemeter" },
    { "soal": "Satuan gaya dalam SI?", "jawaban": "Newton" },
    { "soal": "Bunyi merambat paling cepat di?", "jawaban": "Padat" },
    { "soal": "Hukum Newton 1 tentang?", "jawaban": "Kelembaman" },
    { "soal": "Rumus kecepatan?", "jawaban": "Jarak ÷ Waktu" },
    { "soal": "Alat ukur tekanan udara?", "jawaban": "Barometer" },
    { "soal": "Rumus energi potensial?", "jawaban": "m × g × h" },
    { "soal": "Alat untuk mengukur suhu?", "jawaban": "Termometer" },
    { "soal": "Contoh energi terbarukan?", "jawaban": "Matahari" },
    { "soal": "Benda dikatakan bergerak jika?", "jawaban": "Posisinya berubah" },
    { "soal": "Satuan energi dalam SI?", "jawaban": "Joule" },
    { "soal": "Lensa cekung bersifat?", "jawaban": "Menyebarkan cahaya" },
    { "soal": "Alat untuk mengukur massa?", "jawaban": "Neraca" },
    { "soal": "Gaya gesek termasuk gaya?", "jawaban": "Kontak" },
    { "soal": "Hukum Archimedes berbunyi?", "jawaban": "Benda di air mendapat gaya ke atas" },
    { "soal": "Cahaya merambat lurus adalah?", "jawaban": "Hukum Pemantulan" },
    { "soal": "Hukum Pascal berlaku pada?", "jawaban": "Fluida diam" },
    { "soal": "Apa itu refraksi?", "jawaban": "Pembiasan cahaya" },
    { "soal": "Satuan daya listrik?", "jawaban": "Watt" },
    { "soal": "Rumus gaya berat?", "jawaban": "m × g" },
    { "soal": "Benda yang memantulkan hampir semua cahaya disebut?", "jawaban": "Cermin" },
    { "soal": "Apa itu transformator?", "jawaban": "Alat menaikkan/menurunkan tegangan" },
    { "soal": "Perubahan energi pada kipas angin?", "jawaban": "Listrik ke gerak" },
    { "soal": "Hukum Newton ke-3 berbunyi?", "jawaban": "Aksi = Reaksi" },
    { "soal": "Gelombang bunyi termasuk gelombang?", "jawaban": "Longitudinal" },
    { "soal": "Satuan frekuensi?", "jawaban": "Hertz" },
    { "soal": "Alat untuk mengukur kuat medan magnet?", "jawaban": "Gaussmeter" },
    { "soal": "Contoh alat optik alami?", "jawaban": "Mata" },
    { "soal": "Hukum Ohm rumusnya?", "jawaban": "V = I × R" },
    { "soal": "Arus listrik mengalir dari?", "jawaban": "Positif ke negatif" },
    { "soal": "Satuan hambatan listrik?", "jawaban": "Ohm" },
    { "soal": "Kapasitor berfungsi untuk?", "jawaban": "Menyimpan muatan listrik" },
    { "soal": "Cahaya putih terdiri dari?", "jawaban": "Warna pelangi" },
    { "soal": "Alat untuk mengukur panjang benda?", "jawaban": "Jangka Sorong" },
    { "soal": "Benda dikatakan mengapung jika?", "jawaban": "Gaya Archimedes = Berat benda" },
    { "soal": "Contoh konduktor panas yang baik?", "jawaban": "Logam" },
    { "soal": "Satuan tekanan dalam SI?", "jawaban": "Pascal" },
    { "soal": "Jenis cermin yang sering dipakai di mobil?", "jawaban": "Cermin cembung" },
    { "soal": "Energi yang dimiliki benda karena geraknya?", "jawaban": "Kinetik" },
    { "soal": "Kegiatan mengubah energi listrik menjadi cahaya?", "jawaban": "Lampu menyala" },
    { "soal": "Gerak jatuh bebas dipengaruhi oleh?", "jawaban": "Gravitasi" },
    { "soal": "Jenis gelombang pada tali?", "jawaban": "Transversal" },
    { "soal": "Rumus daya listrik?", "jawaban": "P = V × I" },
    { "soal": "Bunyi pantul yang terdengar kembali disebut?", "jawaban": "Gema" },
    { "soal": "Sifat bayangan cermin datar?", "jawaban": "Tegak dan sama besar" },
    { "soal": "Apa itu kalor?", "jawaban": "Energi panas" },
    { "soal": "Contoh sumber energi mekanik?", "jawaban": "Air terjun" },
    { "soal": "Komponen listrik yang menghambat arus?", "jawaban": "Resistor" },
    { "soal": "Alat untuk mengukur beda potensial?", "jawaban": "Voltmeter" },
    { "soal": "Satuan kecepatan dalam SI?", "jawaban": "m/s" }
]
    }
};

    // Tombol mulai game
    startButton.addEventListener("click", function () {
        menu.style.display = "none";
        levelSelection.style.display = "block";
    });

    // Menampilkan mata pelajaran setelah memilih tingkat pendidikan
    function showSubjects(level) {
        currentLevel = level;
        levelSelection.style.display = "none";
        subjectSelection.style.display = "block";
        subjectList.innerHTML = "";

        Object.keys(soalData[level]).forEach((subject) => {
            const button = document.createElement("button");
            button.innerText = subject;
            button.addEventListener("click", function () {
                startGame(level, subject, 0); // Langsung mulai game
            });
            subjectList.appendChild(button);
        });
    }

    // Memulai game dengan soal pertama
    function startGame(level, subject, index) {
        currentLevel = level;
        currentSubject = subject;
        currentQuestionIndex = index;
        questions = soalData[level][subject];
        subjectSelection.style.display = "none";
        gameScreen.style.display = "block";
        answerInput.style.display = "block";
        jawabButton.style.display = "block";
        showQuestion();
    }
function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        questionText.innerText = questions[currentQuestionIndex].soal;  // Ubah ke format baru
        answerInput.value = "";
        feedback.innerText = "";
    } else {
        feedback.innerText = "Selamat! Kamu telah menyelesaikan semua soal.";
        answerInput.style.display = "none";
        jawabButton.style.display = "none";
    }
}
 
jawabButton.addEventListener("click", function () {
    if (answerInput.value.trim() !== "") {
        const userAnswer = answerInput.value.trim().toLowerCase();
        const correctAnswer = questions[currentQuestionIndex].jawaban.trim().toLowerCase();

        if (userAnswer === correctAnswer) {
            feedback.innerText = "Jawaban benar!";
            feedback.style.color = "green";
            setTimeout(() => {
                currentQuestionIndex++;
                showQuestion();
                answerInput.value = ""; // reset input setelah benar
            }, 1000);
        } else {
            feedback.innerText = "Jawaban salah!";
            feedback.style.color = "red";
            answerInput.value = ""; // << INI BAGIAN PENTING: langsung hapus jawaban user saat salah
            setTimeout(() => {
                feedback.innerText = "";
            }, 1500);
        }
    } else {
        feedback.innerText = "Harap isi jawaban!";
        feedback.style.color = "orange";
        setTimeout(() => {
            feedback.innerText = "";
        }, 1500);
    }
});

    // Kembali ke pemilihan level
    backToLevel.addEventListener("click", function () {
        gameScreen.style.display = "none";
        levelSelection.style.display = "block";
        feedback.innerText = "";  // Hapus feedback agar tidak tersisa
    });

    // Event listener untuk tombol level
    sdButton.addEventListener("click", function () {
        showSubjects("SD");
    });

    smpButton.addEventListener("click", function () {
        showSubjects("SMP");
    });

    smkButton.addEventListener("click", function () {
        showSubjects("SMK");
    });

    // Hilangkan efek biru saat klik tombol
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("mouseup", function () {
            this.blur();
        });
    });
});
// Progress Bar sesuai durasi video 30 detik
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const awalScreen = document.getElementById("awal");
const menuScreen = document.getElementById("menu");
const loadingVideo = document.getElementById("loading-video");

// Durasi video dalam detik
const videoDuration = 14;
let progress = 0;
const updateInterval = 100; // Update setiap 100ms (0.1 detik)

// Update progress bar
const interval = setInterval(() => {
    progress += (100 / (videoDuration * (1000 / updateInterval))); // Hitung persen
    progressBar.style.width = `${progress}%`;
    progressText.innerText = `${Math.floor(progress)}%`;

    if (progress >= 100) {
        clearInterval(interval); // Hentikan interval setelah selesai
        awalScreen.style.display = "none"; // Sembunyikan loading
        menuScreen.style.display = "flex"; // Tampilkan menu utama
    }
}, updateInterval);