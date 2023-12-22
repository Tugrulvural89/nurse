import React from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';

// IconType türünü güncelleyin, burada ReactElement döndürdüğünü belirtin.
type IconType = typeof HeartIcon;

interface Feature {
  Icon: IconType;
  title: string;
  description: string;
}


const features: Feature[] = [
  {
    Icon: HeartIcon,
    title: 'Danışmanlık Hizmeti',
    description: 'Online Mülakat Süreci\n' +
        'Almanya\'daki ekibimiz ile görüşme yapmanızı sağlıyoruz. ' +
        'Görüşmenin olumlu geçmesi halinde hastane ile görüşmeye hak kazanmış oluyorsunuz.',
  }, {
    Icon: HeartIcon,
    title: 'Danışmanlık Hizmeti',
    description: 'Kariyer planlamanızı yaparken sizler için danışmanlık hizmeti sağlıyoruz.',
  }, {
    Icon: HeartIcon,
    title: 'Danışmanlık Hizmeti',
    description: 'Kariyer planlamanızı yaparken sizler için danışmanlık hizmeti sağlıyoruz.',
  }, {
    Icon: HeartIcon,
    title: 'Danışmanlık Hizmeti',
    description: 'Kariyer planlamanızı yaparken sizler için danışmanlık hizmeti sağlıyoruz.',
  }, {
    Icon: HeartIcon,
    title: 'Danışmanlık Hizmeti',
    description: 'Kariyer planlamanızı yaparken sizler için danışmanlık hizmeti sağlıyoruz.',
  }, {
    Icon: HeartIcon,
    title: 'Danışmanlık Hizmeti',
    description: 'Kariyer planlamanızı yaparken sizler için danışmanlık hizmeti sağlıyoruz.',
  }, {
    Icon: HeartIcon,
    title: 'Danışmanlık Hizmeti',
    description: 'Kariyer planlamanızı yaparken sizler için danışmanlık hizmeti sağlıyoruz.',
  },
  // ... diğer özellikler
];

const FeatureCard: React.FC<Feature> = ({ Icon, title, description }) => {
  return (
    <div className="flex items-center space-x-4 mt-5">
      <Icon className="h-12 w-12 text-red-500" />
      <div>
        <h4 className="font-semibold mt-5">{title}</h4>
        <p className="text-sm text-gray-500 mt-3">{description}</p>
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
            Neden My Nurse Europe?
          </h2>
        </div>
        <div className="m-6 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4 p-5">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
