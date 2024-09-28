import React from 'react';
import back from '../../../assets/video/back.webm';

const VideoWithButton = () => {
  return (
    <div className="py-8"> {/* Padding added for top and bottom */}
      <div className="relative flex items-center justify-center w-full md:w-3/4 lg:w-2/3 mx-auto shadow-lg rounded-xl overflow-hidden"
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="w-full h-auto object-cover rounded-xl"
        >
          <source src={back} type="video/webm" />
        </video>

        {/* Button and text centered */}
        <div className="absolute flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-40">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center px-4">
            Start Your Online Business Today
          </h2>
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl mb-6 text-center px-4">
            The only place to start and grow your drop-shipping business with no-manpower, no-warehouse, no-stocks.
          </p>
          <button className="bg-orange-500 hover:bg-red-600 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105">
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoWithButton;
