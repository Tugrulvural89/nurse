import React from 'react';

const Header = () => {
  return (
        <header className="bg-white text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 shadow-md z-10">
      <div className="flex items-center p-4">
        <img src="https://picsum.photos/150" alt="Logo" className="h-8 w-8 mr-2" /> {/* Logo */}
        <span className="text-black font-bold text-lg ">Lookup Danışmanlık</span> {/* Text */}
      </div>
      <button className="bg-red-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Başvuru Yap
      </button>
    </header>
  );
};

export default Header;
