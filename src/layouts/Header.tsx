import React from 'react';
import { Link } from 'react-scroll';
import {Bars3Icon} from '@heroicons/react/24/solid'



const Header = () => {
  return (
        <header className="bg-white text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 shadow-md z-10 h-20">
      <div className="flex items center mx-auto max-w-screen-md px-4 py-2">
          <div className="flex items-center p-4">
              <img src="https://picsum.photos/150" alt="Logo" className="h-8 w-8 mr-2" /> {/* Logo */}
              <span className="text-black font-bold text-lg ">Lookup Danışmanlık</span> {/* Text */}
          </div>
          <p>deneme</p>
          <p>deneme</p>
          <p>deneme</p>
          <Bars3Icon className="mt-10 mb-5 h-20 w-20 text-red-500 bg-blue-500" />
          <div className="flex justify-center text-center items-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-base text-white py-2 px-4 rounded w-48">
                  Başvuru Yap
              </button>
          </div>
      </div>
    </header>
  );
};

export default Header;
