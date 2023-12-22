import React from 'react';
import { PhoneIcon, EnvelopeOpenIcon, ClockIcon  } from '@heroicons/react/24/outline'; // Bu ikonları uygun paketten import edin

const ContactWidget = () => {
  return (
      <div className="bg-gray-200 -mt-4 items-center space-x-4 justify-center text-center mx-auto pb-5 mb-5">
    <div className="bg-white shadow-lg rounded-lg p-4 m-4 max-w-3xl mx-auto flex items-center space-x-4 justify-center">
          <div className="flex items-center space-x-2 p-4 m-4">
        <PhoneIcon className="h-6 w-6 text-green-500" />
        <div className="p-4 m-4">
          <h3 className="text-sm font-semibold text-gray-700">Bizi ARAYIN!</h3>
          <p className="text-xs text-gray-600">+90 (533) 581 1545</p>
        </div>
      </div>
      <div className="flex items-center space-x-2  p-4 m-4">
        <EnvelopeOpenIcon className="h-6 w-6 text-yellow-500" />
        <div className="p-4 m-4">
          <h3 className="text-sm font-semibold text-gray-700">BİZE YAZIN!</h3>
          <p className="text-xs text-gray-600">info@mynurse-europe.com</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <ClockIcon className="h-6 w-6 text-red-500" />
        <h3 className="text-sm font-semibold text-gray-700">24/7</h3>
      </div>

    </div>
          </div>
  );
};

export default ContactWidget;
