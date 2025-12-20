import { Instagram, Send, MessageCircle } from 'lucide-react';

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: <Instagram size={28} strokeWidth={1.5} />,
    href: 'https://instagram.com/',
    label: 'Instagram',
  },
  {
    icon: <Send size={28} strokeWidth={1.5} />,
    href: 'https://t.me/',
    label: 'Telegram',
  },
  {
    icon: <MessageCircle size={28} strokeWidth={1.5} />,
    href: 'https://wa.me/',
    label: 'WhatsApp',
  },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-8 md:gap-10">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="social-link text-primary/80 hover:text-primary p-3 rounded-full border border-primary/20 hover:border-primary/50 backdrop-blur-sm transition-all duration-300"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;