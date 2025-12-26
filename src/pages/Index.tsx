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
        <div className='h-[250px] md:h-[300px] lg:h-[350px]'></div>
        <AboutSection />
        <PortfolioSection />
        <ProcessSection />
        <DeliverySection/>
        <ContactsSection />
        
        {/* Footer */}
        <footer className="bg-[#660000] px-4 md:px-8 py-2 md:py-4">
          <div
            style={{ fontFamily: "CormorantL" }}
            className="flex justify-center items-center gap-8 md:gap-16 lg:gap-24 text-[10px] md:text-sm lg:text-base text-[#FFF6DB]"
          >
            <a
              href="https://t.me/weksirtu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center hover:underline transition-opacity hover:opacity-80"
            > 
              Design by Ksenia
            </a>

            <a
              href="https://pel1x1.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center hover:underline transition-opacity hover:opacity-80"
            >
              Made by K&amp;K
            </a>
          </div>
        </footer>
      </div>
      
      {/* Subtle Vignette Overlay */}
      <div className="fixed inset-0 pointer-events-none z-5 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(0_100%_20%/0.5)_100%)]" />
    </main>
  );
};

export default Index;
