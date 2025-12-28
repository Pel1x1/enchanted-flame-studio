const DeliverySection = () => {
  return (
    <section id="delivery" className="relative py-24 md:py-32 lg:py-40 px-[43.68px] md:px-16 lg:px-24">
      <div className="text-center max-w-5xl mx-auto">
        <div className="text-center mb-8 mt-[6rem] md:mt-[4rem]">
          <h2
            style={{ fontFamily: 'Bruney' }}
            className="text-[2.5rem] md:text-5xl lg:text-6xl leading-tight text-[#FFF6DB]"
          >
            delivery
          </h2>

          <div 
            style={{ fontFamily: 'CormorantL' }} 
            className='mt-8 md:mt-12 text-[14.43px] md:text-lg lg:text-xl tracking-[1px] text-justify md:text-center'
          >
            <span style={{ fontFamily: 'CormorantB' }} className="text-lg md:text-xl lg:text-2xl">Доставка</span>
            <br/><br/>
            <span style={{ fontFamily: "CormorantM" }} className="text-justify">
              Мы предлагаем несколько удобных способов доставки, чтобы вы могли выбрать тот, который подходит именно вам:
            </span>

            {/* Мобильная версия - список */}
            <ul className="md:hidden list-disc pl-5 mt-4 space-y-2 text-left">
              <li><span style={{ fontFamily: 'CormorantB' }}>Почта России</span> — для отправок по всей России, в том числе в небольшие города и населённые пункты.</li>
              <li><span style={{ fontFamily: 'CormorantB' }}>СДЭК</span> — более быстрый и удобный вариант с возможностью получения в пунктах выдачи или у курьера.</li>
              <li><span style={{ fontFamily: 'CormorantB' }}>Курьерская доставка по Москве</span> — привезём заказ прямо к вашей двери в оговорённый день и время.</li>
            </ul>

            {/* Десктопная версия - карточки */}
            <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 mt-8 lg:mt-12">
              <div className="p-6 lg:p-8 rounded-2xl border border-[#FFF6DB]/30 hover:border-[#FFF6DB]/60 transition-colors">
                <h4 style={{ fontFamily: 'CormorantB' }} className="text-xl lg:text-2xl mb-3 text-[#FFF6DB]">Почта России</h4>
                <p style={{ fontFamily: 'CormorantL' }} className="text-base lg:text-lg text-[#FFF6DB]/80">
                  Для отправок по всей России, в том числе в небольшие города и населённые пункты.
                </p>
              </div>
              <div className="p-6 lg:p-8 rounded-2xl border border-[#FFF6DB]/30 hover:border-[#FFF6DB]/60 transition-colors">
                <h4 style={{ fontFamily: 'CormorantB' }} className="text-xl lg:text-2xl mb-3 text-[#FFF6DB]">СДЭК</h4>
                <p style={{ fontFamily: 'CormorantL' }} className="text-base lg:text-lg text-[#FFF6DB]/80">
                  Более быстрый и удобный вариант с возможностью получения в пунктах выдачи или у курьера.
                </p>
              </div>
              <div className="p-6 lg:p-8 rounded-2xl border border-[#FFF6DB]/30 hover:border-[#FFF6DB]/60 transition-colors">
                <h4 style={{ fontFamily: 'CormorantB' }} className="text-xl lg:text-2xl mb-3 text-[#FFF6DB]">По Москве</h4>
                <p style={{ fontFamily: 'CormorantL' }} className="text-base lg:text-lg text-[#FFF6DB]/80">
                  Курьерская доставка прямо к вашей двери в оговорённый день и время.
                </p>
              </div>
            </div>
            
            <br/>
            <p style={{ fontFamily: "CormorantR" }} className="text-justify md:text-center">
              Стоимость доставки в цену изделия не входит и рассчитывается отдельно.
            </p>
            <br/>
            <p style={{ fontFamily: "CormorantM" }} className="text-justify md:text-center">
              Заказ оформляется через личные сообщения, так как каждое изделие создаётся индивидуально под вас.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
