import React from 'react';


// ImageProps adında bir interface tanımlayarak beklenen prop türlerini belirtiyoruz.
interface ImageProps {
  src: string;
  alt?: string; // Alt metni opsiyonel yaptık. Eğer verilmezse, varsayılan bir değer kullanılacak.
}


// Image componenti, src prop'unu alacak ve bir img elementi döndürecek.
const Image : React.FC<ImageProps> = ({ src, alt = 'image' }) => {
  return <img src={src} alt={alt || 'image'} className="rounded-lg shadow-lg" />;
};

export default Image;
