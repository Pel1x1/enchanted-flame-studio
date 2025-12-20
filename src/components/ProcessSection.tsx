const steps = [
  {
    number: '01',
    title: 'Заливка гипса',
    description: 'Подготовка формы и заливка качественного гипса для создания основы свечи',
    icon: '🏺',
  },
  {
    number: '02',
    title: 'Грунтовка',
    description: 'Нанесение грунтовки для идеально гладкой поверхности и лучшего сцепления',
    icon: '🖌️',
  },
  {
    number: '03',
    title: 'Защитное покрытие',
    description: 'Нанесение защитного слоя для долговечности изделия',
    icon: '🛡️',
  },
  {
    number: '04',
    title: 'Покрытие лаком',
    description: 'Финишное лаковое покрытие придаёт изделию благородный блеск',
    icon: '✨',
  },
  {
    number: '05',
    title: 'Заливка воска',
    description: 'Заливка натурального кокосового воска с ароматическими добавками',
    icon: '🕯️',
  },
  {
    number: '06',
    title: 'Декорирование',
    description: 'Финальные штрихи — декор, упаковка и контроль качества',
    icon: '🎀',
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-light text-center mb-4 tracking-[0.3em] uppercase text-foreground">
          Процесс создания
        </h2>
        
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Секрет долгих ожиданий — в тщательности каждого этапа. 
          Работа над заказом занимает 7–10 дней.
        </p>
        
        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative p-6 bg-card/50 border border-border/30 rounded-lg hover:bg-card/70 transition-all duration-300 group"
            >
              {/* Step Number */}
              <span className="absolute -top-3 -left-3 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-sm font-medium text-foreground">
                {step.number}
              </span>
              
              {/* Icon */}
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-medium mb-2 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Unique Note */}
        <div className="mt-16 text-center p-8 bg-secondary/20 rounded-lg border border-border/30">
          <p className="text-lg text-foreground/90 font-light italic">
            "Каждое изделие уникально и выпускается ограниченным тиражом. 
            Небольшие отличия — часть очарования ручной работы."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
