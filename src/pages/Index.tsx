import AnimatedBackground from '@/components/AnimatedBackground';
import FloatingLeaves from '@/components/FloatingLeaves';
import Logo from '@/components/Logo';
import SocialLinks from '@/components/SocialLinks';

const Index = () => {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* SEO */}
      <title>LUMĒRE — Свечи сделанные с любовью | by Ksenia</title>
      <meta name="description" content="LUMĒRE — уникальные свечи ручной работы. Создаём атмосферу уюта и тепла в вашем доме. Свечи сделанные с любовью от Ксении." />
      
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Floating Decorative Leaves */}
      <FloatingLeaves />
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-12 md:gap-16 px-6 py-12">
        {/* Logo */}
        <Logo />
        
        {/* Social Links */}
        <SocialLinks />
        
        {/* Author Signature */}
        <p className="mt-8 text-sm md:text-base tracking-[0.5em] text-muted-foreground/70 uppercase font-light">
          by Ksenia
        </p>
      </div>
      
      {/* Subtle Vignette Overlay */}
      <div className="fixed inset-0 pointer-events-none z-5 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(0_52%_18%/0.4)_100%)]" />
    </main>
  );
};

export default Index;