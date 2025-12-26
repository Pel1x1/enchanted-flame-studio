import { Button } from './ui/button';

const buyLinks = [
  { name: 'Telegram', href: 'https://t.me/' },
  { name: 'WhatsApp', href: 'https://wa.me/' },
];

const watchLinks = [
  { name: 'Instagram', href: 'https://instagram.com/' },
  { name: 'Tik Tok', href: 'mailto:lumere@example.com' },
];

const ContactsSection = () => {
  return (
    <section id="contacts" className="relative bg-[#EFDEC0] pb-[4rem] md:pb-[6rem] lg:pb-[8rem]">
      {/* Декоративные цветы */}
      <img
        src="/img/flower.png"
        alt=""
        className="pointer-events-none select-none absolute 
        top-[-7.5rem] left-[-7rem] md:top-[-10rem] md:left-[-8rem] lg:top-[-12rem] lg:left-[-10rem]
        z-0 w-[290px] h-[290px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rotate-[-75deg]"
      />
      
      <img
        src="/img/flower.png"
        alt=""
        className="pointer-events-none select-none absolute 
        top-[-6.8rem] right-[-6.5rem] md:top-[-10rem] md:right-[-8rem] lg:top-[-12rem] lg:right-[-10rem]
        z-0 w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rotate-[180deg]"
      />
      
      <img
        src="/img/flower.png"
        alt=""
        className="pointer-events-none select-none absolute 
        bottom-[-4.5rem] left-[-3.8rem] md:bottom-[-6rem] md:left-[-5rem] lg:bottom-[-8rem] lg:left-[-6rem]
        z-0 w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] rotate-[-75deg]"
      />
      
      <img
        src="/img/flower.png"
        alt=""
        className="pointer-events-none select-none absolute 
        bottom-[-4rem] right-[-4.7rem] md:bottom-[-6rem] md:right-[-5rem] lg:bottom-[-8rem] lg:right-[-6rem]
        z-0 w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] rotate-[180deg]"
      />

      <div className="mx-[43.68px] md:mx-16 lg:mx-24 pt-16 md:pt-20 lg:pt-24 text-center z-10 relative max-w-4xl xl:max-w-5xl 2xl:mx-auto">
        {/* Section Title */}
        <h2 
          style={{ fontFamily: 'Bruney' }}
          className="text-[2.5rem] md:text-5xl lg:text-6xl mb-6 md:mb-8 lg:mb-10 text-[#660000]"
        >
          contacts
        </h2>
        
        {/* CTA Text */}
        <p 
          style={{ fontFamily: 'CormorantR' }}
          className="text-[14.43px] md:text-lg lg:text-xl text-[#660000] text-justify md:text-center mb-4 md:mb-8 max-w-2xl mx-auto"
        >
          Если вы хотите особенную свечу или подарок, 
          напишите в любой удобный мессенджер. 
          Помогу выбрать концепцию, аромат и оформление, 
          чтобы результат полностью отражал ваши пожелания.
        </p>
        
        {/* Мобильная версия */}
        <div className="md:hidden">
          <div className="mb-4">
            <h3 
              style={{ fontFamily: 'CormorantR' }}
              className="text-[14.43px] mb-4 text-[#660000] flex items-center justify-center gap-2"
            >
              Для заказа:
            </h3>
            <div 
              style={{ fontFamily: 'CormorantR' }}
              className="flex justify-center gap-4"
            >
              {buyLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="outline"
                  asChild
                  className="text-[14.43px] text-[#EFDEC0] hover:bg-foreground/20 w-full rounded-full pt-[4px] pb-[7px]"
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className='h-[26px]'>
                    {link.name}
                  </a>
                </Button>
              ))}
            </div>
          </div>
          
          <div>
            <h3 
              style={{ fontFamily: 'CormorantR' }}
              className="text-[14.43px] mb-4 text-[#660000] flex items-center justify-center gap-2"
            >
              Для просмотра:
            </h3>
            <div style={{ fontFamily: 'CormorantR' }} className="flex justify-center gap-4">
              {watchLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="outline"
                  asChild
                  className="text-[14.43px] text-[#EFDEC0] hover:bg-foreground/20 w-full rounded-full pt-[4px] pb-[7px]"
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className='h-[26px]'>
                    {link.name}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Десктопная версия */}
        <div className="hidden md:flex md:flex-col md:items-center md:gap-8 lg:gap-10">
          <div className="flex gap-8 lg:gap-12">
            <div>
              <h3 
                style={{ fontFamily: 'CormorantR' }}
                className="text-lg lg:text-xl mb-4 text-[#660000]"
              >
                Для заказа:
              </h3>
              <div 
                style={{ fontFamily: 'CormorantR' }}
                className="flex gap-4"
              >
                {buyLinks.map((link) => (
                  <Button
                    key={link.name}
                    variant="outline"
                    asChild
                    className="text-base lg:text-lg text-[#EFDEC0] hover:bg-[#660000]/80 px-8 py-3 rounded-full transition-all hover:scale-105"
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.name}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 
                style={{ fontFamily: 'CormorantR' }}
                className="text-lg lg:text-xl mb-4 text-[#660000]"
              >
                Для просмотра:
              </h3>
              <div style={{ fontFamily: 'CormorantR' }} className="flex gap-4">
                {watchLinks.map((link) => (
                  <Button
                    key={link.name}
                    variant="outline"
                    asChild
                    className="text-base lg:text-lg text-[#EFDEC0] hover:bg-[#660000]/80 px-8 py-3 rounded-full transition-all hover:scale-105"
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.name}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
