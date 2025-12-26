const Logo = () => {
  return (
    <div className="relative flex flex-col items-center text-center animate-shimmer min-h-full">
      <h1
        style={{ fontFamily: 'Bruney' }}
        className="text-[52px] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10.5rem] 
        font-light tracking-[0.05em] text-[#660000] text-glow
        mt-[5rem] md:mt-[6rem] lg:mt-[8rem]"
      >
        Lum<span className="relative">e</span>re
      </h1>

      <p 
        style={{fontFamily: "CormorantL"}}
        className="mt-6 md:mt-8 lg:mt-10 max-w-2xl mx-auto text-center text-[14.43px] md:text-lg lg:text-xl xl:text-2xl leading-relaxed font-light tracking-wide text-[#660000]"
      >
        <span className="md:hidden">
          Cвечи ручной работы из<br /> гипса и кокосового воска.<br />
          Каждая свеча как маленькое<br /> произведение искусства.
        </span>
        <span className="hidden md:block">
          Cвечи ручной работы из гипса и кокосового воска.<br />
          Каждая свеча как маленькое произведение искусства.
        </span>
      </p>

      <p 
        style={{ fontFamily: 'Bruney' }}
        className="mt-[5rem] md:mt-[6rem] lg:mt-[8rem] text-[10px] md:text-sm lg:text-base tracking-[0.1rem] text-muted-foreground/70 font-light text-[#660000]"
      >
        by ksenia
      </p>
    </div>
  );
};

export default Logo;
