export const metadata = {
  title: "Kontak | LinkBee",
  description: "Perusahaan IT Solution Link Bee",
};

const Contact = () => {
  return (
    <>
      <div className="2xl:px-60 px-6 py-28 xl:flex xl:space-x-20">
        <div className="xl:flex items-center xl:justify-start justify-center hidden">
          <h1 className="xl:text-9xl text-7xl" data-aos="fade-up">
            <i className="fa-regular fa-phone"></i>
          </h1>
        </div>
        <div className="flex justify-center flex-col">
          <h1
            className="xl:text-6xl text-3xl text-center xl:text-start font-semibold text-green-900"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Hubungi <span className="text-black">Kami</span>
          </h1>
          <h1
            className="xl:text-6xl text-3xl text-center xl:text-start font-semibold text-black mt-3"
            data-aos="fade-up"
            data-aos-duration="1400"
          >
            Siap Mendukung <span className="text-green-900">Kebutuhan</span>
          </h1>
          <h1
            className="xl:text-6xl text-3xl text-center xl:text-start font-semibold text-green-900 mt-3"
            data-aos="fade-up"
            data-aos-duration="1600"
          >
            Teknologi <span className="text-black">Anda</span>
          </h1>
        </div>
      </div>
      <div className="2xl:px-60 px-6" data-aos="fade-up" data-aos-duration="1800">
        <div className="h-[2px] bg-black"></div>
      </div>

      <div className="2xl:px-60 px-6 py-28 gap-20 grid xl:grid-cols-3">
        <div className="col-span-2">
          <div className="space-x-32">
            <div>
              <h1
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-2xl font-semibold"
              >
                <i className="fa-regular fa-home mr-2"></i>Alamat
              </h1>
              <h1
                className="text-xl font-medium text-gray-700 mt-1"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                Jl. Pelabuhan II No.1, RT.1/RW.6, Cikondang, Kec. Citamiang,
                Kota Sukabumi, Jawa Barat 43141
              </h1>
            </div>
            <hr
              className="my-10 w-full"
              data-aos="fade-up"
              data-aos-duration="1400"
            />
            <div>
              <h1
                className="text-2xl font-semibold"
                data-aos="fade-up"
                data-aos-duration="1600"
              >
                <i className="fa-regular fa-phone mr-2"></i>Telepon
              </h1>
              <h1
                className="text-xl font-medium text-gray-700 mt-1"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                (022) 8888 1 4235
              </h1>
            </div>
            <hr
              className="my-10 w-full"
              data-aos="fade-up"
              data-aos-duration="1400"
            />
            <div>
              <h1
                className="text-2xl font-semibold"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <i className="fa-regular fa-envelope mr-2"></i>Gmail
              </h1>
              <h1
                className="text-xl font-medium text-gray-700 mt-1"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                linkbee@gmail.com
              </h1>
            </div>
            <hr
              className="my-10 w-full"
              data-aos="fade-up"
              data-aos-duration="1400"
            />
          </div>
        </div>
        <div className="col-span-1 hidden xl:block">
          <div>
            <img
              src="/images/3759159.jpg"
              alt=""
              data-aos="fade-up"
              data-aos-duration="1200"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.628842745469!2d106.92330727573957!3d-6.9348865678855915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6848182063ba19%3A0xcc6bd9bbe54d5cb7!2sSMKN%202%20Sukabumi!5e0!3m2!1sid!2sid!4v1747625216222!5m2!1sid!2sid"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps SMKN 2 Sukabumi"
        />
      </div>
    </>
  );
};

export default Contact;
