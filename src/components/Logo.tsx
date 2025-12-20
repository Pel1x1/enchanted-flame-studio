const Logo = () => {
  return (
    <div className="text-center animate-shimmer">
      <h1
      style={{fontFamily: "Bruney"}}
      className="text-6xl sm:text-6xl md:text-7xl lg:text-[10.5rem] font-light tracking-[0.05em] text-primary text-glow"
      >
        Lum<span className="relative">e</span>re
      </h1>
      <p 
      style={{fontFamily: "CormorantL"}}
      className="mt-0 text-[1rem] sm:text-xl md:text-2xl tracking-[0.4em] text-muted-foreground font-light">
        Свечи сделанные с любовью
      </p>
    </div>
  );
};

export default Logo;