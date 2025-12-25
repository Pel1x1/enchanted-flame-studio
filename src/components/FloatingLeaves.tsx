import leaf1 from '/img/leaf-1.png';
import leaf2 from '/img/leaf-2.png';
import leaf3 from '/img/leaf-3.png';

const FloatingLeaves = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top Left Leaves */}
      <img
        src={leaf2}
        alt=""
        className="absolute -top-10 -left-16 w-64 md:w-80 opacity-20 animate-float"
      />
      <img
        src={leaf1}
        alt=""
        className="absolute top-20 -left-8 w-48 md:w-64 opacity-15 animate-float-delayed rotate-45"
      />
      
      {/* Top Right Leaves */}
      <img
        src={leaf3}
        alt=""
        className="absolute -top-8 -right-16 w-64 md:w-80 opacity-20 animate-float-slow -scale-x-100"
      />
      <img
        src={leaf1}
        alt=""
        className="absolute top-32 -right-12 w-52 md:w-72 opacity-15 animate-float -rotate-12"
      />
      
      {/* Bottom Left Leaves */}
      <img
        src={leaf3}
        alt=""
        className="absolute -bottom-12 -left-20 w-72 md:w-96 opacity-20 animate-float-delayed rotate-180"
      />
      <img
        src={leaf2}
        alt=""
        className="absolute bottom-24 -left-8 w-48 md:w-64 opacity-15 animate-float-slow rotate-90"
      />
      
      {/* Bottom Right Leaves */}
      <img
        src={leaf1}
        alt=""
        className="absolute -bottom-16 -right-16 w-64 md:w-80 opacity-20 animate-float"
      />
      <img
        src={leaf3}
        alt=""
        className="absolute bottom-20 -right-10 w-56 md:w-72 opacity-15 animate-float-delayed -rotate-45 -scale-x-100"
      />

      {/* Center Accent Leaves */}
      <img
        src={leaf2}
        alt=""
        className="absolute top-1/3 -left-24 w-40 md:w-56 opacity-10 animate-float-slow"
      />
      <img
        src={leaf2}
        alt=""
        className="absolute top-1/3 -right-24 w-40 md:w-56 opacity-10 animate-float -scale-x-100"
      />
    </div>
  );
};

export default FloatingLeaves;