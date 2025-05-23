const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white ">
      <div className="text-center animate-pulse">
        <h1 className="text-7xl font-bold" data-aos="fade-right" data-aos-duration="900"><i className="fa-regular fa-laptop-mobile"></i>Link<span className="text-green-900">bee</span></h1>
      </div>
    </div>
  );
};

export default Loading;
