import React from 'react';
import Image from "../components/Image";

const TwoColumnLayout = () => {
  return (
    <div className="container mx-auto p-4 mt-16 md:mt-20 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center items-center">
      {/* Sol Sütun */}
      <div className="md:flex-1 flex flex-col justify-center h-full">
          <div className="items-left">
              <h2 className="text-2xl font-bold mb-4 text-left items-left">Avrupada Çalışma</h2>
          </div>
        <p className="text-3xl mb-4 text-left">Almanya’da iş imkanı sağlayarak hemşirelerimizin ve
            sağlık çalışanlarımızın istihdam edilmesine destek sağlıyoruz!</p>
        <button className="bg-red-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-32">
          İletişim
        </button>
      </div>


      {/* Sağ Sütun */}
      <div className="md:flex-1 p-4">

          <Image src="/images/mainbanner.png" />

      </div>
    </div>
  );
};

export default TwoColumnLayout;
