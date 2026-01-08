import { useMemo, useState } from "react";

const processSteps = [
  {
    id: 1,
    title: "Заливка гипса",
    description:
      "Подготовка формы и заливка качественного гипса, чтобы создать прочную и аккуратную основу для свечи.",
  },
  {
    id: 2,
    title: "Грунтовка",
    description:
      "Нанесение грунтовки для идеально гладкой поверхности и лучшего сцепления.",
  },
  {
    id: 3,
    title: "Ручная роспись",
    description:
      "Аккуратная роспись изделия вручную, с вниманием к деталям, чтобы каждая свеча выглядела как маленькое произведение искусства.",
  },
  {
    id: 4,
    title: "Защитное покрытие",
    description:
      "Нанесение защитного слоя для долговечности изделия и сохранения его безупречного внешнего вида.",
  },
  {
    id: 5,
    title: "Покрытие лаком",
    description:
      "Финишное лаковое покрытие придаёт изделию благородный блеск или мягкий матовый эффект, защищая поверхность от влаги и мелких повреждений.",
  },
  {
    id: 6,
    title: "Заливка воска",
    description:
      "Заливка натурального кокосового воска с ароматическими добавками для мягкого, уютного свечения и тонкого аромата.",
  },
  {
    id: 7,
    title: "Декорирование",
    description:
      "В расплавленный воск аккуратно добавляются сухоцветы и декоративные элементы, чтобы подчеркнуть характер свечи и сделать каждое изделие уникальным.",
  },
  {
    id: 8,
    title: "Упаковка и отправка заказа",
    description:
      "Готовая свеча бережно упаковывается в фирменную коробку с защитой, наполнителем и небольшими комплиментами, чтобы заказ выглядел   как готовый подарок.",
  },
];

function ProcessHeader() {
  return (
    <div className="text-center mb-8 md:mb-12 mt-[-18rem] md:mt-0 lg:mt-0">
      <h2
        style={{ fontFamily: "Bruney" }}
        className="text-[2.5rem] md:text-5xl lg:text-6xl leading-tight text-[#660000]"
      >
        the work
        <br />
        process
      </h2>
    </div>
  );
}

function ProcessFooter() {
  return (
    <div className="text-center mt-[5rem] md:mt-[2rem] lg:mt-[4rem] pb-8">
      <div
        style={{ fontFamily: "CormorantL" }}
        className="text-[14.43px] md:text-lg lg:text-xl leading-tight text-[#660000] mb-6"
      >
        Работа над заказом занимает 7–10 дней
      </div>
      <p
        style={{ fontFamily: "CormorantB" }}
        className="text-[14.43px] md:text-lg lg:text-xl text-[#660000] max-w-2xl mx-auto px-4"
      >
        "Каждое изделие уникально и выпускается ограниченным тиражом. Небольшие отличия — часть очарования ручной работы."
      </p>
    </div>
  );
}

function ProcessMobile({ steps, activeStep, onChange }) {
  const currentStep = useMemo(
    () => steps.find((s) => s.id === activeStep) ?? steps[0],
    [steps, activeStep]
  );

  return (
    <div className="md:hidden">
      {/* верхняя линейка шагов */}
      <div className="relative overflow-x-auto no-scrollbar h-[64px] mx-0">
        <div className="flex justify-between items-start h-full w-full">
          {steps.map((step) => {
            const isActive = activeStep === step.id;

            return (
              <button
                key={step.id}
                style={{ fontFamily: "Bruney" }}
                onClick={() => onChange(step.id)}
                className={[
                  "relative flex-shrink-0 rounded-lg text-[1.3rem] max-[350px]:text-[1rem]",
                  "bg-[#660000] text-[#EFDEC0]",
                  "transition-all duration-300",
                  "flex items-start justify-center pt-1 max-[350px]:pt-[2px]",
                  "w-8 max-[350px]:w-6",
                  isActive ? "h-[64px] rounded-b-none z-20" : "h-9 z-10",
                ].join(" ")}
              >
                {String(step.id).padStart(2, "0")}
              </button>
            );
          })}
        </div>
      </div>

      {/* карточка шага */}
      <div className="relative z-10 bg-[#660000] rounded-[1.5rem] px-5 pb-5 pt-10 -mt-6 h-[310px]">
        <div className="absolute right-[-4.5rem] bottom-[-4.6rem] w-[240px] h-[240px] pointer-events-none">
          <img src="/img/flower.png" alt="" className="rotate-[220deg]" />
        </div>

        <div className="relative z-10">
          <h3
            style={{ fontFamily: "CormorantB" }}
            className="text-[14.43px] text-[#FFF6DB] mb-3"
          >
            {currentStep.title}
          </h3>
          <p
            style={{ fontFamily: "CormorantL" }}
            className="text-[14.43px] text-[#FFF6DB] leading-relaxed"
          >
            {currentStep.description}
          </p>
        </div>
      </div>
    </div>
  );
}

function ProcessDesktop({ steps }) {
  return (
    <div className="hidden md:block">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        <div className="absolute right-[-4.5rem] bottom-[0rem] w-[240px] h-[240px] pointer-events-none">
          <img src="/img/flower.png" alt="" className="rotate-[220deg]" />
        </div>
        <div className="absolute left-[-4.5rem] bottom-[0rem] w-[240px] h-[240px] pointer-events-none">
          <img src="/img/flower.png" alt="" className="rotate-[280deg]" />
        </div>
        <div className="absolute left-[10rem] top-[0rem] w-[240px] h-[240px] pointer-events-none">
          <img src="/img/flower.png" alt="" className="rotate-[220deg]" />
        </div>
        <div className="absolute right-[10rem] top-[0rem] w-[240px] h-[240px] pointer-events-none">
          <img src="/img/flower.png" alt="" className="rotate-[300deg]" />
        </div>

        {steps.map((step) => (
          <div
            key={step.id}
            className="relative bg-[#660000] text-[#EFDEC0] rounded-2xl overflow-hidden"
          >
            <div className="p-5 lg:p-6">
              <div
                style={{ fontFamily: "Bruney" }}
                className="text-2xl lg:text-3xl mb-2"
              >
                {String(step.id).padStart(2, "0")}
              </div>
              <h3
                style={{ fontFamily: "CormorantB" }}
                className="text-lg lg:text-xl mb-2"
              >
                {step.title}
              </h3>
              <p
                style={{ fontFamily: "CormorantL" }}
                className="text-sm lg:text-base leading-relaxed opacity-90"
              >
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section
      id="process"
      className="
        relative w-full bg-[#EFDEC0] flex justify-center
        pt-[15rem] pb-[6rem] rounded-full overflow-hidden
        md:pt-[0rem] md:pb-[0rem] md:rounded-none md:overflow-visible
      "
    >
      <div className="relative w-full bg-[#EFDEC0]">
        <div
          className="
            relative max-w-7xl mx-auto bg-[#EFDEC0]
            px-[44px] pt-[7rem]
            md:px-16 md:pt-[4rem]
            lg:px-24 lg:pt-[4rem]
          "
        >
          <ProcessHeader />

          <ProcessMobile
            steps={processSteps}
            activeStep={activeStep}
            onChange={setActiveStep}
          />

          <ProcessDesktop steps={processSteps} />

          <ProcessFooter />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
