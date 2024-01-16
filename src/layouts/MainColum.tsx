import React from 'react';
import Image from "../components/Image";

const TwoColumnLayout = () => {
  return (
    <div className="flex w-full bg-cover bg-center mt-12 md:mt-15
     justify-center items-center" id="herobanner">
        <div className="container flex-1 sm:m-10 justify-center items-center text-center md:py-28 max-sm:p-10">
            <h2 className="text-5xl md:pb-4 md:pl-12 md:w-1/2 font-semibold max-sm:py-5 text-left">Avrupada <span className="text-blue-800">Çalışma</span> İmkanı</h2>
            <p className="text-xl md:mt-2 md:pl-12  md:w-1/2 max-sm:pt-5 text-left">
                Almanya 2025 yılına kadar 300.000 çalışana kapılarını açılıyor.
                Öncelikli sektörler arasında bulunan sağlık çalışanlarını ücretsiz Almanya'da çalışmaya gönderiyoruz.

            </p>
            <div className="md:w-1/2 md:m-5 md:p-8 max-sm:py-3 text-left ml-4">
                <ul className="max-w-md space-y-1 text-2xl list-inside  mb-5">
                    <li className="flex items-center">
                        <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        Hızlı Başvuru
                    </li>
                    <li className="flex items-center">
                        <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        Dil Öğrenme Desteği
                    </li>
                    <li className="flex items-center">
                        <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        Taşınma Desteği
                    </li>
                </ul>
                <button className="bg-blue-500 hover:bg-blue-700 p-4 text-white rounded-xl md:mb-10 px-16">
                    Başvuru Yap
                </button>
            </div>
        </div>
    </div>
  );
};

export default TwoColumnLayout;
