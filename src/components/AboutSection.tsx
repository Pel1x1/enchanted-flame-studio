import { Sparkles, Heart, Leaf } from 'lucide-react';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-[#7B0F16] text-[#5E160F] flex justify-center"
    >
      {/* Внутренняя «бумага» как на макете */}
      <div className="relative w-full bg-[#F5E2C6] pb-12">
        {/* Большой круг сверху */}
        <div className="absolute -top-[55vw] left-1/2 -translate-x-1/2 w-full h-full rounded-full bg-[#F5E2C6]" />
          
        {/* Контент поверх круга */}
        <div className="relative px-12 pt-24 ">
          {/* Заголовок ABOUT THE BRAND */}
          <div className="text-center mb-10 mt-[-15rem]">
            <h2
              style={{ fontFamily: 'Bruney' }}
              className="text-[2.5rem] leading-tight text-[#660000]"
            >
              about the
              <br />
              brand
            </h2>
          </div>

          {/* Основной текст (3 абзаца) */}
          <div
            style={{ fontFamily: 'CormorantL', }}
            className="text-[0.9rem] leading-[1.5] text-[#7B0F16] space-y-4 text-justify"
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
          </div>

          {/* Блоки с преимуществами и местами под цветы */}
          <div className="mt-10 space-y-10 text-[#7B0F16]">
            {/* Блок 1: Ручная работа */}
            <div className="relative ">
              {/* ЛЕВЫЙ ЦВЕТОК */}
              <div className="absolute -left-[135px] -top-[70px] w-[255px] h-[255px] pointer-events-none">
                <img src='/img/flower.png' className=''/>
              </div>

              <div className="ml-[120px] pr-4">
                <h3
                  style={{ fontFamily: 'CormorantB' }}
                  className="text-[0.9rem] bold mb-2"
                >
                  Ручная работа
                </h3>
                <p
                  style={{ fontFamily: 'CormorantL' }}
                  className="text-[0.9rem] leading-[1.5] text-justify"
                >
                  Каждое изделие создаётся вручную с любовью и вниманием к деталям
                </p>
              </div>
            </div>

            {/* Блок 2: Ограниченные партии */}
            <div className="relative py-[1rem]">
              {/* ПРАВЫЙ ЦВЕТОК */}
              <div className="absolute -right-[6rem] top-[-3rem] w-[205px] h-[205px] pointer-events-none">
                <img src='/img/flower.png'
                className="rotate-[180deg]"
                />
              </div>

              <div className="">
                <h3
                  style={{ fontFamily: 'CormorantB' }}
                  className="text-[0.9rem] mb-2"
                >
                  Ограниченные партии
                </h3>
                <p
                  style={{ fontFamily: 'CormorantL' }}
                  className="text-[0.9rem] leading-[1.5] "
                >
                  Небольшие тиражи гарантируют <br/> уникальность каждого изделия
                </p>
              </div>
            </div>

            {/* Блок 3: Натуральные материалы */}
            <div className="relative">
              {/* ЛЕВЫЙ НИЖНИЙ ЦВЕТОК */}
              <div className="absolute -left-[7rem] top-[-3rem] w-[235px] h-[235px] pointer-events-none">
                <img src='/img/flower.png'
                className="rotate-[-75deg]"
                />
              </div>

              <div className="ml-[120px] pr-4">
                <h3
                  style={{ fontFamily: 'CormorantB' }}
                  className="text-[0.9rem] bold mb-2"
                >
                  Натуральные материалы
                </h3>
                <p
                  style={{ fontFamily: 'CormorantL' }}
                  className="text-[0.9rem] leading-[1.6] tracking-[0.12em] "
                >
                  Кокосовый воск и качественный гипс для безопасного горения
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;