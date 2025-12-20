import { Sparkles, Heart, Leaf } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-light text-center mb-16 tracking-[0.3em] uppercase text-foreground">
          О бренде
        </h2>
        
        {/* Main Text */}
        <div className="space-y-8 text-center">
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-light">
            Я так долго шла к этому… Годы вдохновения, поиска и экспериментов привели к созданию LUMĒRE. 
            Каждая свеча создаётся вручную с особым вниманием к деталям — от замешивания гипса до финального декора.
          </p>
          
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-light">
            Это не просто источник света — это атмосфера праздника и уюта в вашем доме. 
            Ограниченные партии делают каждое изделие по-настоящему уникальным.
          </p>
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-lg font-medium mb-2 text-foreground">Ручная работа</h3>
            <p className="text-muted-foreground text-sm">
              Каждое изделие создаётся вручную с любовью и вниманием к деталям
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center mb-4">
              <Heart className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-lg font-medium mb-2 text-foreground">Ограниченные партии</h3>
            <p className="text-muted-foreground text-sm">
              Небольшие тиражи гарантируют уникальность каждого изделия
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center mb-4">
              <Leaf className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-lg font-medium mb-2 text-foreground">Натуральные материалы</h3>
            <p className="text-muted-foreground text-sm">
              Кокосовый воск и качественный гипс для безопасного горения
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
