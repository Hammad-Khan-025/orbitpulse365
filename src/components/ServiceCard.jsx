import React from "react";
import Lottie from 'lottie-react';
import { Link } from "react-router-dom";

const ServiceCard = ({ title, description, image, path }) => {
  const cardContent = (
    <div className="card bg-[#F4F4F4] rounded-tl-4xl rounded-br-4xl p-6 w-full h-full sm:w-[23rem] flex flex-col items-center px-8 sm:px-12 hover:bg-[#047BAF] transition-all duration-300 group-hover:-rotate-x-6 group-hover:rotate-y-6">
      <div className="w-24 h-24 rounded-full group-hover:overflow-hidden my-6">
        <Lottie
          animationData={image}
          loop={true}
          autoplay={true}
          className="w-full h-full"
        />
      </div>
      <h3 className="text-xl font-bold text-[#00BDFF] mb-4 group-hover:text-white transition-all duration-300 text-center">
        {title}
      </h3>
      <p className="text-gray-700 mb-6 group-hover:text-white transition-all duration-300 text-center sm:text-start">
        {description}
      </p>
      <button className="mt-6 sm:self-end mx-auto sm:mx-0 bg-[#F0B138] text-white font-semibold px-4 py-1 rounded-full hover:bg-yellow-500 cursor-pointer text-sm">
        Learn More
      </button>
    </div>
  );

  return (
    <div className="perspective group">
      {path ? (
        <Link to={path}>
          {cardContent}
        </Link>
      ) : (
        cardContent
      )}
    </div>
  );
};

export default ServiceCard;
