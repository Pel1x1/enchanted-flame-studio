import { useState } from "react";

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
      id="process"
      className="relative w-full bg-[#7B0F16] text-[#5E160F] mt-[10rem] md:mt-[14rem] lg:mt-[18rem] flex justify-center"
    >
      <div className="relative w-full bg-[#EFDEC0]">
        {/* Большой круг сверху */}
        <div className="absolute -top-[49vw] md:-top-[30vw] lg:-top-[20vw] left-1/2 -translate-x-1/2 w-[130%] h-full rounded-full bg-[#EFDEC0]" /> 

        {/* Контент поверх круга */}
        <div className="relative px-[44px] md:px-16 lg:px-24 pt-[7rem] md:pt-[10rem] max-w-7xl mx-auto">
          {/* Заголовок */}
          <div className="text-center mb-8 md:mb-12 mt-[-18rem] md:mt-[-19rem] lg:mt-[-20rem]">
            <h2
              style={{ fontFamily: 'Bruney' }}
              className="text-[2.5rem] md:text-5xl lg:text-6xl leading-tight text-[#660000]"
            >
              the work
              <br />
              process
            </h2>
          </div>

          {/* Мобильная версия */}
          <div className="md:hidden">
              
            <div className="relative overflow-x-auto no-scrollbar mb-0 h-[64px]">
              <div className="flex justify-center gap-[9px] w-full ml-0 mr-0 items-start h-full">
                {processSteps.map((step) => {
                  const isActive = activeStep === step.id;

                  return (
                    <button
                      key={step.id}
                      style={{ fontFamily: "Bruney" }}
                      onClick={() => setActiveStep(step.id)}
                      className={[
                        "relative w-8 flex-shrink-0 rounded-lg text-[1.3rem]",
                        "bg-[#660000] text-[#EFDEC0]",
                        "transition-all duration-300", // можно заменить на transition-[height]
                        "flex items-start justify-center pt-1",
                        isActive ? "h-[64px] rounded-b-none z-20" : "h-9 z-10",
                      ].join(" ")}
                    >
                      {String(step.id).padStart(2, "0")}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="relative z-10 bg-[#660000] rounded-[1.5rem] px-5 pb-5 pt-10 mx-2 -mt-4 h-[220px]">
              <div className="absolute left-[10.2rem] top-[4.7rem] w-[240px] h-[240px] pointer-events-none">
                <img src='/img/flower.png' alt="" className="rotate-[220deg]" />
              </div>

              <div className="relative z-10">
                <h3 
                  style={{ fontFamily: 'CormorantB' }}
                  className="text-[14.43px] text-[#FFF6DB] mb-3"
                >
                  {currentStep.title}
                </h3>
                <p 
                  style={{ fontFamily: 'CormorantL' }}
                  className="text-[14.43px] text-[#FFF6DB] leading-relaxed"
                >
                  {currentStep.description}
                </p>

                {/* Фото плейсхолдер 
                <div className="w-full aspect-[4/3] rounded-xl bg-card/20 flex items-center justify-center mb-0 overflow-hidden z-0">
                  <div className="text-center text-primary-foreground/60 z-0">
                    <div className="text-3xl mb-1 z-0">📷</div>
                    <p className="text-xs">Фото этапа {String(activeStep).padStart(2, "0")}</p>
                  </div>
                </div>*/}
              </div>
            </div>
          </div>

          {/* Десктопная версия - сетка шагов с фото плейсхолдерами */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {processSteps.map((step) => (
                <div
                  key={step.id}
                  className="relative bg-[#660000] text-[#EFDEC0] rounded-2xl overflow-hidden"
                >
                  {/* Фото плейсхолдер 
                  <div className="w-full aspect-[4/3] bg-[#4a0000] flex items-center justify-center">
                    <div className="text-center text-[#EFDEC0]/60">
                      <div className="text-4xl mb-2">📷</div>
                      <p style={{ fontFamily: 'CormorantL' }} className="text-sm">Фото этапа {String(step.id).padStart(2, "0")}</p>
                    </div>
                  </div>*/}
                  
                  {/* Контент карточки */}
                  <div className="p-5 lg:p-6">
                    <div 
                      style={{ fontFamily: 'Bruney' }}
                      className="text-2xl lg:text-3xl mb-2"
                    >
                      {String(step.id).padStart(2, "0")}
                    </div>
                    <h3 
                      style={{ fontFamily: 'CormorantB' }}
                      className="text-lg lg:text-xl mb-2"
                    >
                      {step.title}
                    </h3>
                    <p 
                      style={{ fontFamily: 'CormorantL' }}
                      className="text-sm lg:text-base leading-relaxed opacity-90"
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Нижний текст */}
          <div className="text-center mt-[4rem] md:mt-[2rem] lg:mt-[4rem] pb-8">
            <div
              style={{ fontFamily: 'CormorantL' }}
              className="text-[14.43px] md:text-lg lg:text-xl leading-tight text-[#660000] mb-4"
            >
              Работа над заказом занимает 7–10 дней
            </div>
            <p 
              style={{ fontFamily: 'CormorantB' }}
              className="text-[14.43px] md:text-lg lg:text-xl text-[#660000] max-w-2xl mx-auto"
            >
              "Каждое изделие уникально и выпускается ограниченным тиражом. Небольшие отличия — часть очарования ручной работы."
            </p>
          </div>

          <div className="absolute -z-10 top-[30vw] md:-top-[30vw] lg:-top-[20vw] left-1/2 -translate-x-1/2 w-[130%] h-full rounded-full bg-[#EFDEC0]" /> 
    
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
