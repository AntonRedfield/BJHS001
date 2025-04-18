import { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Trophy,
  Calendar,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  School,
  Home,
  Users,
  GraduationCap,
  Award,
  Globe,
  Image
} from 'lucide-react';

const backgroundImages = [
  "https://miqdad0811.github.io/foto-guru-dan-yayasan/bg%20(2).jpg",
  "https://miqdad0811.github.io/foto-guru-dan-yayasan/bg.jpg",
  "https://miqdad0811.github.io/foto-guru-dan-yayasan/bg%20(3).jpg",
  "https://miqdad0811.github.io/foto-guru-dan-yayasan/prestasi%20(2).jpg",
  "https://miqdad0811.github.io/foto-guru-dan-yayasan/bg%20(4).jpg",
  "https://miqdad0811.github.io/foto-guru-dan-yayasan/bg%207.jpg",
  "https://miqdad0811.github.io/Binar-JHS/src/home%20page.jpeg",
];

const activities = [
  {
    id: 1,
    image: "https://miqdad0811.github.io/foto-guru-dan-yayasan/bts.jpg",
    title: "BASIRAH",
    description: "Kegiatan Bakti SOsial Ramadhan merupakan kegiatan sosial dengan membantu saudara muslim kita yang kesusahan, kegiatan ini dilaksanakan rutin dilakukan ketika bulan ramadhan."
  },
  {
    id: 3,
    image: "https://miqdad0811.github.io/Binar-JHS/src/adab.jpeg",
    title: "Kegiatan Nyabis",
    description: "kegiatan Nyabis dengan mengunjungi ulama untuk menuntut ilmu dan adab."
  },
  {
    id: 5,
    image: "https://miqdad0811.github.io/Binar-JHS/src/observasi.jpeg",
    title: "Observasi Lapangan",
    description: "Siswa-siswi kami berpartisipasi dalam melakukan observasi lapangan maupun mendatangkan guru tamu."
  },
  {
    id: 2,
    image: "https://miqdad0811.github.io/foto-guru-dan-yayasan/bifest%20fotbar.jpeg",
    title: "BINAR FESTIVAL",
    description: "BINAR FESTIVAL dilaksanakan setiap tahun, berbagai lomba dilakukan dan penampilan setiap Proyek Siswa-Siswi kami yang dibikin secara mandiri."
  },
  {
    id: 4,
    image: "https://miqdad0811.github.io/foto-guru-dan-yayasan/praktekipa.jpg",
    title: "Praktik Laboratorium",
    description: "Program sains kami membantu siswa mengembangkan keterampilan ilmiah melalui praktik langsung di laboratorium."
  },
  {
    id: 6,
    image: "https://miqdad0811.github.io/foto-guru-dan-yayasan/club%20bakat.jpg",
    title: "Club Bakat",
    description: "Club Bakat merupakan Club yang dapat dipilih oleh Siswa-Siswi, Banyak Macam-Macam Club Yang dapat pilih seperi Club Naturalis, Club Fotografi, Club Bahasa dan yang lainnya."
  },
  {
    id: 7,
    image: "https://miqdad0811.github.io/foto-guru-dan-yayasan/presentasi.jpg",
    title: "Presentasi",
    description: "Presentasi dilakukan untuk menjelaskan apa yang dibuat oleh Siswa-Siswi kami."
  },
];

