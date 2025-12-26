import AnimatedBackground from '@/components/AnimatedBackground';
import FloatingLeaves from '@/components/FloatingLeaves';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import ProcessSection from '@/components/ProcessSection';
import ContactsSection from '@/components/ContactsSection';
import DeliverySection from '@/components/DeliverySection';

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* SEO */}
      <title>LUMĒRE — Свечи ручной работы из гипса и кокосового воска | by Ksenia</title>
      <meta name="description" content="LUMĒRE — уникальные свечи ручной работы из гипса и кокосового воска. Создаём атмосферу уюта и тепла в вашем доме. Ограниченные партии, индивидуальные заказы." />
      
      {/* Fixed Background Elements */}
      <div className="fixed inset-0 z-0">
        <AnimatedBackground />
        <FloatingLeaves />
      </div>
      
      {/* Navigation */}
      <Navigation />
      
      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <div className='h-[250px]'></div>
        <AboutSection />
        <PortfolioSection />
        <ProcessSection />
        <DeliverySection/>
        <ContactsSection />
        
        {/* Footer */}
        <footer className="py-12 px-6 text-center border-t border-border/30">
          <p className="text-sm text-muted-foreground">
            © 2024 LUMĒRE by Ksenia. Все права защищены.
          </p>
        </footer>
      </div>
      
      {/* Subtle Vignette Overlay */}
      <div className="fixed inset-0 pointer-events-none z-5 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(0_100%_20%/0.5)_100%)]" />
    </main>
  );
};

export default Index;
