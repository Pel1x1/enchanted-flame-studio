import { Instagram, Send, MessageCircle, Mail, BookOpen } from 'lucide-react';
import { Button } from './ui/button';

const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://instagram.com/',
    description: 'Фото работ и новинки',
  },
  {
    name: 'Telegram',
    icon: Send,
    href: 'https://t.me/',
    description: 'Быстрая связь',
  },
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    href: 'https://wa.me/',
    description: 'Для заказов',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:lumere@example.com',
    description: 'Для сотрудничества',
  },
];

const blogLinks = [
  {
    name: 'Дзен',
    href: 'https://dzen.ru/',
    description: 'Статьи и истории',
  },
  {
    name: 'VC.ru',
    href: 'https://vc.ru/',
    description: 'Бизнес-заметки',
  },
];

const ContactsSection = () => {
  return (
    <section id="contacts" className="relative py-24 px-6 ">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-[0.3em] uppercase text-foreground">
          Контакты
        </h2>
        
        {/* CTA Text */}
        <p className="text-lg md:text-xl text-foreground/90 mb-4 font-light leading-relaxed">
          Хотите заказать уникальную свечу или подарочный набор?
        </p>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Напишите мне в любой удобный мессенджер — обсудим детали, 
          выберем аромат и форму. Каждый заказ индивидуален.
        </p>
        
        {/* Social Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-card/50 border border-border/30 rounded-lg hover:bg-card/70 hover:border-accent/50 transition-all duration-300"
            >
              <link.icon className="w-8 h-8 mx-auto mb-3 text-foreground group-hover:text-accent transition-colors" />
              <p className="font-medium text-foreground mb-1">{link.name}</p>
              <p className="text-xs text-muted-foreground">{link.description}</p>
            </a>
          ))}
        </div>
        
        {/* Blog Links */}
        <div className="mb-12">
          <h3 className="text-xl font-light mb-6 tracking-[0.2em] text-foreground/80 flex items-center justify-center gap-2">
            <BookOpen className="w-5 h-5" />
            Мои блоги
          </h3>
          <div className="flex justify-center gap-4">
            {blogLinks.map((link) => (
              <Button
                key={link.name}
                variant="outline"
                asChild
                className="border-foreground/30 text-foreground hover:bg-foreground/10"
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              </Button>
            ))}
          </div>
        </div>
        
        {/* Final CTA */}
        <div className="p-8 bg-secondary/20 rounded-lg border border-border/30">
          <p className="text-2xl font-light text-foreground mb-4">
            Создадим что-то особенное вместе ✨
          </p>
          <Button
            size="lg"
            asChild
            className="bg-foreground text-background hover:bg-foreground/90"
          >
            <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
              Написать в Telegram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
