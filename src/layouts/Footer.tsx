import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-5">
      <div className="container mx-auto">
        <p className="text-sm">
          © 2024 LOOKUP PRICE DIGITAL Tüm Hakları Saklıdır.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="/hakkimizda" className="hover:text-gray-300">Hakkımızda</a>
          <a href="/iletisim" className="hover:text-gray-300">İletişim</a>
          <a href="/yardim" className="hover:text-gray-300">Yardım</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
