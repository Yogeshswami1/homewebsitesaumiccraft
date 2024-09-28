import React from 'react';
import poster from '../../../assets/amazon/poster.webp'; // Replace this with the correct path to your image

const FullPagePhoto = () => {
  return (
    <div style={{ position: 'relative', textAlign: 'center' }}>
      <img src={poster} alt="Poster" style={{ width: '100%', height: 'auto' }} />
      {/* Button below the 11,800/- Only text */}
      <button className="enroll-button">
        Enroll Now
      </button>

      <style jsx="true">{`
        .enroll-button {
          position: absolute;
          bottom: 20%; /* Adjust this value as needed */
          left: 75%;
          transform: translateX(-50%); /* Keeps the button centered */
          padding: 12px 24px;
          background-color: orange;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 18px;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .enroll-button:hover {
          transform: translateX(-50%) scale(1.1); /* Ensures button stays centered and zooms */
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* Deepens shadow on hover */
        }
      `}</style>
    </div>
  );
};

export default FullPagePhoto;
