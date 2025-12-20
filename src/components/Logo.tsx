const Logo = () => {
  return (
    <div className="text-center animate-shimmer">
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[0.3em] text-primary text-glow">
        LUM<span className="relative">Ē<span className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-px bg-primary/60" /></span>RE
      </h1>
      <p className="mt-4 md:mt-6 text-lg sm:text-xl md:text-2xl tracking-[0.4em] text-muted-foreground font-light uppercase">
        Свечи сделанные с любовью
      </p>
    </div>
  );
};

export default Logo;