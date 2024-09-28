import cover from '../../../assets/how/cover.webp'; // Path to your uploaded image

const HeroSection = () => {
  return (
    <div className="relative w-full">
      <img
        src={cover}
        alt="Cover"
        className="w-full h-auto object-cover"
      />

      {/* Heading */}
      <div className="absolute top-12 left-8 text-white md:top-16 md:left-12 lg:top-24 lg:left-16">
        <h1
          className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight text-center md:text-left"
          style={{ fontFamily: 'Times New Roman', marginLeft: '1rem', marginTop: '1rem' }}
        >
          Start Your Online<br />Business Today
        </h1>
      </div>

      {/* Buttons */}
      <div
        className="flex flex-col items-center space-y-4 mt-4 md:space-y-0 md:space-x-4 lg:space-x-10 md:absolute md:bottom-16 md:left-12 lg:bottom-24 lg:left-16 md:flex-row"
        style={{ marginLeft: '1rem', marginBottom: '2rem' }}
      >
        {/* Learn More Button */}
        <button
          className="w-[120px] md:w-[150px] h-[40px] md:h-[50px] transition-all transform hover:scale-110 p-2 border shadow-lg"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark background for better visibility
            color: 'white', // White text color
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 8px 15px rgba(0, 0, 0, 0.2)', // Deeper shadow for 3D effect
            transition: 'box-shadow 0.3s ease, transform 0.3s ease',
          }}
        >
          AMAZON
        </button>

        {/* Sign Up Button */}
        <button
          className="w-[120px] md:w-[150px] h-[40px] md:h-[50px] transition-all transform hover:scale-110 p-2 border shadow-lg"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark background for better visibility
            color: 'white', // White text color
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 8px 15px rgba(0, 0, 0, 0.2)',
            transition: 'box-shadow 0.3s ease, transform 0.3s ease',
          }}
        >
          WEBSITE
        </button>

        {/* Contact Us Button */}
        <button
          className="w-[120px] md:w-[150px] h-[40px] md:h-[50px] transition-all transform hover:scale-110 p-2 border shadow-lg"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark background for better visibility
            color: 'white', // White text color
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 8px 15px rgba(0, 0, 0, 0.2)',
            transition: 'box-shadow 0.3s ease, transform 0.3s ease',
          }}
        >
          FRANCHISE
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
