import CircularGallery from "./ui/CircularGallery.tsx";
import { useIsMobile } from "@/hooks/use-mobile";

const PortfolioDesktop = () => {
  return (
    <section id="portfolio" className="relative py-24 md:py-32 lg:py-40">
      <h2
        style={{ fontFamily: "Bruney" }}
        className="text-[2.25rem] md:text-5xl lg:text-6xl text-center mb-8 md:mb-12 text-[#FFF6DB] px-6"
      >
        PoRtfoLio
      </h2>

      {/* 1 */}
      <h3
        style={{ fontFamily: "CormorantM" }}
        className="text-[1.2rem] md:text-2xl lg:text-3xl text-center text-[#FFF6DB] px-6"
      >
        Свечи в гипсовых формах
      </h3>

      <div className="h-[1050px] relative mt-[-140px] md:mt-[-160px]">
        <div className="pointer-events-none absolute top-[7rem] md:top-[8rem] left-0 right-0 flex justify-center z-0">
          <img src="/img/line.png" alt="" className="w-full object-contain" />
        </div>

        <CircularGallery
          items={[
            { image: `/img/Frame 45.png`, text: "" },
            { image: `/img/group.png`, text: "" },
            { image: `/img/hourse.png`, text: "" },
            { image: `/img/hourse2.png`, text: "" },
            { image: `/img/small.png`, text: "" },
          ]}
          bend={-2}
          textColor="#660000"
          borderRadius={0}
          scrollEase={0.5}
          font="30px CormorantL "
        />
      </div>

      {/* 2 */}
      <h3
        style={{ fontFamily: "CormorantM" }}
        className="text-[1.2rem] md:text-2xl lg:text-3xl text-center text-[#FFF6DB] px-6"
      >
        Аромасаше
      </h3>

      <div className="h-[1050px] relative mt-[0px] md:mt-[-160px]">
          <div className="pointer-events-none absolute top-[7rem] md:top-[8rem] left-0 right-0 flex justify-center z-0">
            <img src="/img/line.png" alt="" className="w-full object-contain" />
          </div>

          <CircularGallery
            items={[
              { image: `/img/hourse3.png`, text: "" },
              { image: `/img/sashe.png`, text: "" },
              { image: `/img/sashe2.png`, text: "" },
            ]}
            bend={-2}
            textColor="#660000"
            borderRadius={0}
            scrollEase={0.5}
            font="30px CormorantL"
          />
        </div>

        <p
          style={{ fontFamily: "CormorantL" }}
          className="text-[14.43px] md:text-lg lg:text-xl text-[#FFF6DB] px-11 md:px-16 lg:px-24 mt-[-10rem] md:mt-[-8rem] leading-relaxed text-justify md:text-center max-w-4xl mx-auto"
        >
          Ароматические саше для шкафа, комода или рабочего стола — продолжение эстетики свечей LUMĒRE. Наполнят ваше
          пространство уютом и изысканным ароматом.
        </p>
      {/* 3 */}
      <h3
        style={{ fontFamily: "CormorantM" }}
        className="text-[1.2rem] md:text-2xl lg:text-3xl text-center text-[#FFF6DB] px-6 mt-[5rem] md:mt-[6rem]"
      >
        Подарочные наборы
      </h3>

        <div className="h-[1050px] relative mt-[-140px] md:mt-[-160px]">
          <div className="pointer-events-none absolute top-[7rem] md:top-[8rem] left-0 right-0 flex justify-center z-0">
            <img src="/img/line.png" alt="" className="w-full object-contain" />
          </div>

          <CircularGallery
            items={[
              { image: `/img/combo.png`, text: "" },
              { image: `/img/combo2.png`, text: "" },
              { image: `/img/combo3.png`, text: "" },
            ]}
            bend={-2}
            textColor="#660000"
            borderRadius={0}
            scrollEase={0.5}
            font="30px CormorantL"
          />
        </div>

        <p
          style={{ fontFamily: "CormorantL" }}
          className="text-[14.43px] md:text-lg lg:text-xl text-[#FFF6DB] px-11 md:px-16 lg:px-24 mt-[-10rem] md:mt-[-8rem] leading-relaxed text-justify md:text-center max-w-4xl mx-auto"
        >
          Готовые подарки для особых случаев — день рождения, Новый год, юбилей. Красивая упаковка и продуманная
          композиция.
        </p>
    </section>
  );
};

