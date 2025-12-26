import { Instagram, Send, MessageCircle, Mail, BookOpen } from 'lucide-react';
import { Button } from './ui/button';


const DeliverySection = () => {
  return (
    <section id="contacts" className="relative py-24 px-[43.68px] ">
      <div className=" text-center">
        <div className="text-center mb-8 mt-[6rem]">
            <h2
              style={{ fontFamily: 'Bruney' }}
              className="text-[2.5rem] leading-tight text-[#FFF6DB]"
            >
              delivery
            </h2>

            <p style={{ fontFamily: 'CormorantL' }} className='text-left mt-8 text-[14.43px] tacking-[1px] text-justify'>

                <span  style={{ fontFamily: 'CormorantB' }}>Доставка</span>
                <br/><br/>
                <span style={{ fontFamily: "CormorantM" }}>
                    Мы предлагаем несколько удобных способов доставки, чтобы вы могли выбрать тот, который подходит именно вам:
                </span>

                <ul className="list-disc pl-5 mt-4 space-y-2">
                    <li><span  style={{ fontFamily: 'CormorantB' }}>Почта России</span> — для отправок по всей России, в том числе в небольшие города и населённые пункты.</li>
                    <li><span  style={{ fontFamily: 'CormorantB' }}>СДЭК</span> — более быстрый и удобный вариант с возможностью получения в пунктах выдачи или у курьера.</li>
                    <li><span  style={{ fontFamily: 'CormorantB' }}>Курьерская доставка по Москве</span> — привезём заказ прямо к вашей двери в оговорённый день и время.</li>
                </ul>
                <br/>
                
                Стоимость доставки в цену изделия не входит и рассчитывается отдельно. 
                <br/><br/>
                <span style={{ fontFamily: "CormorantM" }}>Заказ оформляется через личные сообщения</span>, так как каждое изделие создаётся индивидуально под вас.

            </p>
          </div>
      </div>
    </section>
  );
};

export default DeliverySection;
