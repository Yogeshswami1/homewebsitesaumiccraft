import Para from '../../../assets/video/para.webm'; 

const VideoBackgroundSection = () => {
  return (
    <div className="relative w-full">
      {/* Video without extra padding */}
      <video 
        className="w-full h-auto object-cover" // h-auto ensures no extra padding and object-fit scales it correctly
        src={Para} 
        autoPlay 
        muted 
        loop
        playsInline
      />

      {/* Button in the middle bottom center */}
      <div className="absolute bottom-10 w-full flex justify-center">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Start Your Online Business Now!
        </button>
      </div>
    </div>
  );
};

export default VideoBackgroundSection;
