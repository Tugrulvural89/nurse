import React from 'react';
import { PhoneIcon, EnvelopeOpenIcon, ClockIcon  } from '@heroicons/react/24/outline'; // Bu ikonları uygun paketten import edin

const ContactWidget = () => {
    return (
        <div className="bg-blue-500 -mt-4 text-center mx-auto pb-5 max-sm:p-10" id="contactInfo">
            <div className="bg-white shadow-lg rounded-lg p-4 max-w-3xl mx-auto md:flex items-center justify-center" id="contactInfoCard">
                <div className="flex justify-items-center justify-center items-center space-x-2 p-2 m-2">
                    <PhoneIcon className="h-6 w-6 text-green-500" />
                    <div>
                        <h3 className="text-sm font-semibold text-gray-700">Bizi ARAYIN!</h3>
                        <p className="text-xs text-gray-600">+90 (546) 887 9596</p>
                    </div>
                </div>
                <div className="flex justify-items-center justify-center  items-center space-x-2 p-2 m-2">
                    <EnvelopeOpenIcon className="h-6 w-6 text-yellow-500" />
                    <div>
                        <h3 className="text-sm font-semibold text-gray-700">BİZE YAZIN!</h3>
                        <p className="text-xs text-gray-600">tvural@lookupprice.com</p>
                    </div>
                </div>
                <div className="flex justify-items-center justify-center  items-center space-x-2 p-2 m-2">
                    <ClockIcon className="h-6 w-6 text-red-500" />
                    <div>
                        <h3 className="text-sm font-semibold text-gray-700">24/7</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactWidget;
