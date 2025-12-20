import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

// Placeholder images - replace with actual candle photos
const candles = [
  { id: 1, name: 'Античная колонна', volume: '200 мл', description: 'Нежный аромат ванили и сандала' },
  { id: 2, name: 'Греческая богиня', volume: '150 мл', description: 'Свежий цитрусовый аромат' },
  { id: 3, name: 'Минималистичный куб', volume: '180 мл', description: 'Тёплый аромат корицы' },
  { id: 4, name: 'Ракушка', volume: '120 мл', description: 'Морской бриз' },
  { id: 5, name: 'Арка', volume: '200 мл', description: 'Лаванда и мёд' },
];

const sachets = [
  { id: 1, name: 'Лавандовый сон', description: 'Для шкафа и комода' },
  { id: 2, name: 'Цитрусовая свежесть', description: 'Для рабочего стола' },
  { id: 3, name: 'Ваниль и корица', description: 'Для уютных вечеров' },
];

const giftSets = [
  { id: 1, name: 'День рождения', description: 'Свеча + аромасаше + открытка' },
  { id: 2, name: 'Новый год', description: 'Набор из 3 мини-свечей' },
  { id: 3, name: 'Романтический вечер', description: 'Свеча + подсвечник' },
];

const PolaroidCard = ({ 
  children, 
  title, 
  subtitle 
}: { 
  children: React.ReactNode; 
  title: string; 
  subtitle: string;
}) => (
  <div className="bg-foreground/95 p-3 pb-12 shadow-xl transform hover:rotate-0 transition-transform duration-300 hover:scale-105" 
       style={{ transform: `rotate(${Math.random() * 4 - 2}deg)` }}>
    <div className="aspect-square bg-muted/20 flex items-center justify-center overflow-hidden">
      {children}
    </div>
    <div className="absolute bottom-3 left-3 right-3 text-center">
      <p className="text-primary-foreground font-medium text-sm">{title}</p>
      <p className="text-primary-foreground/70 text-xs">{subtitle}</p>
    </div>
  </div>
);

const Slider = ({ 
  items, 
  renderItem 
}: { 
  items: any[]; 
  renderItem: (item: any, index: number) => React.ReactNode;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;
  const maxIndex = Math.max(0, items.length - itemsPerView);

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div 
          className="flex gap-6 transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
        >
          {items.map((item, index) => (
            <div key={item.id} className="flex-shrink-0 w-full md:w-1/3 px-2">
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>
      
      {items.length > itemsPerView && (
        <div className="flex justify-center gap-4 mt-8">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={prev} 
            disabled={currentIndex === 0}
            className="border-foreground/30 text-foreground hover:bg-foreground/10"
          >
            <ChevronLeft size={20} />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={next} 
            disabled={currentIndex >= maxIndex}
            className="border-foreground/30 text-foreground hover:bg-foreground/10"
          >
            <ChevronRight size={20} />
          </Button>
        </div>
      )}
    </div>
  );
};

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-light text-center mb-16 tracking-[0.3em] uppercase text-foreground">
          Портфолио
        </h2>
        
        {/* Candles */}
        <div className="mb-20">
          <h3 className="text-2xl font-light text-center mb-10 tracking-[0.2em] text-foreground/90">
            Свечи
          </h3>
          <Slider 
            items={candles}
            renderItem={(candle) => (
              <PolaroidCard title={candle.name} subtitle={`${candle.volume} • ${candle.description}`}>
                <div className="w-full h-full bg-gradient-to-br from-secondary/40 to-muted/60 flex items-center justify-center">
                  <span className="text-4xl">🕯️</span>
                </div>
              </PolaroidCard>
            )}
          />
        </div>
        
        {/* Aroma Sachets */}
        <div className="mb-20">
          <h3 className="text-2xl font-light text-center mb-4 tracking-[0.2em] text-foreground/90">
            Аромасаше
          </h3>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Ароматические саше для шкафа, комода или рабочего стола — продолжение эстетики свечей LUMĒRE. 
            Наполнят ваше пространство уютом и изысканным ароматом.
          </p>
          <Slider 
            items={sachets}
            renderItem={(sachet) => (
              <PolaroidCard title={sachet.name} subtitle={sachet.description}>
                <div className="w-full h-full bg-gradient-to-br from-accent/20 to-muted/40 flex items-center justify-center">
                  <span className="text-4xl">🌿</span>
                </div>
              </PolaroidCard>
            )}
          />
        </div>
        
        {/* Gift Sets */}
        <div>
          <h3 className="text-2xl font-light text-center mb-4 tracking-[0.2em] text-foreground/90">
            Подарочные наборы
          </h3>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Готовые подарки для особых случаев — день рождения, Новый год, юбилей. 
            Красивая упаковка и продуманная композиция.
          </p>
          <Slider 
            items={giftSets}
            renderItem={(set) => (
              <PolaroidCard title={set.name} subtitle={set.description}>
                <div className="w-full h-full bg-gradient-to-br from-secondary/30 to-accent/20 flex items-center justify-center">
                  <span className="text-4xl">🎁</span>
                </div>
              </PolaroidCard>
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
