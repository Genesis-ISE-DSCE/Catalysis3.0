import React from "react";

const Gallery = () => {
  const images = [
    "/images/placeholder.png",
    "/images/placeholder.png",
    "/images/placeholder.png",
    "/images/placeholder.png",
    "/images/placeholder.png",
    "/images/placeholder.png",
    "/images/placeholder.png",
    "/images/placeholder.png",
  ];

  return (
    <div className="bg-[#FFC247] min-h-screen flex flex-col py-10 px-4 sm:px-8">
      <h1
        className="text-6xl text-[#7B5CF7] text-center mb-12 font-comic tracking-wide"
        data-aos="zoom-in"
      >
        EVENT GALLERY
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center w-full sm:w-auto mb-8 group"
          >
            <div className="relative w-full max-w-xs sm:w-56 md:w-64 lg:w-72 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <img
                src="/images/gallery.png"
                alt="Background"
                className="w-full h-auto object-contain"
              />

              <div className="absolute w-[75%] h-[75%] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <img
                  src={src}
                  alt="Gallery"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
