import { useState } from "react";

const processSteps = [
  {
    id: 1,
    title: "Заливка гипса",
    description: "Подготовка формы и заливка качественного гипса, чтобы создать прочную и аккуратную основу для свечи.",
  },
  {
    id: 2,
    title: "Грунтовка",
    description: "Нанесение грунтовки для идеально гладкой поверхности и лучшего сцепления.",
  },
  {
    id: 3,
    title: "Ручная роспись",
    description: "Аккуратная роспись изделия вручную, с вниманием к деталям, чтобы каждая свеча выглядела как маленькое произведение искусства.",
  },
  {
    id: 4,
    title: "Защитное покрытие",
    description: "Нанесение защитного слоя для долговечности изделия и сохранения его безупречного внешнего вида.",
  },
  {
    id: 5,
    title: "Покрытие лаком",
    description: "Финишное лаковое покрытие придаёт изделию благородный блеск или мягкий матовый эффект, защищая поверхность от влаги и мелких повреждений.",
  },
  {
    id: 6,
    title: "Заливка воска",
    description: "Заливка натурального кокосового воска с ароматическими добавками для мягкого, уютного свечения и тонкого аромата.",
  },
  {
    id: 7,
    title: "Декорирование",
    description: "В расплавленный воск аккуратно добавляются сухоцветы и декоративные элементы, чтобы подчеркнуть характер свечи и сделать каждое изделие уникальным.",
  },
  {
    id: 8,
    title: "Упаковка и отправка заказа",
    description: "Готовая свеча бережно упаковывается в фирменную коробку с защитой, наполнителем и небольшими комплиментами, чтобы заказ выглядел как готовый подарок.",
  },
];

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(1);
  const currentStep = processSteps.find((step) => step.id === activeStep)!;

  return (
    <section
  id="process"
  className="relative w-full bg-[#EFDEC0] rounded-full overflow-hidden
             pt-[15rem] pb-[6rem] md:mt-[14rem] lg:mt-[18rem] flex justify-center"
>

      <div className="relative w-full bg-[#EFDEC0]">
        {/* Контент поверх круга */}
        <div className="relative px-[44px] md:px-16 lg:px-24 pt-[7rem] md:pt-[10rem] max-w-7xl mx-auto bg-[#EFDEC0]">
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
            {/* общий внешний край как у карточки */}
            <div className="relative overflow-x-auto no-scrollbar h-[64px] mx-0">
              <div className="px-0 h-full">
                <div className="flex justify-between items-start h-full w-full ">
                  {processSteps.map((step) => {
                    const isActive = activeStep === step.id;
                    return (
                      <button
                        key={step.id}
                        style={{ fontFamily: "Bruney" }}
                        onClick={() => setActiveStep(step.id)}
                        className={[
                          "relative flex-shrink-0 rounded-lg text-[1.3rem] max-[350px]:text-[1rem]",
                          "bg-[#660000] text-[#EFDEC0]",
                          "transition-all duration-300",
                          "flex items-start justify-center pt-1 max-[350px]:pt-[2px]",
                          "w-8 max-[350px]:w-6 ",
                          isActive ? "h-[64px] rounded-b-none z-20" : "h-9 z-10",
                        ].join(" ")}
                        >
                        {String(step.id).padStart(2, "0")}
                        </button>
                    );
                  })}
                </div>
              </div>
            </div>


             <div className="relative z-10 bg-[#660000] rounded-[1.5rem] px-5 pb-5 pt-10 -mt-6 h-[280px] ">
              <div className="absolute left-[10.2rem] top-[8.5rem] w-[240px] h-[240px] pointer-events-none">
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
          <div className="text-center mt-[5rem] md:mt-[2rem] lg:mt-[4rem] pb-8">
            <div
              style={{ fontFamily: 'CormorantL' }}
              className="text-[14.43px] md:text-lg lg:text-xl leading-tight text-[#660000] mb-6"
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
        </div>

    </section>
  );
};

export default ProcessSection;
