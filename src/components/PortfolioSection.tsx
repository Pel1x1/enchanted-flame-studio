import { useRef } from 'react';
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
  subtitle,
  rotation = 0
}: { 
  children: React.ReactNode; 
  title: string; 
  subtitle: string;
  rotation?: number;
}) => (
  <div 
    className="bg-foreground/95 p-3 pb-14 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl relative flex-shrink-0 w-[280px] md:w-[300px]"
    style={{ transform: `rotate(${rotation}deg)` }}
  >
    <div className="aspect-square bg-muted/20 flex items-center justify-center overflow-hidden">
      {children}
    </div>
    <div className="absolute bottom-3 left-3 right-3 text-center">
      <p className="text-primary-foreground font-medium text-sm">{title}</p>
      <p className="text-primary-foreground/70 text-xs">{subtitle}</p>
    </div>
  </div>
);

const TouchSlider = ({ 
  items, 
  renderItem 
}: { 
  items: { id: number; [key: string]: unknown }[]; 
  renderItem: (item: { id: number; [key: string]: unknown }, index: number) => React.ReactNode;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative group">
      {/* Navigation Buttons */}
      <Button 
        variant="outline" 
        size="icon" 
        onClick={() => scroll('left')}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 border-foreground/30 text-foreground hover:bg-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex"
      >
        <ChevronLeft size={20} />
      </Button>
      <Button 
        variant="outline" 
        size="icon" 
        onClick={() => scroll('right')}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 border-foreground/30 text-foreground hover:bg-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex"
      >
        <ChevronRight size={20} />
      </Button>

      {/* Scrollable Container */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 px-4 snap-x snap-mandatory scrollbar-hide"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {items.map((item, index) => (
          <div key={item.id} className="snap-center">
            {renderItem(item, index)}
          </div>
        ))}
      </div>

      {/* Scroll Indicator for Mobile */}
      <div className="flex justify-center gap-2 mt-4 md:hidden">
        <span className="text-foreground/50 text-sm">← Листайте →</span>
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  const rotations = [-2, 1, -1, 2, -1.5];

  return (
    <section id="portfolio" className="relative py-24">
      <div className="max-w-full mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-light text-center mb-16 tracking-[0.3em] uppercase text-foreground px-6">
          Портфолио
        </h2>
        
        {/* Candles */}
        <div className="mb-20">
          <h3 className="text-2xl font-light text-center mb-10 tracking-[0.2em] text-foreground/90 px-6">
            Свечи
          </h3>
          <TouchSlider 
            items={candles}
            renderItem={(candle, index) => (
              <PolaroidCard 
                title={candle.name as string} 
                subtitle={`${candle.volume} • ${candle.description}`}
                rotation={rotations[index % rotations.length]}
              >
                <div className="w-full h-full bg-gradient-to-br from-secondary/40 to-muted/60 flex items-center justify-center">
                  <span className="text-4xl">🕯️</span>
                </div>
              </PolaroidCard>
            )}
          />
        </div>
        
        {/* Aroma Sachets */}
        <div className="mb-20">
          <h3 className="text-2xl font-light text-center mb-4 tracking-[0.2em] text-foreground/90 px-6">
            Аромасаше
          </h3>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto px-6">
            Ароматические саше для шкафа, комода или рабочего стола — продолжение эстетики свечей LUMĒRE. 
            Наполнят ваше пространство уютом и изысканным ароматом.
          </p>
          <TouchSlider 
            items={sachets}
            renderItem={(sachet, index) => (
              <PolaroidCard 
                title={sachet.name as string} 
                subtitle={sachet.description as string}
                rotation={rotations[index % rotations.length]}
              >
                <div className="w-full h-full bg-gradient-to-br from-accent/20 to-muted/40 flex items-center justify-center">
                  <span className="text-4xl">🌿</span>
                </div>
              </PolaroidCard>
            )}
          />
        </div>
        
        {/* Gift Sets */}
        <div>
          <h3 className="text-2xl font-light text-center mb-4 tracking-[0.2em] text-foreground/90 px-6">
            Подарочные наборы
          </h3>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto px-6">
            Готовые подарки для особых случаев — день рождения, Новый год, юбилей. 
            Красивая упаковка и продуманная композиция.
          </p>
          <TouchSlider 
            items={giftSets}
            renderItem={(set, index) => (
              <PolaroidCard 
                title={set.name as string} 
                subtitle={set.description as string}
                rotation={rotations[index % rotations.length]}
              >
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
