import { useState, useEffect } from 'react';

const navItems = [
  { label: 'О бренде', href: '#about' },
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'Процесс', href: '#process' },
  { label: 'Доставка', href: '#delivery' },
  { label: 'Контакты', href: '#contacts' },

];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
  className={`w-full transition-all duration-300 z-100 ${
    isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
  }`}
>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Десктоп: лого + горизонтальное меню */}
          <div className="hidden md:flex items-center justify-between w-full">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xl font-light tracking-[0.3em] text-foreground hover:text-accent transition-colors"
            >
              LUMĒRE
            </a>

            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm tracking-widest text-foreground/80 hover:text-foreground transition-colors uppercase"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Мобилка: просто центрированные ссылки в одной строке */}
          <div className="flex md:hidden w-full justify-center">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-[5rem]">
              {navItems.map((item, index) => (
                <>
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    style={{fontFamily: "CormorantL", }}
                    className="text-[1rem] text-[#FFF6DB] tracking-[0.1rem] hover:text-foreground transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </button>

                  {/* После третьего элемента вставляем «разрыв строки» */}
                  {index === 2 && <span key="break" className="w-full h-0" />}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
