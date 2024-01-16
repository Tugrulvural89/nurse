import React, {ReactElement} from 'react';
import { HeartIcon, ShieldCheckIcon, ArrowUpIcon, ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline';

// IconType türünü güncelleyin, burada ReactElement döndürdüğünü belirtin.
// IconType türünü güncelleyin
type IconType = typeof HeartIcon | typeof ShieldCheckIcon;


interface Feature {
  Icon: IconType;
  title: string;
  description: string;
}


const features: Feature[] = [
  {
    Icon: HeartIcon,
    title: 'Danışmanlık Hizmeti',
    description: 'Kariyer planlamanızı yaparken sizler için danışmanlık hizmeti sağlıyoruz.'
  },
  {
    Icon: ChatBubbleBottomCenterIcon,
    title: 'İletişim Kurabilme İmkanı',
    description: 'İletişim ihtiyaçlarınız için hep yanınızdayız. Çağrı merkezimiz ' +
        've uzman ekibimiz email ve whatsapp yoluyla sizi destekliyor olacak.'
  },
  {
    Icon: ArrowUpIcon,
    title: 'Doğru Yönlendirme',
    description: 'Kariyer planlarınızı yaparken sizi doğru yönlendirip en iyisini hedefliyoruz.'
  },
  {
    Icon: ShieldCheckIcon,
    title: 'Güvenilir Hizmet',
    description: "Tamamen resmi süreçlere bağlı kalarak. Almanya'da resmi kurumlar ile çalışıyoruz."
  },
];

const FeatureCard: React.FC<Feature> = ({ Icon, title, description }) => {
  return (
    <div className="flex items-center" id="provider">
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Icon className="h-12 w-12 text-red-500" />
        <a href="#">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
};

// ... WhyUsSection bileşeni

const WhyUsSection = () => {
  return (
    <section className="bg-white py-12 m-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            Neden LTW ile Avrupada Çalışma?
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-4 mt-24 items-center justify-center justify-items-center">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
