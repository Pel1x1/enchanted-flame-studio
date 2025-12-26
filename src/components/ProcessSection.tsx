import { useState } from "react";
import hibiscusFlower from "/img/flower.png";

const processSteps = [
  {
    id: 1,
    title: "Грунтовка",
    description: "Тщательная подготовка поверхности формы. Наносим специальный грунт для идеально гладкой текстуры будущей свечи.",
  },
  {
    id: 2,
    title: "Подготовка формы",
    description: "Создаём и подготавливаем уникальную форму для свечи. Каждая форма разрабатывается индивидуально под дизайн изделия.",
  },
  {
    id: 3,
    title: "Заливка воска",
    description: "Плавим натуральный соевый воск при точной температуре и аккуратно заливаем в подготовленную форму.",
  },
  {
    id: 4,
    title: "Установка фитиля",
    description: "Центрируем и надёжно фиксируем хлопковый фитиль. От правильной установки зависит равномерное горение свечи.",
  },
  {
    id: 5,
    title: "Добавление аромата",
    description: "Вносим натуральные эфирные масла и премиальные отдушки. Ароматы подбираются для создания особой атмосферы.",
  },
  {
    id: 6,
    title: "Охлаждение",
    description: "Свеча остывает естественным образом. Медленное охлаждение обеспечивает идеальную структуру и предотвращает трещины.",
  },
  {
    id: 7,
    title: "Финишная обработка",
    description: "Шлифуем поверхность, выравниваем края и проверяем качество. Каждая деталь доводится до совершенства.",
  },
  {
    id: 8,
    title: "Упаковка",
    description: "Бережно упаковываем свечу в фирменную упаковку. Готовим к отправке с любовью и заботой о каждом заказе.",
  },
];

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(1);
  const currentStep = processSteps.find((step) => step.id === activeStep)!;

  return (
    <section
      id="about"
      className="relative w-full bg-[#7B0F16] text-[#5E160F] 
      mt-[10rem]
      flex justify-center"
    >
      {/* Внутренняя «бумага» как на макете */}
      <div className="relative w-full bg-[#EFDEC0]">
        {/* Большой круг сверху */}
        <div className="absolute -top-[49vw] left-1/2 -translate-x-1/2 w-full h-full rounded-full bg-[#EFDEC0]" />
        <div className="absolute -top-[49vw] left-1/2 -translate-x-1/2 w-[130%] h-full rounded-full bg-[#EFDEC0]" /> 
        {/* Контент поверх круга */}
        <div className="relative px-[44px] pt-[7rem]">
          {/* Заголовок ABOUT THE BRAND */}
          <div className="text-center mb-8 mt-[-18rem]">
            <h2
              style={{ fontFamily: 'Bruney' }}
              className="text-[2.5rem] leading-tight text-[#660000]"
            >
              the work
              <br />
              process
            </h2>
          </div>

          <div className="relative z-20 flex justify-center gap-2.5">
          {processSteps.map((step) => (
            <button
              key={step.id}
              style={{ fontFamily: 'Bruney' }}
              onClick={() => setActiveStep(step.id)}
              className={`
                w-8 h-9 rounded-lg text-[1.5rem] mb-2
                transition-all duration-300 flex-shrink-0
                bg-[#660000] text-[#EFDEC0]
                ${activeStep === step.id
                  ? "relative z-30 -mb-2"
                  : "relative z-20"
                }
              `}
            >
              {activeStep === step.id && (
                <span className="absolute left-0 right-0 -bottom-[30px] h-[40px] bg-[#660000]" />
              )}
              {String(step.id).padStart(2, "0")}
            </button>
          ))}
        </div>

        <div className="relative z-10 bg-[#660000] rounded-[1.5rem] p-5 mx-2 h-[380px]">
          <div className="absolute left-[10rem] top-[14.7rem] w-[240px] h-[240px] pointer-events-none">
            <img src='/img/flower.png'
            className="rotate-[220deg]"
            />
          </div>

          <div className="relative z-10">
            <div>
              <h3 
              style={{ fontFamily: 'CormoranB', }}
              className="text-[14.43px]  text-[#FFF6DB] mb-3">
                {currentStep.title}
              </h3>
              <p 
              style={{ fontFamily: 'CormorantL', }}
              className="text-[14.43px] text-[#FFF6DB]  leading-relaxed">
                {currentStep.description}
              </p>
            </div>

            {/* Image placeholder */}
            <div className="w-full aspect-[4/3] rounded-xl bg-card/20 flex items-center justify-center mb-0 overflow-hidden z-0">
              <div className="text-center text-primary-foreground/60 z-0">
                <div className="text-3xl mb-1 z-0">📷</div>
                <p className="text-xs">Фото этапа {String(activeStep).padStart(2, "0")}</p>
              </div>
            </div>
            
          </div>
          
        </div>
        <div className="text-center mt-[4rem] z-1000">
            <h2
              style={{ fontFamily: 'Bruney' }}
              className="text-[14.43px] leading-tight text-[#660000]"
            >
              <span style={{ fontFamily: 'CormorantL' }}> Работа над заказом занимает 7–10 дней </span>
              <br />
              <br />
              <span style={{ fontFamily: 'CormorantB' }}> 
                "Каждое изделие уникально и выпускается ограниченным тиражом. Небольшие отличия — часть очарования ручной работы."
              </span>
            </h2>
          </div>
          <div className="absolute -z-10 top-[30vw] left-1/2 -translate-x-1/2 w-[130%] h-full rounded-[100%] bg-[#EFDEC0]" /> 
        </div>
          
        

        </div>
        
    </section>
  );
};

export default ProcessSection;
