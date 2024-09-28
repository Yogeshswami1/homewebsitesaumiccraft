import React from 'react';
import {Link} from 'react-router-dom';

const PhotoGrid = () => {
  return (
    <div className="grid grid-cols-2 w-full h-screen gap-0">
      {/* Left side with 4 images that take 50% of the width */}
      <div className="grid grid-rows-2 gap-0 h-full">
        {/* Top-left images */}
        <div className="grid grid-cols-2 gap-0 h-full">
          <div className="relative group">
            <img
              src="https://gallery.saumiccraft.com/wp-content/uploads/2024/03/Z4xZps.jpg"
              alt="Small Image 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex justify-center items-center">
              <div className="text-white text-xl opacity-0 group-hover:opacity-100">
                <p>Bronze Products</p>
               <Link to='/bronze'> <button className="mt-2 px-4 py-2 bg-transparent border border-white text-white hover:bg-white hover:text-black transition">
                  View More
                </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="relative group">
            <img
              src="https://gallery.saumiccraft.com/wp-content/uploads/2024/03/03C.jpg"
              alt="Small Image 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex justify-center items-center">
              <div className="text-white text-xl opacity-0 group-hover:opacity-100">
                <p>Paintings</p>
               <Link to='/paintings'><button className="mt-2 px-4 py-2 bg-transparent border border-white text-white hover:bg-white hover:text-black transition">
                  View More
                </button>
                </Link> 
              </div>
            </div>
          </div>
        </div>

        {/* Bottom-left images */}
        <div className="grid grid-cols-2 gap-0 h-full">
          <div className="relative group">
            <img
              src="https://gallery.saumiccraft.com/wp-content/uploads/2024/03/d2E230.jpg"
              alt="Small Image 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex justify-center items-center">
              <div className="text-white text-xl opacity-0 group-hover:opacity-100">
                <p>Wooden Products</p>
               <Link to='/woodenproducts'> <button className="mt-2 px-4 py-2 bg-transparent border border-white text-white hover:bg-white hover:text-black transition">
                  View More
                </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="relative group">
            <img
              src="https://gallery.saumiccraft.com/wp-content/uploads/2024/07/YpjUbj.jpg"
              alt="Small Image 4"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex justify-center items-center">
              <div className="text-white text-xl opacity-0 group-hover:opacity-100">
                <p>Wooden Toys</p>
              <Link to='/woodentoys'> <button className="mt-2 px-4 py-2 bg-transparent border border-white text-white hover:bg-white hover:text-black transition">
                  View More
                </button>
                </Link> 
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side with one large image */}
      <div className="relative group h-full">
        <img
          src="https://gallery.saumiccraft.com/wp-content/uploads/2024/03/HB9l0g.jpg"
          alt="Large Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex justify-center items-center">
          <div className="text-white text-2xl opacity-0 group-hover:opacity-100">
            <p>Marble Products</p>
          <Link to='/marble'> <button className="mt-2 px-4 py-2 bg-transparent border border-white text-white hover:bg-white hover:text-black transition">
              View More
            </button>
            </Link> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGrid;
