import Logo from './Logo';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-[8rem] pb-12 overflow-hidden z-10">
      
      {/* Общий контейнер для всего контента (центрирует по вертикали) */}
      <div className="relative flex flex-col items-center justify-center w-full">
        
        {/* Блок 1: Рамка + Логотип */}
        <div className="relative flex items-center justify-center">
          
          {/* Изображение в нормальном потоке — теперь оно формирует размер блока */}
          <img
            src="/img/Frame 40.webp"
            alt="LUMĒRE frame"
            className="relative object-contain w-[90vw] max-w-[372px] md:max-w-[500px] lg:max-w-[600px] lg:rotate-90 opacity-80 pointer-events-none z-0"
          />

          {/* Логотип абсолютно центрируется точно поверх картинки */}
          <div className="absolute inset-0 flex items-center justify-center z-10 w-full">
            <Logo />
          </div>

        </div>

        {/* Блок 2: Соцсети — идут в потоке СРАЗУ после картинки */}
        {/* mt-8 задает отступ от фото до кнопок */}
        <div className="relative z-10 flex flex-col items-center gap-4 mt-8 md:mt-10 lg:mt-8 w-full">
          <div className="flex items-center justify-center gap-6 md:gap-8">
            <button
              onClick={() => window.open('https://wa.me/+79245461011', '_blank')}
              aria-label="WhatsApp"
              className="transition-transform hover:scale-110"
            >
              <img
                src="/img/whatsapp.webp"
                alt="WhatsApp"
                className="w-10 h-10 md:w-12 md:h-12"
              />
            </button>

            <button
              onClick={() => window.open('https://t.me/kseni_lumere', '_blank')}
              aria-label="Telegram"
              className="transition-transform hover:scale-110"
            >
              <img
                src="/img/telegram.webp"
                alt="Telegram"
                className="w-10 h-10 md:w-12 md:h-12"
              />
            </button>

            <button
              onClick={() => window.open('https://www.instagram.com/kseni_lumere?igsh=M2NvZzlnMWNhM245', '_blank')}
              aria-label="Instagram"
              className="transition-transform hover:scale-110"
            >
              <img
                src="/img/instagram.webp"
                alt="Instagram"
                className="w-10 h-10 md:w-12 md:h-12"
              />
            </button>
          </div>

          <p 
            className="text-sm md:text-base tracking-[0.3em] text-[#FFF6DB] mt-2 font-semibold" 
            style={{ fontFamily: "CormorantL" }}
          >
            Для заказа
          </p>
        </div>

      </div>
      
    </section>
  );
};

export default HeroSection;
