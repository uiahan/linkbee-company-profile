export const metadata = {
  title: "Produk | LinkBee",
  description: "Perusahaan IT Solution Link Bee",
};

const Product = () => {
  const product = [
    {
      id: 1,
      nama: "E-Voting",
      deskripsi:
      "Sistem pemungutan suara digital yang aman, praktis, dan transparan untuk keperluan pemilihan internal.",
      gambar: "/images/E-Voting.png",
      link: "https://evoting.smkn2smi.sch.id/",
    },
    {
      id: 2,
      nama: "Sarpras Smea",
      deskripsi:
        "Aplikasi web untuk mempermudah pengelolaan sarana dan prasarana sekolah secara efisien dan terstruktur.",
      gambar: "/images/sarpras.png",
      link: "https://sarpras.smkn2smi.sch.id/",
    },
    {
      id: 3,
      nama: "Smart Learning",
      deskripsi:
      "Aplikasi pembelajaran online interaktif yang mendukung proses belajar mengajar dari mana saja.",
      gambar: "/images/smartlearning.png",
      link: "http://smartlearning.smkn2smi.sch.id/",
    },
    {
      id: 4,
      nama: "Flappy Bird",
      deskripsi: "Rasakan tantangan tanpa akhir dalam Flappy Bird, game klasik yang sederhana namun bikin nagih! Klik atau ketuk layar untuk menjaga burung tetap terbang dan hindari tabrakan dengan rintangan. Satu kesalahan, game over!",
      gambar: "/images/flappybird.png",
      link: "/game/flappy-bird.html",
    }
  ];

  return (
    <>
      <div className="2xl:px-60 px-6 py-28 grid xl:grid-cols-2">
        <div className="flex items-center justify-center xl:hidden mb-10">
          <img
            className="w-[25rem]"
            data-aos="fade-up"
            src="/images/19362653.jpg"
            alt="laptop-icon"
          />
        </div>
        <div className="flex justify-center flex-col">
          <h1
            className="xl:text-6xl text-3xl text-center xl:text-start font-semibold"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Solusi Digital
          </h1>
          <h1
            className="xl:text-6xl text-3xl text-center xl:text-start font-semibold text-green-900 mt-3"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Teknologi Inovatif
          </h1>
          <h1
            className="xl:text-6xl text-3xl text-center xl:text-start font-semibold mt-3"
            data-aos="fade-up"
            data-aos-duration="1400"
          >
            Produk Andal
          </h1>
          <h1
            className="xl:text-6xl text-3xl text-center xl:text-start font-semibold text-green-900 mt-3"
            data-aos="fade-up"
            data-aos-duration="1600"
          >
            Untuk Masa Depan
          </h1>
        </div>

        <div className="xl:flex items-center justify-end hidden">
          <img
            className="w-[34rem]"
            data-aos="fade-up"
            src="/images/19362653.jpg"
            alt="laptop-icon"
          />
        </div>
      </div>

      <div className="2xl:px-60 px-6 py-28">
        <h1 className="xl:text-5xl text-4xl font-semibold" data-aos="fade-up" data-aos-duration="1000">
          Produk Kami
        </h1>
        <div className="md:grid-cols-2 grid gap-14 mt-5">
          {product.map((item) => (
            <div className="xl:mb-5" key={item.id}>
              <img
                src={item.gambar}
                className="rounded-lg w-full xl:h-80 h-48 object-cover shadow-lg"
                alt=""
                data-aos="fade-up"
              />
              <h2
                className="text-3xl font-medium mt-3"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                {item.nama}
              </h2>
              <p
                className="mt-1 mb-4 text-gray-600 line-clamp-2"
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                {item.deskripsi}
              </p>
              <div data-aos="fade-up" data-aos-duration="1600">
                <a
                  href={item.link}
                  className="bg-green-900 shadow-lg hover:bg-green-950 transition-colors text-white font-semibold px-7 py-2 rounded-md"
                >
                  Kunjungi
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
