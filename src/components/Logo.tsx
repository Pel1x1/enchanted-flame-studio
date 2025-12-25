const Logo = () => {
  return (
    <div className="relative flex flex-col items-center text-center animate-shimmer min-h-full ">
      <h1
        style={{ fontFamily: 'Bruney' }}
        className="text-[3.5rem] sm:text-6xl md:text-7xl lg:text-[10.5rem] 
        font-light tracking-[0.05em] text-[#660000] text-glow
        mt-[5rem]
        "
      >
        Lum<span className="relative">e</span>re
      </h1>

      <p 
      style={{fontFamily: "CormorantL", }}
      className="mt-8 max-w-2xl mx-auto text-center text-[1.25rem] md:text-xl leading-relaxed font-light tracking-wide text-[#660000]">
        Cвечи ручной работы из<br /> гипса и кокосового воска.<br />
        Каждая свеча как маленькое<br /> произведение искусства.
      </p>

      {/* Фиксируем подпись у низа блока Logo */}
      <p 
      style={{ fontFamily: 'Bruney' }}
      className="mt-[5rem] text-[10px] md:text-base tracking-[0.1rem] text-muted-foreground/70 font-light text-[#660000]">
        by ksenia
      </p>
    </div>
  );
};


export default Logo;
