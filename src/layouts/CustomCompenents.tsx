import React from 'react';
import Image from '../components/Image';

const MyContainer = () => {
  return (
    <div className="mx-auto bg-gray-200 pb-5">
      <div className="flex flex-wrap md:flex-nowrap ml-5 pl-5">
        {/* Sol Sütun */}
        <div className="flex-1 p-4">
          <h2 className="text-2xl font-bold mb-4 p-4">Avrupada Çalışma</h2>
          <p className="p-4">
            Almanya’da iş imkanı sağlayarak hemşirelerimizin ve sağlık çalışanlarımızın istihdam edilmesine destek sağlıyoruz!
          </p>
        </div>

        {/* Sağ Sütun */}
        <div className="flex-1 p-4">
          <Image src="https://picsum.photos/500/300" />
        </div>
      </div>
    </div>
  );
};

export default MyContainer;
