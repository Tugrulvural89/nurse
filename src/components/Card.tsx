import React from 'react';
import { BeakerIcon, BookOpenIcon, FaceSmileIcon, LockOpenIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid'



const cards = [
  {
    icon: <BookOpenIcon className="mt-10 mb-5 h-20 w-20 text-red-500" />,
    title: 'Online Mülakat Süreci',
    description: 'Almanya\'daki ekibimiz ile görüşme yapmanızı sağlıyoruz. ' +
        'Görüşmenin olumlu geçmesi halinde hastane ile görüşmeye hak kazanmış oluyorsunuz.'
  },
  {
    icon: <FaceSmileIcon className="mt-10 mb-5 h-20 w-20 text-red-500" />,
    title: 'Yüz Yüze Mülakat Süreci',
    description: 'İstanbul\'da hastane yönetimi ile Almanca bir mülakat süreci içerisine giriyoruz. ' +
        'Bu süreçte taraflar karşılıklı olarak birbirlerine beklentilerini ve sorularını ileterek kesin bir adım atılıyor.'
  },
  {
    icon: <LockOpenIcon className="mt-10 mb-5 h-20 w-20 text-red-500" />,
    title: 'Ön Sözleşme Süreci',
    description: 'Mülakatta başarılı olan hemşirelerimizin' +
        ' ön sözleşme imzalamasını sağlayarak onlara bir iş teminatı sunarak güvence sağlıyoruz.'
  },
  {
    icon: <PaperAirplaneIcon  className="mt-10 mb-5 h-20 w-20 text-red-500" />,
    title: 'Denklik Süreci Ve Vize İşlemlerinin Başlatılması',
    description: 'Onaylanan ve ön sözleşmesi tamamlanan adaylarımızın denklik ve vize işlemleri için geçerli ' +
        'olan sürece başlıyoruz. Taraflar arasında karşılıklı belge transferleri bu aşamada sağlanıyor.'
  }
];

const MyCard = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center items-center text-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="h-96 border border-gray-200 shadow-sm hover:shadow-lg p-4 rounded-lg justify-center items-center text-center transition-shadow duration-300"
          >
                        <div className="flex justify-center items-center w-full">
              {card.icon}
            </div>
            <h3 className="font-bold text-lg mb-2 ">{card.title}</h3>
            <p className="text-gray-600 ">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCard;
