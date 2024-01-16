import React from 'react';
import Image from '../components/Image';

const MyContainer = () => {
  return (
    <div className="mx-auto bg-blue-500 pb-5 justify-items-center items-center">
      <div className="md:flex md:flex-nowrap ml-5 pl-5 justify-items-center items-center">
        {/* Sol Sütun */}
        <div className="flex-1 p-20">
          <h2 className="text-2xl font-semibold mt-4 pt-4 text-white">Avrupada Çalışma</h2>
          <p className="text-white mt-4 pt-4 ">
            Yüz Yüze Mülakat Süreci
            Hastane yönetimi ile Almanca bir mülakat süreci içerisine giriyoruz.
            Bu süreçte taraflar karşılıklı olarak birbirlerine beklentilerini ve sorularını
            ileterek kesin bir adım atılıyor.
          </p>
            <p className="text-white mt-4 pt-4 ">
            Ön Sözleşme Süreci
            Mülakatta başarılı olan hemşirelerimizin ön sözleşme imzalamasını sağlayarak onlara bir iş
              teminatı sunarak güvence sağlıyoruz.
            </p>
              <p className="text-white mt-4 pt-4 ">
            Denklik Süreci Ve Vize İşlemlerinin Başlatılması
            Onaylanan ve ön sözleşmesi tamamlanan adaylarımızın denklik ve vize işlemleri için
                geçerli olan sürece başlıyoruz. Taraflar arasında karşılıklı belge
                transferleri bu aşamada sağlanıyor.
              </p>
                <p className="text-white mt-4 pt-4 ">
                  Biz Kimiz? Lookup Price Digital 10 yılı aşkın süredir reklam, yazılım ve iş yerleştirme
                  danışmanlık faliyetleri yürütüyor. Bu kapsamda Türkiye'nin çok değerli kuruluşları ile çalışma
                  ve işi geliştirme imkanı sunduk. Referanslar ve Almanya ortaklıklarımız ve işbirliklerimiz
                  konusunda bilgi almak için tvural@lookupprice.com email adresinden iletişime geçebilirsiniz.
               </p>
        </div>

        {/* Sağ Sütun */}
        <div className="flex-1 p-4">
          <img className="rounded-3xl" src="/images/nursegorsel1.png" alt=''/>
        </div>
      </div>
    </div>
  );
};

export default MyContainer;
