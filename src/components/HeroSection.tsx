import { ChevronDown } from 'lucide-react';
import Logo from './Logo';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pb-12 mt-[-1rem] text-[#660000] z-10">
      {/* Центрированное изображение */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="/img/Frame 40.png"        // положи файл в public/Frame 40.png
          alt="LUMĒRE frame"
          width={400}
          height={400}
          className="object-contain max-w-full max-h-full"
        />
      </div>

      <Logo />

      {/* Блок соцсетей + текст */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <div className="flex items-center justify-center gap-6">
          <button onClick={scrollToAbout} aria-label="WhatsApp">
            <img
              src="/img/whatsapp.png"
              alt="WhatsApp"
              className="w-8 h-8 md:w-10 md:h-10"
            />
          </button>
          <button onClick={scrollToAbout} aria-label="Telegram">
            <img
              src="/img/telegram.png"
              alt="Telegram"
              className="w-8 h-8 md:w-10 md:h-10"
            />
          </button>
          <button onClick={scrollToAbout} aria-label="Instagram">
            <img
              src="/img/instagram.png"
              alt="Instagram"
              className="w-8 h-8 md:w-10 md:h-10"
            />
          </button>
        </div>

        <p className="text-xs md:text-sm tracking-[0.3em] text-[#FFF6DB]" style={{fontFamily: "CormorantL", }}>
          Для заказа
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
