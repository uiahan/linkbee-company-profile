const kelas = [
  {
    id: 1,
    nama: "Laravel",
    gambar: "/images/Laravel-Logo.wine.png",
  },
  {
    id: 2,
    nama: "Wordpress",
    gambar: "/images/WordPress.com-Logo.wine.png",
  },
  {
    id: 3,
    nama: "Rest API",
    gambar: "/images/6267597-middle-removebg-preview.png",
  },
  {
    id: 4,
    nama: "Flutter",
    gambar: "/images/png-transparent-flutter-hd-logo-removebg-preview.png",
  },
  {
    id: 5,
    nama: "Figma",
    gambar:
      "/images/png-transparent-figma-logo-brand-logos-brands-in-colors-icon-thumbnail-removebg-preview.png",
  },
  {
    id: 6,
    nama: "Scratch",
    gambar: "/images/scratch-cat-logo-png_seeklogo-431721-removebg-preview.png",
  },
];

const Footer = () => {
  return (
    <>
      <footer className="px-6 2xl:px-60 xl:py-40 py-20 shadow-4xl bg-green-900 text-white">
        <div className="grid xl:grid-cols-5 md:grid-cols-2 xl:gap-18 gap-10" data-aos="fade-up">
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold">Link<span className="">Bee</span></h1>
            <p className="mt-2 font-medium">
              LinkBee adalah perusahaan IT solution terpercaya untuk
              menjembatani pembelajaran digital dengan teknologi terkini. Kami
              menyediakan berbagai kelas dan program untuk mendukung
              perkembanganmu di era digital.
            </p>
            <p className="mt-2 font-medium">
              Bergabunglah bersama kami untuk mengembangkan skill, membangun
              portofolio, dan menjelajahi peluang karier di dunia teknologi yang
              terus berkembang.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold ">Navigasi</h2>
            <ul className="space-y-1 font-medium">
              <li className="mt-2">
                <a href="">Beranda</a>
              </li>
              <li>
                <a href="">Tentang</a>
              </li>
              <li>
                <a href="">Produk</a>
              </li>
              <li>
                <a href="">Program</a>
              </li>
              <li>
                <a href="">Kelas</a>
              </li>
              <li>
                <a href="">Kontak</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-semibold ">Kelas</h2>
            <ul className="space-y-1 pt-2 font-medium">
              {kelas.map((item) => (
                <li key={item.id}>
                  <a href="">{item.nama}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-semibold ">Kontak</h2>
            <ul className="space-y-1 font-medium">
              <li className="mt-2">
                <i className="fa-regular fa-phone"></i> (022) 8888 1 4235
              </li>
              <li>
                <i className="fa-brands fa-whatsapp mr-1"></i> 0892-9301-3293
              </li>
              <li>
                <i className="fa-regular fa-envelope mr-1"></i>{" "}
                linkbee@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white h-[2px] my-8" data-aos="fade-up"></div>
        <p className="text-center" data-aos="fade-up">RPL Produksi | Link Bee</p>
        <p className="text-center mt-3" data-aos="fade-up">Copyright © 2025 by LinkBee</p>
      </footer>
    </>
  );
};

export default Footer;
