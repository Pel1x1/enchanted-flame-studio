const navItems = [
  { label: 'О бренде', href: '#about' },
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'Процесс', href: '#process' },
  { label: 'Доставка', href: '#delivery' },
  { label: 'Контакты', href: '#contacts' },
];

const Navigation = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          {/* Десктоп: лого + горизонтальное меню */}
          <div className="hidden md:flex items-center justify-between w-full">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={{ fontFamily: 'Bruney' }}
              className="text-xl lg:text-2xl xl:text-3xl font-light tracking-[0.3em] text-[#FFF6DB] hover:text-[#FFF6DB] transition-colors"
            >
              Lumere
            </a>

            <div className="flex items-center gap-6 lg:gap-8 xl:gap-12">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  style={{ fontFamily: 'CormorantL' }}
                  className="text-sm lg:text-base xl:text-lg tracking-widest text-[#FFF6DB] hover:text-[#FFF6DB] transition-colors uppercase"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Мобилка: центрированные ссылки */}
          <div className="flex md:hidden w-full justify-center mt-2">
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  style={{ fontFamily: "CormorantL" }}
                  className="text-[1rem] text-[#FFF6DB] tracking-[0.1rem] hover:text-[#800000] transition-colors whitespace-nowrap uppercase"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
