import { ChevronDown } from 'lucide-react';
import Logo from './Logo';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12">
      {/* Logo */}
      <Logo />
      
      {/* Hero Text */}
      <p className="mt-8 max-w-2xl text-center text-lg md:text-xl text-foreground/80 leading-relaxed font-light tracking-wide">
        LUMĒRE — свечи ручной работы из гипса и кокосового воска. 
        <br className="hidden md:block" />
        Каждая свеча как маленькое произведение искусства.
      </p>
      
      {/* Author Signature */}
      <p className="mt-6 text-sm md:text-base tracking-[0.5em] text-muted-foreground/70 uppercase font-light">
        by Ksenia
      </p>
      
      {/* Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-foreground/50 hover:text-foreground transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
