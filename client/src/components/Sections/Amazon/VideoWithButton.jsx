import React from 'react';
import back from '../../../assets/video/back.webm';

const VideoWithButton = () => {
  return (
    <div style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
    <div className="relative flex items-center justify-center rounded-xl w-full md:w-3/4 lg:w-2/3 mx-auto shadow-lg"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="w-full h-auto object-cover rounded-xl"
        style={{ width: '100%', borderRadius: '20px' }}
      >
        <source src={back} type="video/webm" />
      
      </video>

      {/* Button centered */}
      <div className="absolute flex flex-col items-center justify-center w-full h-full">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
          Start Your Online Business Today
        </h2>
        <p className="text-white text-lg mb-6">
          The only place to start and grow your drop-shipping business with no-manpower, no-warehouse, no-stocks.
        </p>
        <button className="bg-orange-500 hover:bg-red-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg transition-transform duration-300">
          GET STARTED
        </button>
       
      </div>
    </div>
    </div>
  );
};

export default VideoWithButton;
