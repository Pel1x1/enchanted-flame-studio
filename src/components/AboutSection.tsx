const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative w-full text-[#660000] flex justify-center"
    >
      {/* Внутренняя «бумага» как на макете */}
      <div className="relative w-full bg-[#F5E2C6] pb-5 rounded-t-full lg:rounded-t-full">
        {/* Большой круг сверху 
        <div className="relative -mt-[200px] w-full h-[0px] lg:h-[600px] rounded-t-full bg-[#F5E2C6] border border-red-500" />
*/}
        {/* Контент поверх круга */}
        <div className="relative px-[44px] md:px-16 lg:px-24 xl:px-32 pt-[20rem] max-w-7xl mx-auto">
          {/* Заголовок ABOUT THE BRAND */}
          <div className="text-center mb-10 md:mb-16 mt-[-15rem] md:mt-[-12rem] lg:mt-[-10rem]">
            <h2
              style={{ fontFamily: 'Bruney' }}
              className="text-[2.5rem] md:text-5xl lg:text-6xl leading-tight text-[#660000]"
            >
              about the
              <br />
              brand
            </h2>
          </div>

          {/* Основной текст (3 абзаца) */}
          <div
            style={{ fontFamily: 'CormorantL' }}
            className="text-[14.43px] md:text-lg lg:text-xl leading-[1.5] md:leading-[1.7] text-[#7B0F16] space-y-4 md:space-y-6 text-justify md:text-center max-w-4xl mx-auto"
          >
            <p>
              Каждая свеча — это маленькая история, созданная теплом рук и вниманием к деталям.
              Аромат меняет настроение, наполняет дом уютом и помогает замедлиться в суете дня.
            </p>

            <p>
              В основе свечей — натуральный воск, безопасные ароматизаторы и индивидуальный
              дизайн, который мы создадим под ваши пожелания: от минимализма до ярких акцентов.
              Создаётся не просто свеча — создаётся атмосфера, где хочется быть.
            </p>

            <p>
              Наши изделия — для тех, кто ценит эстетику, простоту и настоящие эмоции в каждой
              детали.
            </p>
            <br/>
          </div>

          {/* Блоки с преимуществами - мобилка вертикально, десктоп горизонтально */}
          <div className="mt-10 md:mt-16 lg:mt-20 text-[#7B0F16]">
            {/* Мобильная версия - вертикальный layout */}
            <div className="md:hidden space-y-10">
              {/* Блок 1: Ручная работа */}
              <div className="relative">
                <div className="absolute -left-[135px] -top-[70px] w-[240px] h-[240px] pointer-events-none">
                  <img src='/img/flower.png' alt="" />
                </div>
                <div className="ml-[110px] pr-0">
                  <h3
                    style={{ fontFamily: 'CormorantB' }}
                    className="text-[14.43px] bold mb-2"
                  >
                    Ручная работа
                  </h3>
                  <p
                    style={{ fontFamily: 'CormorantL' }}
                    className="text-[14.43px] leading-[1.5] text-justify"
                  >
                    Каждое изделие создаётся вручную с любовью и вниманием к деталям
                  </p>
                  <br/>
                </div>
              </div>

              {/* Блок 2: Ограниченные партии */}
              <div className="relative py-[1rem]">
                <div className="absolute -right-[8rem] top-[-3rem] w-[240px] h-[240px] pointer-events-none">
                  <img src='/img/flower.png' alt="" className="rotate-[210deg]" />
                </div>
                <div className="pr-[60px]">
                  <h3
                    style={{ fontFamily: 'CormorantB' }}
                    className="text-[14.43px] bold mb-2"
                  >
                    Ограниченные партии
                  </h3>
                  <p
                    style={{ fontFamily: 'CormorantL' }}
                    className="text-[14.43px] leading-[1.5]"
                  >
                    Небольшие тиражи гарантируют <br/> уникальность каждого изделия
                  </p>
                </div>
              </div>

              {/* Блок 3: Натуральные материалы */}
              <div className="relative">
                <div className="absolute -left-[7rem] top-[-3rem] w-[240px] h-[240px] pointer-events-none">
                  <img src='/img/flower.png' alt="" className="rotate-[-75deg]" />
                </div>
                <div className="ml-[110px]">
                  <h3
                    style={{ fontFamily: 'CormorantB' }}
                    className="text-[14.43px] bold mb-2"
                  >
                    Натуральные материалы
                  </h3>
                  <p
                    style={{ fontFamily: 'CormorantL' }}
                    className="text-[14.43px] leading-[1.5]"
                  >
                    Кокосовый воск и качественный гипс для безопасного горения
                  </p>
                </div>
              </div>
            </div>

            {/* Десктопная версия - горизонтальный layout */}
            <div className="hidden md:flex md:items-start md:justify-between gap-4 lg:gap-8">
              {/* Левый цветок */}
              <div className="flex-shrink-0 w-[120px] lg:w-[160px] xl:w-[200px] -ml-4 lg:-ml-8">
                <img src='/img/flower.png' alt="" className="w-full opacity-70" />
              </div>

              {/* 3 колонки текста */}
              <div className="flex-1 grid grid-cols-3 gap-6 lg:gap-10 xl:gap-14">
                {/* Блок 1: Ручная работа */}
                <div className="text-center">
                  <h3
                    style={{ fontFamily: 'CormorantB' }}
                    className="text-lg lg:text-xl xl:text-2xl mb-3 lg:mb-4 text-[#7B0F16]"
                  >
                    Ручная работа
                  </h3>
                  <p
                    style={{ fontFamily: 'CormorantL' }}
                    className="text-base lg:text-lg leading-[1.6] text-[#7B0F16]"
                  >
                    Каждое изделие создаётся вручную с любовью и вниманием к деталям
                  </p>
                </div>

                {/* Блок 2: Ограниченные партии */}
                <div className="text-center">
                  <h3
                    style={{ fontFamily: 'CormorantB' }}
                    className="text-lg lg:text-xl xl:text-2xl mb-3 lg:mb-4 text-[#7B0F16]"
                  >
                    Ограниченные партии
                  </h3>
                  <p
                    style={{ fontFamily: 'CormorantL' }}
                    className="text-base lg:text-lg leading-[1.6] text-[#7B0F16]"
                  >
                    Небольшие тиражи гарантируют уникальность каждого изделия
                  </p>
                </div>

                {/* Блок 3: Натуральные материалы */}
                <div className="text-center">
                  <h3
                    style={{ fontFamily: 'CormorantB' }}
                    className="text-lg lg:text-xl xl:text-2xl mb-3 lg:mb-4 text-[#7B0F16]"
                  >
                    Натуральные материалы
                  </h3>
                  <p
                    style={{ fontFamily: 'CormorantL' }}
                    className="text-base lg:text-lg leading-[1.6] text-[#7B0F16]"
                  >
                    Кокосовый воск и качественный гипс для безопасного горения
                  </p>
                </div>
              </div>

              {/* Правый цветок */}
              <div className="flex-shrink-0 w-[120px] lg:w-[160px] xl:w-[200px] -mr-4 lg:-mr-8">
                <img src='/img/flower.png' alt="" className="w-full opacity-70 rotate-180" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
