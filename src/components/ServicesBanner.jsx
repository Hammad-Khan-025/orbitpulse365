import React from "react";

const ServiceBanner = ({ image, video, title, description }) => {
  return (
    <section className="relative">
      {/* Conditionally render image or video */}
      {video ? (
        <video 
          src={video} 
          autoPlay 
          loop 
          muted 
          className="h-72 sm:h-[35rem] object-cover w-full"
        />
      ) : (
        <img 
          src={image} 
          alt="" 
          className="h-72 sm:h-auto object-cover w-full" 
        />
      )}
      <div
        className={`bg-[#1D51A2B2] absolute bottom-4 sm:bottom-12 left-0 w-full text-white py-5 sm:py-8 shadow shadow-white`}
      >
        <div className="max-w-screen-xl mx-auto px-6 sm:px-0 lg:ps-20">
          <h1 className="text-xl sm:text-[40px] font-semibold mb-3 font-bangla uppercase">
            {title}
          </h1>
          <p className="text-xs sm:text-base text-start">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;
