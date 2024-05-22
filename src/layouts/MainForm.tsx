import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import Modal from '../components/Modal';

interface FormDataType {
  name: string;
  email: string;
  tel: string;
  germanLevel: string;
  occupation: string;
  birthDate: string;
  isActive: boolean;
  cv: File | null;
}

function MainForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const apiSecretKey = process.env.REACT_APP_API_SECRET_KEY;

  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    email: '',
    tel: '',
    germanLevel: '',
    occupation: '',
    birthDate: '',
    isActive: false,
    cv: null,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement>) => {
    const { name, value, type } = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    const updatedValue = type === 'checkbox' ? (event.target as HTMLInputElement).checked : value;

    setFormData({
      ...formData,
      [name]: updatedValue
    });
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      cv: event.target.files ? event.target.files[0] : null,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const data = new FormData();
      for (const key in formData) {
        if (formData.hasOwnProperty(key)) {
          const value = formData[key as keyof FormDataType];
          if (value instanceof File) {
            data.append(key, value);
          } else {
            data.append(key, String(value));
          }
        }
      }


      await axios.post('https://api.avrupadaisebasla.com/submit-form', data, {
        headers: {
          'x-api-key': apiSecretKey,
          'Content-Type': 'multipart/form-data'
        }
      });


      setIsSubmitted(true);
      setShowModal(true);
      // İşlem başarılıysa ek işlemler
    } catch (err) {
      console.error('Error Submitting Form', err);
    }
  };

  return (
      <div className="container mx-auto p-4 w-full max-w-3xl" id="myForm">
        <h4 className="text-2xl text-blue-950 justify-center text-center items-center p-12">Başvuru Formu</h4>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">İsim</label>
            <input
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="İsim"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700">Telefon Numarası</label>
            <input
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Telefon Numarası"
                name="tel"
                type="text"
                value={formData.tel}
                onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700">Almanca Dil Bilgisi</label>
            <select
                className="w-full p-2 border border-gray-300 rounded"
                name="germanLevel"
                value={formData.germanLevel}
                onChange={handleChange}
            >
              <option value="">Almanca Dil Bilgisi Seçin</option>
              <option key="1" value="1">
                A1
              </option>
              <option key="2" value="2">
                A2
              </option>
              <option key="3" value="3">
                B1
              </option>
              <option key="4" value="4">
                B2
              </option>
              <option key="5" value="5">
                C1
              </option>
              <option key="6" value="6">
                C2
              </option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Meslek</label>
            <input
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Meslek"
                name="occupation"
                type="text"
                value={formData.occupation}
                onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700">Doğum Tarihi</label>
            <input
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Doğum Tarihi"
                name="birthDate"
                type="date"
                value={formData.birthDate}
                onChange={handleChange}
            />
          </div>
          <div className="flex items-center space-x-2">
            <input
                type="checkbox"
                name="isActive"
                checked={formData.isActive}
                onChange={handleChange}
                className="form-checkbox h-5 w-5"
            />
            <label className="text-gray-700">Aktif olarak çalışıyor musunuz?</label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">CV/Özgeçmiş Yükle</label>
            <input
                type="file"
                name="cv"
                onChange={handleFileChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Gönder
          </button>
        </form>
        <Modal show={showModal} onClose={() => setShowModal(false)} />
      </div>
  );
}

export default MainForm;