const achievements = [
  {
    title: "Bintang Sobat SMP",
    year: "2024",
    description: "Kemendikdasmen Tingkat Nasional."
  },
  {
    title: "Juara 3 OSN IPS",
    year: "2024",
    description: "Tingkat Kabupaten."
  },
  {
    title: "Juara 3 O2SN Renang Putri",
    year: "2024",
    description: "Tingkat Kabupaten."
  },
  {
    title: "Juara 2 Cerpen Bahasa Madura",
    year: "2024",
    description: "FTBI Tingkat Provinsi"
  },
  {
    title: "Juara 1 Cerpen Bahasa Madura",
    year: "2024",
    description: "FTBI Tingkat Kabupaten."
  },
  {
    title: "Juara 3 Puisi Bahasa Madura",
    year: "2024",
    description: "FTBI Tingkat Provinsi."
  },
  {
    title: "Juara Harapan 3 Macapat",
    year: "2024",
    description: "FTBI Tingkat Provinsi."
  },
  {
    title: "Juara 1 Macapat",
    year: "2024",
    description: "FTBI Tingkat Kabupaten."
  },
  {
    title: "Juara 3 Lawakan Tunggal",
    year: "2024",
    description: "FTBI Tingkat Kabupaten."
  },
  {
    title: "Juara Harapan 3 Kaligrafi",
    year: "2024",
    description: "AKSARA, Se-Madura."
  },
  {
    title: "Juara 3 Duta Kesehatan Remaja",
    year: "2024",
    description: "Kabupaten Sumenep."
  },
  {
    title: "Juara 2 Membuat Vlog",
    year: "2024",
    description: "AKSARA, Se-Madura."
  },
  {
    title: "Juara 1 Cearamah Bahasa Inggris",
    year: "2024",
    description: "Se-kabupaten Sumenep."
  },
  {
    title: "Juara 2 Kejuaraan Pentaque",
    year: "2023",
    description: "Se-Madura."
  },
  {
    title: "Juara 2 Kejuaraan Karate",
    year: "2023",
    description: "Se-Madura."
  },
  {
    title: "Juara 1 Bracket dan Juara 2 Kelas Modified Stock 1300 CC",
    year: "2023",
    description: "KDC Drag Race."
  },
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentBg, setCurrentBg] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % activities.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + activities.length) % activities.length);
    setTimeout(() => setIsAnimating(true), 500);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let bgTimer;
    if (isAutoPlay) {
      bgTimer = setInterval(() => {
        setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
      }, 8000);
    }
    return () => clearInterval(bgTimer);
  }, [isAutoPlay]);
  
  const handleBackgroundChange = (newIndex: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentBg(newIndex);
    setTimeout(() => setIsTransitioning(false), 1000);
  };
  
  const nextBackground = () => {
    handleBackgroundChange((currentBg + 1) % backgroundImages.length);
  };

  const prevBackground = () => {
    handleBackgroundChange((currentBg - 1 + backgroundImages.length) % backgroundImages.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-[#72c163] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="items-center space-x-4">
            <div className="flex items-center">
              <span className="text-sm">#MENGOKOHKAN ADAB     #MENGEMBANGKAN BAKAT</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/share/1W42bHtNVV/" target="_blank" rel="noopener noreferrer">
              <Facebook size={16} className="cursor-pointer hover:text-white" />
            </a>
            <a href="https://www.instagram.com/binar_jhs?igsh=dXJ6bDFpbnBtNmR5" target="_blank" rel="noopener noreferrer">
              <Instagram size={16} className="cursor-pointer hover:text-white" />
            </a>
            <a href="http://www.youtube.com/@binarjhs2238" target="_blank" rel="noopener noreferrer">
              <Youtube size={16} className="cursor-pointer hover:text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <a href="#" className="flex items-center text-[#72c163] hover:text-[#5ea152]">
              </a>
              <span className="text-xl font-bold text-[#72c163]">BINAR JUNIOR HIGH SCHOOL</span>
            </div>

            {/* Menu Desktop */}
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-[#72c163] hover:text-[#72c163]">Kurikulum</a>
              <a href="https://sb11gudmjvf-yuh3--5173--fb22cd3d.local-credentialless.webcontainer.io/" className="text-[#72c163] hover:text-[#72c163]">Kegiatan</a>
              <a href="https://sb1g96pmtlt-v3ry--5173--fb22cd3d.local-credentialless.webcontainer.io/" className="text-[#72c163] hover:text-[#72c163]">Dewan Guru</a>
              <a href="#" className="text-[#72c163] hover:text-[#72c163]">Yayasan</a>
              <a href="#" className="text-[#72c163] hover:text-[#72c163]">Prestasi</a>
            </div>

            {/* Hamburger */}
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-[#72c163]">
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Menu Mobile */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-4">
              <a href="#" className="text-[#72c163] hover:text-[#72c163]">Kurikulum</a>
              <a href="#" className="text-[#72c163] hover:text-[#72c163]">Kegiatan</a>
              <a href="#" className="text-[#72c163] hover:text-[#72c163]">Dewan Guru</a>
              <a href="#" className="text-[#72c163] hover:text-[#72c163]">Yayasan</a>
              <a href="#" className="text-[#72c163] hover:text-[#72c163]">Prestasi</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentBg 
                ? 'opacity-100 transform scale-100' 
                : 'opacity-0 transform scale-110'
            }`}
          >
            <img
              src={image}
              className="w-full h-full object-cover"
              alt={`Background ${index + 1}`}
            />
            <div className="absolute inset-0 bg-black bg-opacity-10"></div>
          </div>
        ))}

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
              Welcome To Binar Website
            </h1>
            <p className="text-white text-xl mb-8">
              Mengokohkan Adab, Mengembangkan Bakat
            </p>
            
            {/* Auto Play Button */}
            <div className="mb-8">
              <button 
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className={`${
                  isAutoPlay ? 'bg-[#72c163]' : 'bg-white/20'
                } backdrop-blur-sm hover:bg-[#72c163]/80 text-white px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center gap-2 transition-all duration-300 transform hover:scale-105 text-sm md:text-base`}
              >
                <Image size={15} className="md:w-5 md:h-5" />
                <span className="hidden md:inline">{isAutoPlay ? 'Auto Play On' : 'Auto Play Off'}</span>
                <span className="md:hidden">{isAutoPlay ? 'On' : 'Off'}</span>
              </button>
            </div>

            {/* Background Indicators */}
            <div className="flex gap-1 md:gap-2">
              {backgroundImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleBackgroundChange(index)}
                  disabled={isTransitioning}
                  className={`h-1 md:h-2 rounded-full transition-all duration-300 ${
                    currentBg === index 
                      ? 'bg-white w-6 md:w-8' 
                      : 'bg-white/50 w-2 md:w-2 hover:bg-white/75'
                  } disabled:cursor-not-allowed`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Profil Sekolah */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Profil Sekolah</h2>

          <div className="max-w-4xl mx-auto">
            {/* Profil Kepala Sekolah */}
            <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
              <div className="w-full md:w-1/3">
                <img
                  src="https://miqdad0811.github.io/foto-guru-dan-yayasan/itink.jpeg"
                  alt="Kepala Sekolah"
                  className="rounded-lg shadow-lg w-full h-auto object-cover aspect-[3/4]"
                />
              </div>

              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold mb-2">Istianah Sandy S,pd</h3>
                <p className="text-[#72c163] font-semibold mb-4">Kepala Sekolah</p>
                <blockquote className="text-gray-600 italic mb-6 border-l-4 border-[#72c163] pl-4">
                  "Pendidikan bukan hanya tentang meraih nilai akademis yang tinggi, tetapi juga tentang membentuk karakter yang kuat dan kepribadian muslim yang unggul."
                </blockquote>
              </div>
            </div>

            {/* Sejarah dan Latar Belakang */}
            <div className="prose max-w-none mb-12">
              <h3 className="text-2xl font-bold mb-6">Sejarah dan Latar Belakang</h3>
              <div className="space-y-4 text-gray-600">
                <p>Pendidikan sejatinya adalah mewariskan keinsafan akan visi dan misi hidup kepada generasi kita selanjutnya. Dengan pendidikan kita mengenalkan kewajiban kita kepada Sang Khaliq dan tanggungjawab kita kepada sesama makhluk-Nya. Menjaga tugas kehidupan tersebut merupakan jalan meraih kemuliaan dan keselamatan hidup di dunia dan akhirat.
Mengacu kepada QS At-Tahrim: 6 dan penjelasan serta praktik pendidikan di masa Nabi saw, para sahabat Nabi, dan para ulama terdahulu, bisa disimpulkan, bahwa untuk meraih keselamatan dunia dan akhirat, pendidikan harus dimulai dengan penanaman adab dalam diri seseorang secara terus-menerus. Bahkan, bisa dikatakan, penanaman adab ini adalah elemen paling mendasar dalam pendidikan. Setelah adab di tanamkan, barulah berbagai ilmu yang diperlukan, diajarkan kepada peserta didik.</p>
                
                <p>Terdorong oleh Teori yang disampaikan oleh Prof. Syed Muhammad Naquib al-Attas, saat Konferensi Internasional Pendidikan Islam, di Mekkah, 1977, bahwa akar masalah yang dihadapi oleh umat Islam saat ini adalah “hilang adab” (loss of adab). Karena itu, untuk mengatasi masalah umat secara mendasar dan sistemik, harus dilakukan dengan penanaman nilai-nilai adab dalam kehidupan pribadi, keluarga, lembaga, masyarakat, dan negara. Itulah yang disebut pendidikan (ta’dib).
Sebagian besar Lembaga Pendidikan Islam masih berorientasi pada kecerdasan akademik dalam mengembangkan potensi anak didik-nya, dan masih sedikit yang concern dalam mengembangkan potensi non-akademik. Di sisi yang lain masih banyak Lembaga Pendidikan Islam yang berbiaya mahal dan tidak mampu dijangkau oleh para orang tua dari kelas ekonomi mengengah ke bawah.</p>
                
                <p>Berangkat dari keprihatinan atas Pada awal tahun 2020, Yayasan Binar Sokkla Atena mendirikan BINAR Junior High School. Hamper satu tahun mempersiapkan konsep maupun perangkat lain yang dibutuhkan untuk mendirikan Lembaga Pendidikan, akhirnya pada Juli 2021 secara resmi BINAR JHS memulai kegiatan pembelajaran, yang saat itu masih menempati rumah kuno milik Bapak Sekda Kab. Sumenep hingga akhir tahun 2022. Alhamdulillah mulai awal tahun 2022 BINAR JHS telah menempati Gedung milik sendiri.</p>
              </div>
            </div>

            {/* Visi dan Misi */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Globe className="text-[#72c163]" /> Visi
                </h3>
                <p className="text-gray-600">Membentuk Generasi Rabbani Yang Kokoh dalam Adab dan Optimal dalam Bakat.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Award className="text-[#72c163]" /> Misi
                </h3>
                <ul className="text-gray-600 list-disc list-inside space-y-2">
                  <li>Menguatkan Internalisasi Nilai-Nilai Keimanan</li>
                  <li>Mengenalkan serta membiasakan Adab dan Kesantunan</li>
                  <li>Menumbuh kembangkan pemahaman dan penghayatan terhadap nilai-nilai luhur Budaya Bangsa</li>
                  <li>Menggali, menghargai serta membangkan Bakat dan Minat yang dimiliki anak</li>
                  <li>Menguatkan konsep dan citra diri Peserta Didik</li>
                  <li>Menguatkan Leadership dan Kemandirian</li>
                  <li>Menjadikan sekolah sebagai rumah kedua Peserta Didik</li>
                  <li>Menyelenggarakan 'Education for all'</li>
                  <li>Melaksanakan pembelajaran berbasis Alam dan Lingkungan</li>
                </ul>
              </div>
            </div>

            {/* Program Unggulan */}
            <div className="bg-gray-50 p-6 rounded-lg mb-12">
              <h3 className="text-2xl font-bold mb-6">Program Unggulan</h3>
              <div className="space-y-6 text-gray-600">
                <div>
                  <p className="mb-4">BINAR Junior High School adalah SMP Islam di Sumenep yang berupaya menghadirkan pendidikan untuk semua (education for all). Untuk semua anak dengan berbagai latar yang beragam; tingkat ekonomi, kecerdasan, bakat, dan keunikan. Nama BINAR merupakan akronim dari "Bina Insan Rabbani".</p>
                </div>

                <div className="space-y-4">
                  <div className="pl-4 border-l-4 border-[#72c163]">
                    <p>Tagline SMP BINAR adalah "mengokohkan adab, mengembangkan bakat." SMP BINAR menggunakan tiga kurikulum; Kurikulum Adab sebagai kompetensi utama, kurikulum bakat sebagai kompetensi unggulan, dan kurikulum Nasional dengan menggunakan pendekatan Tematik.</p>
                  </div>

                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#72c163] mt-1">•</span>
                      <p>Di setiap pekan SMP BINAR mengantarkan siswa untuk belajar langsung dari sumber belajar; obyek observasi, ataupun tokoh ahli sebagai guru tamu.</p>
                    </li>
                    
                    <li className="flex items-start gap-2">
                      <span className="text-[#72c163] mt-1">•</span>
                      <p>Pendidikan adab menjadi kurikulum utama di SMP BINAR. Adab kepada Tuhan Yang Maha Esa beserta ciptaan-Nya. Adab kepada kemanusiaan, budaya, alam dan lingkungan. Serta menjadikannya sebagai nilai utama dalam belajar dan mengembangkan ilmu pengetahuan dan teknologi.</p>
                    </li>
                    
                    <li className="flex items-start gap-2">
                      <span className="text-[#72c163] mt-1">•</span>
                      <p>Dalam mengembangkan bakat peserta didik, SMP BINAR mengangkat konsep multiple intelligence dan Talents mapping. Membimbing peserta didik untuk menemukan dan mengembangkan bakatnya dalam berbagai aktivitas yang terstruktur.</p>
                    </li>
                    
                    <li className="flex items-start gap-2">
                      <span className="text-[#72c163] mt-1">•</span>
                      <p>Para Guru SMP BINAR telah membangun komitmen bersama untuk mengapresiasi keberagaman potensi dan bakat pada peserta didik, termasuk anak-anak yang berkebutuhan khusus.</p>
                    </li>
                    
                    <li className="flex items-start gap-2">
                      <span className="text-[#72c163] mt-1">•</span>
                      <p>SMP BINAR menyajikan materi dari kurikulum nasional dalam pendekatan tematik dengan mengangkat 17 tema Sustainable Development Goals (SDGs) PBB sebagai tema pembelajaran. Tema menjadi isu sentral dari pembahasan materi semua matapelajaran, sehingga siswa lebih mudah dalam mengaitkan benang merah antara materi pelajaran dengan realitas kehidupan. Dengan demikinan BINAR berupaya membangun kesadaran generasi masa depan yang berperan aktif dalam gerakan mengentaskan permasalahan local maupun global.</p>
                    </li>
                    
                    <li className="flex items-start gap-2">
                      <span className="text-[#72c163] mt-1">•</span>
                      <p>Pembelajaran yang faktual dan aktual, dibalut dengan pengenalan serta pembiasaan adab, SMP BINAR berusaha membentuk generasi berwawasan global, yang tetap memegang dan menjaga kearifan lokal.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Activities Slider */}
      <section id="activities" className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <Calendar className="text-[#72c163]" />
            <h2 className="text-3xl font-bold text-gray-800">Kegiatan Sekolah</h2>
          </div>
          
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <div className="relative h-[400px] md:h-[500px]">
              {activities.map((activity, index) => (
                <div
                  key={activity.id}
                  className={`absolute w-full h-full transition-transform duration-1000 ease-in-out ${index === currentSlide ? 'translate-x-0 opacity-100' : index < currentSlide ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0'}`}
                >
                  <img src={activity.image} alt={activity.title} className="w-full h-full object-cover transition-opacity duration-1000" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8 transform transition-transform duration-1000">
                    <h3 className="text-2xl font-bold text-white mb-2">{activity.title}</h3>
                    <p className="text-white/90">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button onClick={prevSlide} disabled={isAnimating} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full backdrop-blur-sm transition disabled:opacity-50 disabled:cursor-not-allowed">
              <ChevronLeft className="text-white" size={24} />
            </button>
            <button onClick={nextSlide} disabled={isAnimating} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full backdrop-blur-sm transition disabled:opacity-50 disabled:cursor-not-allowed">
              <ChevronRight className="text-white" size={24} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {activities.map((_, index) => (
                <button key={index} onClick={() => { if (isAnimating) return; setIsAnimating(true); setCurrentSlide(index); setTimeout(() => setIsAnimating(false), 500); }} disabled={isAnimating} className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/75'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Kurikulum</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{ title: "Kurikulum Utama : Kurikulum Adab", img: "https://miqdad0811.github.io/foto-guru-dan-yayasan/busro.jpeg", desc: "Kurikulum Adab disajikan dengan mengajari nilai-nilai keislaman sehingga dapat mengokohkan Ahklak" }, 
              { title: "Kurikulum Umum : Kurikulum Nasional", img: "https://miqdad0811.github.io/foto-guru-dan-yayasan/sdgs.jpg", desc: "Kurikulum Nasional yang disajikan dengan pendekatan tematik, menggunakan 17 tema SDGs ( Sustainable Development Goals )"},
              { title: "Kurikulum Unggulan : Kurikulum Bakat", img: "https://miqdad0811.github.io/Binar-JHS/src/bakat.jpeg", desc: "Kurikulum Bakat ( Talents Mapping dan Multiplelntelligents )"}].map((item, i) => (
                <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img src={item.img} className="w-full h-48 object-cover" alt={item.title} />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.desc}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <section id="achievements" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <Trophy className="text-[#72c163]" />
            <h2 className="text-3xl font-bold text-gray-800">Prestasi Sekolah</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">{achievement.title}</h3>
                  <span className="px-3 py-1 bg-[#72c163] text-white rounded-full text-sm">
                    {achievement.year}
                  </span>
                </div>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Informasi Umum */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Informasi Umum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-[#72c163]" />
                <h3 className="font-semibold">Status Akreditasi</h3>
              </div>
              <p className="text-gray-600">Terakreditasi A</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#72c163] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <School className="h-8 w-8 mr-2" />
                <span className="text-xl font-bold">BINAR JUNIOR HIGH SCHOOL</span>
              </div>
              <p>Sekolah unggulan yang memadukan nilai adab, bakat, dan kurikulum modern.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Hubungi Kami</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  <span>Jl. Strawbery, Utara Jemb., Kebunagung, Kota Sumenep</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>binarjhs@gmail.com</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Ikuti Kami</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/share/1W42bHtNVV/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-6 h-6 cursor-pointer hover:text-white" />
                </a>
                <a href="https://www.instagram.com/binar_jhs?igsh=dXJ6bDFpbnBtNmR5" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-6 h-6 cursor-pointer hover:text-white" />
                </a>
                <a href="http://www.youtube.com/@binarjhs2238" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-6 h-6 cursor-pointer hover:text-white" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white mt-8 pt-8 text-center">
            <p>&copy; JANUARI 2025 BINAR JUNIOR HIGH SCHOOL. All rights reserved.</p>
            <p className="text-sm text-white/70 mt-2">Developed by Miqdad Hanif Mutawally</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;