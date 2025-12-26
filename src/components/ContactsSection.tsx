import { Instagram, Send, MessageCircle, Mail, BookOpen } from 'lucide-react';
import { Button } from './ui/button';

const buyLinks = [
  {
    name: 'Telegram',
    href: 'https://t.me/',
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/',
  },
];

const watchLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/',
  },
  {
    name: 'Tik Tok',
    href: 'mailto:lumere@example.com',
  },
];


const ContactsSection = () => {
  return (
    <section id="contacts" className="relative bg-[#EFDEC0] pb-[4rem]">

    <img
        src="/img/flower.png"
        alt=""
        className="pointer-events-none select-none absolute 
        top-[-7.5rem] left-[-7rem] z-0 w-[290px] h-[290px] rotate-[-75deg]
        
        "
      />
      
      <img
        src="/img/flower.png"
        alt=""
        className="pointer-events-none select-none absolute 
        top-[-6.8rem] right-[-6.5rem] z-0 w-[250px] h-[250px] rotate-[180deg]
        
        "
      />
      
      <img
        src="/img/flower.png"
        alt=""
        className="pointer-events-none select-none absolute 
        bottom-[-4.5rem] left-[-3.8rem] z-0 w-[200px] h-[200px] rotate-[-75deg]
        "
      />
      
      <img
        src="/img/flower.png"
        alt=""
        className="pointer-events-none select-none absolute 
        bottom-[-4rem] right-[-4.7rem] z-0 w-[200px] h-[200px] rotate-[180deg]"
      />

      <div className="mx-[43.68px] pt-16 text-center z-10">
        {/* Section Title */}
        <h2 
        style={{ fontFamily: 'Bruney' }}
        className="text-[2.5rem] mb-6 text-[#660000]">
          contacts
        </h2>
        
        {/* CTA Text */}
        <p 
        style={{ fontFamily: 'CormorantR' }}
        className="text-[14.43px] text-[#660000] text-justify mb-4">
          Если вы хотите особенную свечу или подарок, 
          напишите в любой удобный мессенджер. 
          Помогу выбрать концепцию, аромат и оформление, 
          чтобы результат полностью отражал ваши пожелания.
        </p>
        
        {/* Social Links Grid */}
        <div className="mb-4">
          <h3 
          style={{ fontFamily: 'CormorantR' }}
          className="text-[14.43px] mb-4 text-[#660000] flex items-center justify-center gap-2">
            Для заказа:
          </h3>
          <div 
          style={{ fontFamily: 'CormorantR' }}
          className="flex justify-center gap-4">
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
        
        {/* Blog Links */}
        <div className="">
          <h3 
          style={{ fontFamily: 'CormorantR' }}
          className="text-[14.43px]  mb-4 text-[#660000] flex items-center justify-center gap-2">
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
                <a href={link.href} target="_blank" rel="noopener noreferrer " className='h-[26px]'>
                  {link.name}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
