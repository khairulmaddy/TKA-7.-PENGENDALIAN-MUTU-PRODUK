import { Question } from '../types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    level: 'C5 – Mengevaluasi',
    type: 'pg',
    questionText: 'Sebuah usaha memproduksi 1.000 unit kemasan makanan. Hasil inspeksi menunjukkan 80 unit memiliki ukuran tidak sesuai standar, tetapi supervisor hanya meminta pekerja menyortir produk cacat tanpa mencari penyebabnya. Jika tujuan perusahaan adalah menurunkan tingkat cacat secara berkelanjutan, tindakan yang paling tepat adalah …',
    options: [
      'A. Menambah jumlah petugas inspeksi akhir',
      'B. Mengurangi jumlah produksi agar cacat berkurang',
      'C. Menganalisis akar penyebab cacat dan menetapkan tindakan korektif serta pencegahan',
      'D. Mengemas kembali semua produk tanpa pemeriksaan',
      'E. Mengabaikan cacat selama pelanggan belum mengeluh'
    ],
    correctAnswer: 'C',
    explanation: 'Penyortiran hanya memisahkan produk yang sudah cacat. Pengendalian mutu yang efektif harus dilanjutkan dengan analisis akar penyebab, tindakan korektif, dan pencegahan agar masalah tidak berulang.'
  },
  {
    id: 2,
    level: 'C4 – Menganalisis',
    type: 'pg',
    questionText: 'Pada proses produksi minuman, jumlah produk cacat meningkat setiap kali mesin pengisi digunakan pada akhir shift. Data menunjukkan operator pada akhir shift sering mengganti kecepatan mesin untuk mengejar target. Analisis yang paling logis adalah …',
    options: [
      'A. Cacat pasti disebabkan oleh bahan baku',
      'B. Perubahan kecepatan mesin dapat menjadi faktor penyebab yang perlu diuji',
      'C. Operator harus langsung diberi sanksi',
      'D. Pemeriksaan akhir harus dihentikan',
      'E. Target produksi harus dinaikkan'
    ],
    correctAnswer: 'B',
    explanation: 'Data menunjukkan hubungan waktu proses, perubahan kecepatan, dan kenaikan cacat. Hubungan tersebut belum otomatis membuktikan sebab, tetapi merupakan faktor yang layak diuji melalui analisis proses.'
  },
  {
    id: 3,
    level: 'C5 – Mengevaluasi',
    type: 'pg_kompleks',
    questionText: 'Tim mutu menemukan bahwa 70% cacat berasal dari tiga jenis masalah: ukuran tidak sesuai, label miring, dan kemasan bocor. Tindakan yang tepat adalah … (Pilih semua jawaban yang benar)',
    options: [
      'A. Memprioritaskan perbaikan pada penyebab dengan kontribusi cacat terbesar',
      'B. Menggunakan data frekuensi cacat sebagai dasar penentuan prioritas',
      'C. Memperbaiki semua masalah secara acak tanpa prioritas',
      'D. Menelusuri akar penyebab dari tiga masalah utama',
      'E. Menghentikan pencatatan cacat karena sudah diketahui jenisnya'
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation: 'Prinsip prioritas mutu menggunakan data. Masalah dominan perlu dianalisis terlebih dahulu, kemudian dicari akar penyebabnya. C dan E tidak mendukung perbaikan berbasis data.'
  },
  {
    id: 4,
    level: 'C3 – Menerapkan',
    type: 'pg',
    questionText: 'Operator menemukan 5 produk tidak sesuai spesifikasi saat pemeriksaan proses. Berdasarkan prosedur pengendalian mutu, tindakan pertama yang paling tepat adalah …',
    options: [
      'A. Mencampurkan produk dengan produk baik',
      'B. Menjual produk dengan harga lebih murah tanpa keputusan mutu',
      'C. Memisahkan dan mengidentifikasi produk tidak sesuai',
      'D. Membuang seluruh produksi',
      'E. Mengubah standar spesifikasi'
    ],
    correctAnswer: 'C',
    explanation: 'Produk tidak sesuai harus dikendalikan agar tidak tercampur dengan produk sesuai. Identifikasi dan pemisahan merupakan langkah penting sebelum keputusan berikutnya.'
  },
  {
    id: 5,
    level: 'C2 – Memahami',
    type: 'benar_salah',
    questionText: "Pernyataan: 'Pengendalian mutu hanya dilakukan pada pemeriksaan produk akhir setelah proses produksi selesai.'",
    options: ['A. Benar', 'B. Salah'],
    correctAnswer: 'Salah',
    explanation: 'Pengendalian mutu sebaiknya dilakukan sepanjang proses, mulai dari bahan baku, proses produksi, hingga produk akhir, sehingga penyimpangan dapat ditemukan lebih awal.'
  },
  {
    id: 6,
    level: 'C1 – Mengingat',
    type: 'pg',
    questionText: 'Alat pengendalian mutu yang digunakan untuk mengidentifikasi dan mengelompokkan penyebab potensial suatu masalah adalah …',
    options: [
      'A. Fishbone diagram',
      'B. Invoice',
      'C. Faktur penjualan',
      'D. Nota pembelian',
      'E. Katalog produk'
    ],
    correctAnswer: 'A',
    explanation: 'Fishbone diagram atau diagram sebab-akibat digunakan untuk mengelompokkan dan menelusuri kemungkinan penyebab suatu masalah.'
  },
  {
    id: 7,
    level: 'C4 – Menganalisis',
    type: 'pg',
    questionText: 'Data cacat selama satu minggu adalah: Senin 4, Selasa 5, Rabu 6, Kamis 12, Jumat 13. Tidak ada perubahan bahan baku, tetapi Kamis dan Jumat terjadi pergantian operator. Kesimpulan awal yang paling tepat adalah …',
    options: [
      'A. Pergantian operator merupakan satu-satunya penyebab',
      'B. Hari Kamis dan Jumat perlu dianalisis lebih lanjut karena terjadi lonjakan cacat bersamaan dengan pergantian operator',
      'C. Hari Senin pasti memiliki kualitas terburuk',
      'D. Data tidak dapat digunakan sama sekali',
      'E. Semua operator harus diganti'
    ],
    correctAnswer: 'B',
    explanation: 'Data menunjukkan pola lonjakan yang perlu diselidiki. Pergantian operator adalah hipotesis penyebab, bukan bukti tunggal. Analisis lanjutan diperlukan.'
  },
  {
    id: 8,
    level: 'C5 – Mengevaluasi',
    type: 'pg',
    questionText: 'Sebuah perusahaan memiliki standar berat produk 500 ± 10 gram. Hasil pemeriksaan menunjukkan rata-rata 500 gram, tetapi beberapa produk berada di 485 gram dan 515 gram. Evaluasi yang paling tepat adalah …',
    options: [
      'A. Semua produk pasti memenuhi standar karena rata-ratanya 500 gram',
      'B. Produk perlu dievaluasi berdasarkan batas spesifikasi individual, bukan hanya rata-rata',
      'C. Rata-rata selalu lebih penting daripada batas spesifikasi',
      'D. Standar harus dihapus',
      'E. Produk 485 dan 515 gram pasti dapat dijual'
    ],
    correctAnswer: 'B',
    explanation: 'Mutu tidak cukup dinilai dari rata-rata. Batas spesifikasi menentukan apakah unit individual memenuhi persyaratan.'
  },
  {
    id: 9,
    level: 'C3 – Menerapkan',
    type: 'menjodohkan',
    questionText: 'Pasangkan alat/konsep pada Kolom A dengan fungsi yang paling tepat pada Kolom B.',
    correctAnswer: {
      '1': 'A',
      '2': 'C',
      '3': 'B',
      '4': 'E',
      '5': 'D'
    },
    matchingData: {
      columnA: [
        { id: '1', text: '1. Check sheet' },
        { id: '2', text: '2. Pareto' },
        { id: '3', text: '3. Fishbone' },
        { id: '4', text: '4. Peta kendali' },
        { id: '5', text: '5. SOP' }
      ],
      columnB: [
        { id: 'A', text: 'A. Mencatat kejadian/hasil pemeriksaan secara sistematis' },
        { id: 'B', text: 'B. Mengelompokkan kemungkinan penyebab masalah' },
        { id: 'C', text: 'C. Menentukan prioritas berdasarkan kontribusi masalah' },
        { id: 'D', text: 'D. Menetapkan langkah kerja yang seragam' },
        { id: 'E', text: 'E. Memantau kestabilan proses dari waktu ke waktu' }
      ]
    },
    explanation: 'Check sheet untuk pencatatan data; Pareto untuk menentukan prioritas masalah; fishbone untuk menganalisis penyebab; peta kendali untuk memantau kestabilan proses; SOP sebagai standar langkah kerja.'
  },
  {
    id: 10,
    level: 'C2 – Memahami',
    type: 'pg',
    questionText: 'Tujuan utama penerapan SOP dalam pengendalian mutu adalah …',
    options: [
      'A. Membuat pekerjaan selalu lebih lambat',
      'B. Menyeragamkan pelaksanaan kerja agar sesuai standar',
      'C. Menghilangkan kebutuhan pelatihan',
      'D. Membebaskan operator mengubah prosedur',
      'E. Mengurangi pencatatan'
    ],
    correctAnswer: 'B',
    explanation: 'SOP memberi urutan dan standar kerja yang seragam sehingga variasi proses dapat dikendalikan.'
  },
  {
    id: 11,
    level: 'C5 – Mengevaluasi',
    type: 'pg_kompleks',
    questionText: "Sebuah produk sering mengalami cacat 'kemasan bocor'. Tim ingin melakukan analisis akar penyebab. Data yang sebaiknya dikaji antara lain … (Pilih semua jawaban yang benar)",
    options: [
      'A. Kondisi mesin sealing',
      'B. Suhu dan waktu sealing',
      'C. Jenis bahan kemasan',
      'D. Prosedur kerja operator',
      'E. Warna seragam operator'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: 'Empat faktor tersebut dapat berhubungan langsung dengan kebocoran kemasan. Warna seragam tidak memiliki hubungan teknis yang relevan tanpa bukti khusus.'
  },
  {
    id: 12,
    level: 'C4 – Menganalisis',
    type: 'pg',
    questionText: 'Jika diagram Pareto menunjukkan satu jenis cacat menyumbang 55% dari seluruh cacat, keputusan paling rasional adalah …',
    options: [
      'A. Memprioritaskan investigasi jenis cacat tersebut',
      'B. Mengabaikannya karena hanya satu jenis cacat',
      'C. Memperbaiki cacat yang jumlahnya paling sedikit',
      'D. Menghentikan pengumpulan data',
      'E. Mengganti semua mesin tanpa analisis'
    ],
    correctAnswer: 'A',
    explanation: 'Pareto membantu menentukan prioritas. Cacat dengan kontribusi terbesar menjadi fokus awal agar sumber daya perbaikan digunakan secara efektif.'
  },
  {
    id: 13,
    level: 'C3 – Menerapkan',
    type: 'pg',
    questionText: 'Saat menerima bahan baku, petugas menemukan sebagian bahan tidak sesuai spesifikasi. Tindakan yang paling tepat adalah …',
    options: [
      'A. Langsung mencampurnya dengan bahan sesuai',
      'B. Menggunakan semuanya agar tidak rugi',
      'C. Menahan/memisahkan bahan dan melaporkan ketidaksesuaian sesuai prosedur',
      'D. Mengubah spesifikasi secara sepihak',
      'E. Menghapus catatan pemeriksaan'
    ],
    correctAnswer: 'C',
    explanation: 'Bahan tidak sesuai harus dikendalikan agar tidak masuk ke proses tanpa keputusan yang sah.'
  },
  {
    id: 14,
    level: 'C4 – Menganalisis',
    type: 'benar_salah',
    questionText: "Pernyataan: 'Jika jumlah produk cacat menurun, perusahaan tidak perlu lagi melakukan pengukuran mutu karena proses sudah pasti stabil.'",
    options: ['A. Benar', 'B. Salah'],
    correctAnswer: 'Salah',
    explanation: 'Penurunan cacat merupakan hasil positif, tetapi stabilitas proses tetap perlu dipantau agar penyimpangan dapat dideteksi sebelum menjadi masalah besar.'
  },
  {
    id: 15,
    level: 'C5 – Mengevaluasi',
    type: 'pg',
    questionText: 'Sebuah perusahaan memilih meningkatkan inspeksi akhir dari 5% menjadi 100% untuk mengatasi cacat yang terus berulang. Setelah satu bulan, jumlah produk cacat tetap tinggi. Evaluasi terbaik terhadap keputusan tersebut adalah …',
    options: [
      'A. Inspeksi 100% selalu salah',
      'B. Inspeksi akhir dapat mendeteksi cacat, tetapi tidak otomatis menghilangkan akar penyebab',
      'C. Pemeriksaan harus dihentikan',
      'D. Semua produk harus dibuang',
      'E. Standar mutu harus diturunkan'
    ],
    correctAnswer: 'B',
    explanation: 'Inspeksi berfungsi mendeteksi ketidaksesuaian. Untuk mengurangi cacat berulang, perusahaan harus memperbaiki proses dan akar penyebabnya.'
  },
  {
    id: 16,
    level: 'C2 – Memahami',
    type: 'pg',
    questionText: 'Perbedaan utama quality control (QC) dan quality assurance (QA) adalah …',
    options: [
      'A. QC lebih berfokus pada pemeriksaan/pengendalian hasil dan proses, sedangkan QA berfokus pada sistem untuk menjamin mutu',
      'B. QC hanya mengurus pemasaran',
      'C. QA hanya memeriksa produk akhir',
      'D. QC tidak membutuhkan standar',
      'E. QA berarti mengurangi jumlah produksi'
    ],
    correctAnswer: 'A',
    explanation: 'Secara umum QC berorientasi pada pengendalian dan pemeriksaan mutu, sedangkan QA menekankan sistem/proses yang dirancang untuk memberikan jaminan mutu.'
  },
  {
    id: 17,
    level: 'C4 – Menganalisis',
    type: 'pg_kompleks',
    questionText: 'Dalam penerapan sampling bahan baku, faktor yang perlu dipertimbangkan adalah … (Pilih semua jawaban yang benar)',
    options: [
      'A. Ukuran lot',
      'B. Risiko kesalahan keputusan',
      'C. Rencana sampling yang ditetapkan',
      'D. Karakteristik dan tingkat risiko bahan',
      'E. Selera pribadi petugas'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: 'Sampling harus dirancang berdasarkan ukuran lot, risiko, karakteristik bahan, dan rencana sampling. Selera pribadi tidak boleh menjadi dasar keputusan mutu.'
  },
  {
    id: 18,
    level: 'C3 – Menerapkan',
    type: 'pg',
    questionText: 'Ketika hasil pengukuran produk berada tepat di batas spesifikasi, operator sebaiknya …',
    options: [
      'A. Mengubah hasil pengukuran agar masuk standar',
      'B. Mengabaikannya',
      'C. Mengikuti ketentuan spesifikasi dan prosedur pengukuran yang berlaku',
      'D. Menjual tanpa pemeriksaan',
      'E. Menghapus batas spesifikasi'
    ],
    correctAnswer: 'C',
    explanation: 'Produk pada batas spesifikasi harus dinilai sesuai definisi batas yang berlaku dan menggunakan alat/metode pengukuran yang benar.'
  },
  {
    id: 19,
    level: 'C5 – Mengevaluasi',
    type: 'pg',
    questionText: 'Setelah tindakan korektif dilakukan, tingkat cacat turun dari 8% menjadi 2%. Namun, tiga bulan kemudian cacat kembali naik menjadi 7%. Kesimpulan terbaik adalah …',
    options: [
      'A. Tindakan korektif pasti gagal total',
      'B. Perlu dilakukan evaluasi efektivitas dan kemungkinan penyebab kambuhnya masalah',
      'C. Data tiga bulan tidak penting',
      'D. Operator harus langsung diganti',
      'E. Standar mutu harus diturunkan'
    ],
    correctAnswer: 'B',
    explanation: 'Kenaikan kembali menunjukkan perlunya evaluasi efektivitas tindakan, konsistensi penerapan, dan faktor penyebab baru atau penyebab lama yang muncul kembali.'
  },
  {
    id: 20,
    level: 'C1 – Mengingat',
    type: 'pg',
    questionText: 'Siklus perbaikan berkelanjutan yang terdiri dari Plan–Do–Check–Act dikenal sebagai …',
    options: [
      'A. PDCA',
      'B. SWOT',
      'C. FIFO',
      'D. FEFO',
      'E. 5W1H'
    ],
    correctAnswer: 'A',
    explanation: 'PDCA adalah siklus Plan, Do, Check, Act yang digunakan untuk pengendalian dan perbaikan berkelanjutan.'
  },
  {
    id: 21,
    level: 'C4 – Menganalisis',
    type: 'pg',
    questionText: "Dalam fishbone, penyebab masalah 'produk tidak presisi' dikelompokkan ke dalam faktor manusia, mesin, metode, material, pengukuran, dan lingkungan. Jika alat ukur ternyata belum dikalibrasi, faktor yang paling relevan adalah …",
    options: [
      'A. Manusia',
      'B. Mesin',
      'C. Metode',
      'D. Pengukuran',
      'E. Lingkungan'
    ],
    correctAnswer: 'D',
    explanation: 'Alat ukur dan proses pengukuran termasuk faktor measurement/pengukuran dalam analisis sebab-akibat.'
  },
  {
    id: 22,
    level: 'C5 – Mengevaluasi',
    type: 'pg_kompleks',
    questionText: 'Untuk membangun budaya mutu di tempat kerja, tindakan yang paling tepat adalah … (Pilih semua jawaban yang benar)',
    options: [
      'A. Melibatkan operator dalam identifikasi masalah',
      'B. Menggunakan data sebagai dasar keputusan',
      'C. Memberikan umpan balik dan pelatihan',
      'D. Menyembunyikan data cacat agar citra perusahaan terlihat baik',
      'E. Mendorong perbaikan berkelanjutan'
    ],
    correctAnswer: ['A', 'B', 'C', 'E'],
    explanation: 'Budaya mutu membutuhkan keterlibatan, data, pembelajaran, dan perbaikan berkelanjutan. Menyembunyikan data justru menghambat perbaikan.'
  },
  {
    id: 23,
    level: 'C3 – Menerapkan',
    type: 'benar_salah',
    questionText: "Pernyataan: 'Produk yang sudah dipisahkan sebagai produk tidak sesuai boleh dikembalikan ke area produk baik selama belum ada pelanggan yang menerima.'",
    options: ['A. Benar', 'B. Salah'],
    correctAnswer: 'Salah',
    explanation: 'Produk tidak sesuai harus diberi identifikasi dan dikendalikan untuk mencegah tercampur kembali. Keputusan rework, repair, reject, atau release harus mengikuti prosedur.'
  },
  {
    id: 24,
    level: 'C2 – Memahami',
    type: 'pg',
    questionText: 'Mengapa pencatatan hasil pemeriksaan mutu penting?',
    options: [
      'A. Agar data dapat ditelusuri dan digunakan untuk analisis serta pengambilan keputusan',
      'B. Agar pekerjaan terlihat lebih banyak',
      'C. Agar operator tidak perlu memahami standar',
      'D. Agar semua produk dianggap baik',
      'E. Agar perusahaan tidak perlu melakukan evaluasi'
    ],
    correctAnswer: 'A',
    explanation: 'Dokumentasi menyediakan bukti dan data historis untuk ketertelusuran, analisis masalah, evaluasi, dan perbaikan.'
  },
  {
    id: 25,
    level: 'C5 – Mengevaluasi',
    type: 'pg',
    questionText: 'Dua pemasok menawarkan bahan baku. Pemasok A lebih murah tetapi riwayat ketidaksesuaian 9%; pemasok B lebih mahal tetapi ketidaksesuaian hanya 1%. Jika mutu produk merupakan prioritas utama, keputusan yang paling tepat adalah …',
    options: [
      'A. Selalu memilih pemasok A karena murah',
      'B. Memilih B tanpa evaluasi lain',
      'C. Membandingkan total biaya, risiko mutu, konsistensi, dan persyaratan sebelum menetapkan pemasok',
      'D. Memilih secara acak',
      'E. Mengabaikan data ketidaksesuaian'
    ],
    correctAnswer: 'C',
    explanation: 'Keputusan pemasok harus mempertimbangkan mutu dan risiko selain harga. Data historis merupakan bahan penting, tetapi evaluasi sebaiknya menyeluruh.'
  },
  {
    id: 26,
    level: 'C4 – Menganalisis',
    type: 'pg',
    questionText: 'Pada peta kendali, beberapa titik berturut-turut menunjukkan pola yang tidak biasa walaupun belum melewati batas kendali. Hal tersebut sebaiknya …',
    options: [
      'A. Diabaikan karena belum melewati batas',
      'B. Dianalisis sebagai kemungkinan sinyal perubahan proses sesuai aturan peta kendali',
      'C. Langsung dianggap produk cacat',
      'D. Dijadikan alasan menghapus peta kendali',
      'E. Diganti dengan inspeksi visual saja'
    ],
    correctAnswer: 'B',
    explanation: 'Pola tertentu dapat menjadi sinyal perubahan proses meskipun titik belum melewati batas kendali. Aturan interpretasi peta kendali perlu digunakan.'
  },
  {
    id: 27,
    level: 'C2 – Memahami',
    type: 'menjodohkan',
    questionText: 'Pasangkan istilah pada Kolom A dengan pengertiannya pada Kolom B.',
    correctAnswer: {
      '1': 'D',
      '2': 'B',
      '3': 'E',
      '4': 'A',
      '5': 'C'
    },
    matchingData: {
      columnA: [
        { id: '1', text: '1. Ketidaksesuaian' },
        { id: '2', text: '2. Tindakan korektif' },
        { id: '3', text: '3. Tindakan preventif' },
        { id: '4', text: '4. Kalibrasi' },
        { id: '5', text: '5. Inspeksi' }
      ],
      columnB: [
        { id: 'A', text: 'A. Memastikan alat ukur sesuai acuan/standar' },
        { id: 'B', text: 'B. Menghilangkan penyebab ketidaksesuaian yang sudah terjadi' },
        { id: 'C', text: 'C. Pemeriksaan terhadap persyaratan' },
        { id: 'D', text: 'D. Kondisi ketika persyaratan tidak terpenuhi' },
        { id: 'E', text: 'E. Mencegah potensi masalah agar tidak terjadi' }
      ]
    },
    explanation: 'Ketidaksesuaian = tidak memenuhi persyaratan; korektif = menghilangkan penyebab masalah yang terjadi; preventif = mencegah potensi masalah; kalibrasi = memastikan alat ukur sesuai acuan; inspeksi = pemeriksaan terhadap persyaratan.'
  },
  {
    id: 28,
    level: 'C3 – Menerapkan',
    type: 'pg_kompleks',
    questionText: 'Dalam melakukan inspeksi proses, perilaku kerja yang benar adalah … (Pilih semua jawaban yang benar)',
    options: [
      'A. Menggunakan alat ukur sesuai SOP',
      'B. Mencatat hasil secara objektif',
      'C. Melaporkan penyimpangan',
      'D. Mengubah hasil agar target tercapai',
      'E. Memastikan identitas sampel/produk jelas'
    ],
    correctAnswer: ['A', 'B', 'C', 'E'],
    explanation: 'Inspeksi harus objektif, dapat ditelusuri, menggunakan metode yang benar, dan melaporkan penyimpangan. Manipulasi data merupakan tindakan yang salah.'
  },
  {
    id: 29,
    level: 'C4 – Menganalisis',
    type: 'pg',
    questionText: 'Hasil pemeriksaan menunjukkan 90% produk memenuhi standar, tetapi pelanggan banyak mengeluhkan fungsi produk. Apa yang perlu dievaluasi terlebih dahulu?',
    options: [
      'A. Apakah standar pemeriksaan sudah mencerminkan kebutuhan pelanggan dan fungsi produk',
      'B. Menurunkan standar',
      'C. Menghapus keluhan pelanggan',
      'D. Mengurangi jumlah inspeksi',
      'E. Menganggap pelanggan selalu salah'
    ],
    correctAnswer: 'A',
    explanation: 'Mutu harus dikaitkan dengan persyaratan yang relevan, termasuk fungsi dan kebutuhan pelanggan. Tingginya tingkat kelulusan inspeksi tidak otomatis berarti mutu memenuhi harapan pengguna.'
  },
  {
    id: 30,
    level: 'C5 – Mengevaluasi',
    type: 'pg',
    questionText: 'Sebuah tim menemukan bahwa kesalahan label terjadi karena desain label berubah, tetapi SOP belum diperbarui. Tindakan paling tepat adalah …',
    options: [
      'A. Menyalahkan operator saja',
      'B. Memperbarui SOP dan mengendalikan perubahan dokumen, kemudian memastikan operator memahami perubahan',
      'C. Menghapus SOP',
      'D. Mengabaikan kesalahan karena hanya label',
      'E. Mengganti semua produk tanpa memperbaiki sistem'
    ],
    correctAnswer: 'B',
    explanation: 'Masalah terjadi karena perubahan proses/dokumen tidak terkendali. Sistem mutu perlu memastikan dokumen diperbarui, disahkan, dikomunikasikan, dan dipahami.'
  },
  {
    id: 31,
    level: 'C1 – Mengingat',
    type: 'benar_salah',
    questionText: "Pernyataan: 'Diagram Pareto pada prinsipnya membantu memusatkan perhatian pada beberapa masalah yang memberikan kontribusi terbesar.'",
    options: ['A. Benar', 'B. Salah'],
    correctAnswer: 'Benar',
    explanation: 'Pareto digunakan untuk membantu menentukan prioritas berdasarkan kontribusi atau frekuensi masalah.'
  },
  {
    id: 32,
    level: 'C3 – Menerapkan',
    type: 'pg',
    questionText: 'Jika ditemukan alat ukur yang digunakan untuk pemeriksaan ternyata melewati jadwal kalibrasi, tindakan yang paling tepat adalah …',
    options: [
      'A. Tetap digunakan tanpa catatan',
      'B. Menghapus hasil pengukuran sebelumnya',
      'C. Mengikuti prosedur pengendalian alat ukur, menilai dampak hasil sebelumnya, dan memastikan alat layak digunakan',
      'D. Mengubah batas spesifikasi',
      'E. Menyembunyikan informasi'
    ],
    correctAnswer: 'C',
    explanation: 'Alat ukur yang statusnya tidak sesuai harus dikendalikan. Dampak terhadap hasil pengukuran sebelumnya perlu dinilai sesuai prosedur.'
  },
  {
    id: 33,
    level: 'C4 – Menganalisis',
    type: 'pg_kompleks',
    questionText: 'Dalam analisis masalah kualitas, pertanyaan 5 Why dapat digunakan untuk … (Pilih semua jawaban yang benar)',
    options: [
      'A. Menggali penyebab secara bertahap',
      'B. Menghindari kesimpulan terlalu cepat',
      'C. Membantu menemukan akar penyebab',
      'D. Menentukan harga jual secara langsung',
      'E. Memastikan masalah hanya disebabkan manusia'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: '5 Why membantu menggali hubungan sebab-akibat secara bertahap. Alat ini tidak secara langsung menentukan harga jual dan tidak boleh mengasumsikan manusia sebagai satu-satunya penyebab.'
  },
  {
    id: 34,
    level: 'C5 – Mengevaluasi',
    type: 'pg',
    questionText: 'Setelah penerapan perbaikan, cacat turun dari 6% menjadi 1%. Manajer ingin langsung menghentikan semua aktivitas monitoring mutu. Penilaian yang paling tepat adalah …',
    options: [
      'A. Tepat, karena masalah sudah selesai selamanya',
      'B. Kurang tepat; monitoring tetap diperlukan untuk memastikan hasil perbaikan dipertahankan',
      'C. Tepat, karena monitoring hanya untuk produk cacat',
      'D. Tidak perlu dokumentasi',
      'E. Standar harus diturunkan'
    ],
    correctAnswer: 'B',
    explanation: 'Perbaikan perlu dipertahankan dan diverifikasi. Monitoring membantu memastikan proses tetap terkendali dan hasil perbaikan tidak kembali memburuk.'
  },
  {
    id: 35,
    level: 'C2 – Memahami',
    type: 'pg',
    questionText: 'Yang dimaksud dengan ketertelusuran (traceability) dalam pengendalian mutu adalah …',
    options: [
      'A. Kemampuan menelusuri riwayat, identitas, atau asal suatu produk/proses berdasarkan catatan yang tersedia',
      'B. Kemampuan menjual produk lebih cepat',
      'C. Kemampuan menghapus data lama',
      'D. Kemampuan menaikkan harga',
      'E. Kemampuan mengurangi pemeriksaan'
    ],
    correctAnswer: 'A',
    explanation: 'Traceability memungkinkan produk/proses ditelusuri berdasarkan identitas dan rekaman, misalnya lot, tanggal produksi, bahan, atau hasil pemeriksaan.'
  },
  {
    id: 36,
    level: 'C4 – Menganalisis',
    type: 'benar_salah',
    questionText: "Pernyataan: 'Jika suatu proses menghasilkan rata-rata sesuai target, maka variasi proses tidak perlu dianalisis.'",
    options: ['A. Benar', 'B. Salah'],
    correctAnswer: 'Salah',
    explanation: 'Rata-rata yang sesuai belum menjamin proses konsisten. Variasi perlu dianalisis karena variasi tinggi dapat menyebabkan produk keluar dari spesifikasi.'
  },
  {
    id: 37,
    level: 'C5 – Mengevaluasi',
    type: 'pg_kompleks',
    questionText: 'Sebuah tim hendak memilih solusi atas masalah cacat produk. Kriteria solusi yang baik antara lain … (Pilih semua jawaban yang benar)',
    options: [
      'A. Mengatasi akar penyebab',
      'B. Dapat diterapkan dan dipantau',
      'C. Mempertimbangkan risiko dan biaya',
      'D. Hanya terlihat cepat tanpa melihat dampak jangka panjang',
      'E. Tidak bertentangan dengan standar keselamatan dan mutu'
    ],
    correctAnswer: ['A', 'B', 'C', 'E'],
    explanation: 'Solusi mutu harus efektif terhadap akar penyebab, realistis diterapkan, mempertimbangkan risiko/biaya, dan tetap memenuhi standar. Kecepatan saja tidak cukup.'
  },
  {
    id: 38,
    level: 'C3 – Menerapkan',
    type: 'pg',
    questionText: 'Dalam rapat evaluasi mutu, seorang operator mengusulkan perubahan urutan kerja yang menurutnya dapat mengurangi kesalahan. Langkah terbaik adalah …',
    options: [
      'A. Langsung menerapkannya tanpa pengujian',
      'B. Menolak karena ide berasal dari operator',
      'C. Mengkaji usulan, menguji secara terkendali bila memungkinkan, mengevaluasi hasil, lalu memperbarui prosedur jika disetujui',
      'D. Mengubah standar mutu',
      'E. Menunggu pelanggan mengeluh'
    ],
    correctAnswer: 'C',
    explanation: 'Perbaikan proses perlu dikelola secara sistematis. Usulan diuji dan dievaluasi sebelum ditetapkan menjadi prosedur resmi.'
  },
  {
    id: 39,
    level: 'C2 – Memahami',
    type: 'pg',
    questionText: 'Manfaat utama tindakan pencegahan dalam pengendalian mutu adalah …',
    options: [
      'A. Mengurangi kemungkinan masalah terjadi atau berulang',
      'B. Menambah jumlah produk cacat',
      'C. Menghilangkan kebutuhan standar',
      'D. Mengurangi keterlibatan pekerja',
      'E. Menghapus data mutu'
    ],
    correctAnswer: 'A',
    explanation: 'Tindakan pencegahan diarahkan untuk mengurangi kemungkinan terjadinya masalah atau munculnya kembali masalah melalui pengendalian faktor penyebab.'
  },
  {
    id: 40,
    level: 'C5 – Mengevaluasi',
    type: 'pg_kompleks',
    questionText: 'Perusahaan ingin menerapkan pembelajaran mendalam (deep learning) dalam proyek pengendalian mutu produk. Aktivitas yang paling sesuai adalah … (Pilih semua jawaban yang benar)',
    options: [
      'A. Peserta didik hanya menghafal definisi QC',
      'B. Peserta didik menganalisis data cacat nyata/simulasi dan mencari pola',
      'C. Peserta didik bekerja sama menemukan akar penyebab dan mempertahankan alasan keputusan',
      'D. Peserta didik merancang usulan perbaikan dan menguji indikator keberhasilannya',
      'E. Peserta didik melakukan refleksi terhadap proses dan hasil perbaikan'
    ],
    correctAnswer: ['B', 'C', 'D', 'E'],
    explanation: 'Pembelajaran mendalam menekankan pemahaman bermakna, analisis, kolaborasi, penerapan, refleksi, dan pengambilan keputusan berbasis bukti. Hafalan saja tidak cukup.'
  }
];
