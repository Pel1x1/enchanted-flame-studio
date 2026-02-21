const Logo = () => {
  return (
    <div className="relative flex flex-col items-center text-center animate-shimmer">
      <h1
        style={{ fontFamily: 'Bruney' }}
        className="text-6xl sm:text-7xl md:text-[6rem] lg:text-[7.5rem] 
        font-light tracking-[0.05em] text-[#660000] text-glow"
      >
        Lum<span className="relative">e</span>re
      </h1>
      <div className="pr-10 pl-10">
      <p 
        style={{ fontFamily: "CormorantL" }}
        className="mt-6 max-w-2xl mx-auto px-4 text-[15px] sm:text-base md:text-lg leading-relaxed font-light tracking-wide text-[#660000]"
      >
        Cвечи ручной работы из гипса и кокосового воска.<br />
        Каждая свеча как маленькое произведение искусства.
      </p>

      <p 
        style={{ fontFamily: 'Bruney' }}
        className="mt-8 md:mt-10 text-[12px] md:text-sm lg:text-base tracking-[0.1rem] font-light text-[#660000]"
      >
        by ksenia
      </p>
      </div>
    </div>
  );
};

export default Logo;