const PortfolioMobile = () => {
  return (
    <section id="portfolio" className="relative py-[5rem] mb-[12.5rem]">
      <h2 style={{ fontFamily: "Bruney" }} className="text-[2rem] text-center mb-6 text-[#FFF6DB] px-5">
        PoRtfoLio
      </h2>

      {/* Мобильную версию можно сделать проще: меньше высоты, меньше отрицательных отступов */}
      <h3 style={{ fontFamily: "CormorantM" }} className="text-[1.1rem] text-center text-[#FFF6DB] px-5">
        Свечи в гипсовых формах
      </h3>

        <div className="h-[400px] mt-[-3rem]">
          <div className="pointer-events-none absolute mt-10 left-0 right-0 flex justify-center z-0">
            <img src="/img/line.png" alt="" className="w-full max-w-[360px] object-contain" />
          </div>
          <CircularGallery
            items={[
              { image: `/img/Frame 45 (1).png`, text: "" },
            ]}
            bend={-2}
            textColor="#660000"
            borderRadius={0}
            scrollEase={0.5}
            font="22px CormorantL"
          />
        </div>

      <h3 style={{ fontFamily: "CormorantM" }} className="text-[1.1rem] text-center text-[#FFF6DB] px-5 ">
        Аромасаше
      </h3>

      <div className="h-[400px] mt-[-4rem]">
          <div className="pointer-events-none absolute mt-10 left-0 right-0 flex justify-center z-0">
            <img src="/img/line.png" alt="" className="w-full max-w-[360px] object-contain" />
          </div>
          <CircularGallery
            items={[
              { image: `/img/Frame 45 (1).png`, text: "" },
            ]}
            bend={-2}
            textColor="#660000"
            borderRadius={0}
            scrollEase={0.5}
            font="22px CormorantL"
          />

        <p
          style={{ fontFamily: "CormorantL" }}
          className="text-[14px] text-[#FFF6DB] px-6 mt-[-4rem] leading-relaxed text-center max-w-[26rem] mx-auto"
        >
          Ароматические саше для шкафа, комода или рабочего стола — продолжение эстетики свечей LUMĒRE. Наполнят ваше
          пространство уютом и изысканным ароматом.
        </p>
      </div>

      <h3 style={{ fontFamily: "CormorantM" }} className="text-[1.1rem] text-center text-[#FFF6DB] px-5 mt-14">
        Подарочные наборы
      </h3>

       <div className="h-[400px] mt-[-3rem]">
          <div className="pointer-events-none absolute mt-10 left-0 right-0 flex justify-center z-0">
            <img src="/img/line.png" alt="" className="w-full max-w-[360px] object-contain" />
          </div>
          <CircularGallery
            items={[
              { image: `/img/Frame 45 (1).png`, text: "" },
            ]}
            bend={-2}
            textColor="#660000"
            borderRadius={0}
            scrollEase={0.5}
            font="22px CormorantL"
          />

        <p
          style={{ fontFamily: "CormorantL" }}
          className="text-[14px] text-[#FFF6DB] px-6 mt-[-4rem] leading-relaxed text-center max-w-[26rem] mx-auto"
        >
          Готовые подарки для особых случаев — день рождения, Новый год, юбилей. Красивая упаковка и продуманная
          композиция.
        </p>
      </div>
    </section>
  );
};

const PortfolioSection = () => {
  const isMobile = useIsMobile();

  return isMobile ? <PortfolioMobile /> : <PortfolioDesktop />;
};

export default PortfolioSection;
