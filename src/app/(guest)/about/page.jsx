import Link from "next/link";

export const metadata = {
  title: "Tentang | LinkBee",
  description: "Perusahaan IT Solution Link Bee",
};

const About = () => {
  return (
    <>
      <div className="2xl:px-60 px-6 xl:pt-28 pt-20 pb-28 grid xl:grid-cols-2">
        <div className="flex items-center">
          <img
            className="w-[30rem]"
            data-aos="fade-up"
            src="/images/4401280.jpg"
            alt="laptop-icon"
          />
        </div>
        <div className="flex justify-center flex-col">
          <h1
            className="xl:text-6xl text-3xl font-semibold text-center xl:text-start"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Membangun <span className="text-green-900">Solusi</span>
          </h1>
          <h1
            className="xl:text-6xl text-3xl font-semibold text-green-900 mt-3 text-center xl:text-start"
            data-aos="fade-up"
            data-aos-duration="1400"
          >
            Mendorong <span className="text-black">Inovasi</span>
          </h1>
        </div>
      </div>

      <div className="bg-green-900 2xl:px-60 px-6 py-28 xl:flex gap-24" id="about">
        <div className="flex items-center">
          <h1
            className="text-9xl text-white hidden xl:block"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <i className="fa-regular fa-laptop-mobile"></i>
          </h1>
        </div>
        <div>
          <h4
            className="text-2xl font-semibold text-white"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Tentang Kami
          </h4>
          <div
            data-aos="fade-up"
            data-aos-duration="1400"
            className="mt-3 mb-4 rounded-md bg-white xl:w-48"
            style={{ height: "2px" }}
          ></div>
          <p
            className="font-medium mt-2 text-lg leading-10 text-white xl:mb-4 mb-5"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            Kami adalah perusahaan IT Solution yang berdedikasi untuk membantu
            Anda membangun, mengembangkan, dan mengoptimalkan produk digital.
            Mulai dari pembuatan website, aplikasi mobile, hingga sistem
            informasi, kami hadir dengan solusi inovatif dan teknologi terkini
            yang disesuaikan dengan kebutuhan bisnis Anda. Kami siap menjadi
            partner digital yang andal untuk bisnis Anda.
          </p>
        </div>
      </div>

      <div className="py-32 2xl:px-60 px-6 grid grid-cols-1 gap-20">
        <div>
          <h1 className="xl:text-5xl text-3xl font-semibold" data-aos="fade-up"><i className="fa-solid fa-code"></i> Visi Kami</h1>
          <div className="h-[2px] my-3 bg-black xl:w-72" data-aos="fade-up" data-aos-duration="1200"></div>
          <p className="mt-5 font-medium text-gray-600" data-aos="fade-up" data-aos-duration="1400">
            Menjadi perusahaan IT Solution terdepan yang mendorong kemajuan
            bisnis dan masyarakat melalui transformasi digital yang
            berkelanjutan. Kami berkomitmen untuk menghadirkan solusi teknologi
            yang inovatif, andal, dan berdampak, serta menjadi pionir dalam
            menciptakan ekosistem digital yang inklusif, efisien, dan adaptif
            terhadap perkembangan zaman.
          </p>
        </div>
        <div>
          <h1 className="xl:text-5xl text-3xl font-semibold" data-aos="fade-up"><i className="fa-regular fa-font-awesome"></i> Misi Kami</h1>
          <div className="h-[2px] my-3 bg-black xl:w-72" data-aos="fade-up" data-aos-duration="1200"></div>
          <ul className="mt-5 font-medium text-gray-600 list-decimal list-outside pl-5 space-y-3" data-aos="fade-up" data-aos-duration="1400">
            <li>
              Memberikan Solusi Inovatif: Mengembangkan produk digital yang
              kreatif dan solutif sesuai dengan kebutuhan klien, mulai dari
              website, aplikasi mobile, hingga sistem informasi.
            </li>
            <li>
              Fokus pada Kualitas dan Keamanan: Menyediakan layanan dengan
              standar kualitas tinggi, didukung oleh keamanan data yang andal.
            </li>
            <li>
              Kolaborasi yang Berkelanjutan: Menjalin hubungan jangka panjang
              dengan klien sebagai partner strategis dalam menghadapi tantangan
              digital.
            </li>
            <li>
              Peningkatan Berkelanjutan: Terus berinovasi dan beradaptasi dengan
              perkembangan teknologi untuk memastikan setiap solusi yang kami
              tawarkan selalu relevan dan unggul.
            </li>
            <li>
              Memberdayakan SDM Unggul: Meningkatkan kapasitas tim melalui
              pelatihan dan pengembangan kompetensi guna memberikan layanan
              terbaik.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
