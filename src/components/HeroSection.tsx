import { ChevronDown } from 'lucide-react';
import Logo from './Logo';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen mt-[-2rem] flex flex-col items-center justify-center px-6 pb-12 text-[#660000] z-10">
      {/* Центрированное изображение */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="/img/Frame 40.png"
          alt="LUMĒRE frame"
          className="object-contain max-w-full  w-[372px] md:w-[500px] lg:w-[600px] xl:w-[600px] lg:rotate-90"
        />
      </div>

      <Logo />

      {/* Блок соцсетей + текст */}
      <div className="absolute bottom-12 md:bottom-16 lg:bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 md:gap-4">
        <div className="flex items-center justify-center gap-6 md:gap-8 lg:gap-10">
          <button onClick={scrollToAbout} aria-label="WhatsApp" className="transition-transform hover:scale-110">
            <img
              src="/img/whatsapp.png"
              alt="WhatsApp"
              className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
            />
          </button>
          <button onClick={scrollToAbout} aria-label="Telegram" className="transition-transform hover:scale-110">
            <img
              src="/img/telegram.png"
              alt="Telegram"
              className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
            />
          </button>
          <button onClick={scrollToAbout} aria-label="Instagram" className="transition-transform hover:scale-110">
            <img
              src="/img/instagram.png"
              alt="Instagram"
              className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
            />
          </button>
        </div>

        <p 
          className="text-sm md:text-base lg:text-lg tracking-[0.3em] text-[#FFF6DB]" 
          style={{fontFamily: "CormorantL"}}
        >
          Для заказа
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
