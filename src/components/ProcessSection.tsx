const steps = [
  {
    number: '01',
    title: 'Заливка гипса',
    description: 'Подготовка формы и заливка качественного гипса для создания основы свечи',
    filled: false,
  },
  {
    number: '02',
    title: 'Грунтовка',
    description: 'Нанесение грунтовки для идеально гладкой поверхности и лучшего сцепления',
    filled: false,
  },
  {
    number: '03',
    title: 'Защитное покрытие',
    description: 'Нанесение защитного слоя для долговечности изделия',
    filled: true,
  },
  {
    number: '04',
    title: 'Покрытие лаком',
    description: 'Финишное лаковое покрытие придаёт изделию благородный блеск',
    filled: false,
  },
  {
    number: '05',
    title: 'Заливка воска',
    description: 'Заливка натурального кокосового воска с ароматическими добавками',
    filled: true,
  },
  {
    number: '06',
    title: 'Декорирование',
    description: 'Финальные штрихи — декор, упаковка и контроль качества',
    filled: true,
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-5xl font-light text-center mb-4 tracking-[0.2em] text-foreground italic">
          Этапы
        </h2>
        <h2 className="text-3xl md:text-5xl font-light text-center mb-12 tracking-[0.2em] text-foreground italic">
          создания
        </h2>
        
        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {steps.map((step) => (
            <div 
              key={step.number}
              className={`p-6 md:p-8 transition-all duration-300 ${
                step.filled 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-transparent border-2 border-foreground/30 text-foreground'
              }`}
            >
              {/* Step Number & Title */}
              <h3 className={`text-lg md:text-xl font-medium mb-4 tracking-wide ${
                step.filled ? 'text-primary-foreground' : 'text-foreground'
              }`}>
                {step.number} / {step.title.toUpperCase()}
              </h3>
              
              {/* Description */}
              <p className={`text-sm md:text-base leading-relaxed ${
                step.filled ? 'text-primary-foreground/90' : 'text-foreground/80'
              }`}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Timeline Note */}
        <div className="mt-12 text-center">
          <p className="text-foreground/80 text-lg">
            Работа над заказом занимает <span className="font-medium text-foreground">7–10 дней</span>
          </p>
        </div>
        
        {/* Unique Note */}
        <div className="mt-8 text-center p-6 border border-foreground/20">
          <p className="text-foreground/90 font-light italic">
            "Каждое изделие уникально и выпускается ограниченным тиражом. 
            Небольшие отличия — часть очарования ручной работы."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
