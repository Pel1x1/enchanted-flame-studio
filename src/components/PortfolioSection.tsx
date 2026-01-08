import { useIsMobile } from "@/hooks/use-mobile";
import CircularGallery, { type CircularGalleryHandle } from "./ui/CircularGallery.tsx";
import { useRef } from "react";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

const PortfolioDesktop = () => {
const galleryRef1 = useRef<CircularGalleryHandle | null>(null);
const galleryRef2 = useRef<CircularGalleryHandle | null>(null);
const galleryRef3 = useRef<CircularGalleryHandle | null>(null);

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

      <div className="h-[650px] relative mt-[-80px]">
        <div className="pointer-events-none absolute top-[-1.5rem] left-0 right-0 flex justify-center z-0">
          <img src="/img/line.png" alt="" className="w-full object-contain" />
        </div>

        <CircularGallery
          ref={galleryRef1}
          items={[
            { image: `/img/candles/Frame 45.png`, text: "" },
            { image: `/img/candles/Frame 46.png`, text: "" },
            { image: `/img/candles/Frame 47.png`, text: "" },
            { image: `/img/candles/Frame 48.png`, text: "" },
            { image: `/img/candles/Frame 49.png`, text: "" },
            { image: `/img/candles/Frame 50.png`, text: "" },
          ]}
          bend={-3}
          textColor="#660000"
          borderRadius={0}
          scrollEase={0.1}
          font="30px CormorantL "
        />

        {/* кнопки где хочешь */}
        <div className="absolute left-0 right-0 bottom-16 flex justify-center gap-2 z-10">
          <button type="button" className="border-2 py-2 px-10 rounded-full border-[#FFF6DB]" onClick={() => galleryRef1.current?.prev()}>
            <HiArrowLongLeft />
          </button>
          <button type="button" className="border-2 py-2 px-10 rounded-full border-[#FFF6DB]" onClick={() => galleryRef1.current?.next()}>
            <HiArrowLongRight />
          </button>
        </div>
      </div>

      {/* 2 */}
      <h3
        style={{ fontFamily: "CormorantM" }}
        className="text-[1.2rem] md:text-2xl lg:text-3xl text-center text-[#FFF6DB] px-6 mt-10"
      >
        Аромасаше
      </h3>

      <div className="h-[650px] relative mt-[-80px]">
        <div className="pointer-events-none absolute top-[-1.5rem] left-0 right-0 flex justify-center z-0">
          <img src="/img/line.png" alt="" className="w-full object-contain" />
        </div>

        <CircularGallery
          ref={galleryRef2}
          items={[
            { image: `/img/candles/Frame 51.png`, text: "" },
            { image: `/img/candles/Frame 52.png`, text: "" },
            { image: `/img/candles/Frame 53.png`, text: "" },
          ]}
          bend={-3}
          textColor="#660000"
          borderRadius={0}
          scrollEase={0.1}
          font="30px CormorantL "
        />

        {/* кнопки где хочешь */}
        <div className="absolute left-0 right-0 bottom-16 flex justify-center gap-2 z-10">
          
          <button type="button" className="border-2 py-2 px-10 rounded-full border-[#FFF6DB]" onClick={() => galleryRef2.current?.prev()}>
            <HiArrowLongLeft />
          </button>
          <button type="button" className="border-2 py-2 px-10 rounded-full border-[#FFF6DB]" onClick={() => galleryRef2.current?.next()}>
            <HiArrowLongRight />
          </button>
        </div>
        <p
          style={{ fontFamily: "CormorantL" }}
          className="-mt-8 text-[14.43px] md:text-lg lg:text-xl text-[#FFF6DB] leading-relaxed text-justify md:text-center max-w-6xl mx-auto"
        >
          Ароматические саше для шкафа, комода или рабочего стола — продолжение эстетики свечей LUMĒRE.<br/> Наполнят ваше
          пространство уютом и изысканным ароматом.
        </p>

      </div>
      {/* 3 */}
      <h3
        style={{ fontFamily: "CormorantM" }}
        className="text-[1.2rem] md:text-2xl lg:text-3xl text-center text-[#FFF6DB] px-6 mt-[5rem] md:mt-[6rem]"
      >
        Подарочные наборы
      </h3>

        <div className="h-[650px] relative mt-[-80px]">
        <div className="pointer-events-none absolute top-[-1.5rem] left-0 right-0 flex justify-center z-0">
          <img src="/img/line.png" alt="" className="w-full object-contain" />
        </div>

        <CircularGallery
          ref={galleryRef3}
          items={[
            { image: `/img/candles/Frame 54.png`, text: "" },
            { image: `/img/candles/Frame 55.png`, text: "" },
            { image: `/img/candles/Frame 56.png`, text: "" },
            { image: `/img/candles/Frame 57.png`, text: "" },
            { image: `/img/candles/Frame 58.png`, text: "" },
          ]}
          bend={-3}
          textColor="#660000"
          borderRadius={0}
          scrollEase={0.1}
          font="30px CormorantL "
        />

        <div className="absolute left-0 right-0 bottom-16 flex justify-center gap-2 z-10">
          
          <button type="button" className="border-2 py-2 px-10 rounded-full border-[#FFF6DB]" onClick={() => galleryRef3.current?.prev()}>
            <HiArrowLongLeft />
          </button>
          <button type="button" className="border-2 py-2 px-10 rounded-full border-[#FFF6DB]" onClick={() => galleryRef3.current?.next()}>
            <HiArrowLongRight />
          </button>
        </div>

        <p
          style={{ fontFamily: "CormorantL" }}
          className="-mt-8 text-[14.43px] md:text-lg lg:text-xl text-[#FFF6DB] leading-relaxed text-justify md:text-center max-w-6xl mx-auto"
        >
          Готовые подарки для особых случаев — день рождения, Новый год, юбилей. Красивая упаковка и продуманная
          композиция.
        </p>
        </div>
    </section>
  );
};

const PortfolioMobile = () => {
  const galleryRef4 = useRef<CircularGalleryHandle | null>(null);
  const galleryRef5 = useRef<CircularGalleryHandle | null>(null);
  const galleryRef6 = useRef<CircularGalleryHandle | null>(null);

  return (
    <section id="portfolio" className="relative py-[5rem] mb-[1.5rem]">
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
          ref={galleryRef4}
            items={[
            { image: `/img/candles/Frame 45.png`, text: "" },
            { image: `/img/candles/Frame 46.png`, text: "" },
            { image: `/img/candles/Frame 47.png`, text: "" },
            { image: `/img/candles/Frame 48.png`, text: "" },
            { image: `/img/candles/Frame 49.png`, text: "" }, 
            { image: `/img/candles/Frame 50.png`, text: "" },
          ]}
            bend={-2}
            textColor="#660000"
            borderRadius={0}
            scrollEase={0.1}
            font="22px CormorantL"
          />
          <div className="absolute left-0 right-0 -mt-16 flex justify-center gap-2 z-10">
            <button type="button" className="border-[1px] py-[0px] px-6 rounded-full border-[#FFF6DB]" onClick={() => galleryRef4.current?.prev()}>
              <HiArrowLongLeft />
            </button>
            <button type="button" className="border-[1px] py-[0px] px-6 rounded-full border-[#FFF6DB]" onClick={() => galleryRef4.current?.next()}>
              <HiArrowLongRight />
            </button>
          </div>
        </div>

      <h3 style={{ fontFamily: "CormorantM" }} className="text-[1.1rem] text-center text-[#FFF6DB] px-5 ">
        Аромасаше
      </h3>

      <div className="h-[400px] mt-[-4rem]">
          <div className="pointer-events-none absolute mt-10 left-0 right-0 flex justify-center z-0">
            <img src="/img/line.png" alt="" className="w-full max-w-[360px] object-contain" />
          </div>
          <CircularGallery
          ref={galleryRef5}
            items={[
            { image: `/img/candles/Frame 51.png`, text: "" },
            { image: `/img/candles/Frame 52.png`, text: "" },
            { image: `/img/candles/Frame 53.png`, text: "" },
          ]}
            bend={-2}
            textColor="#660000"
            borderRadius={0}
            scrollEase={0.2}
            font="22px CormorantL"
          />
        <div className="absolute left-0 right-0 -mt-16 flex justify-center gap-2 z-10">
            <button type="button" className="border-[1px] py-[0px] px-6 rounded-full border-[#FFF6DB]" onClick={() => galleryRef5.current?.prev()}>
              <HiArrowLongLeft />
            </button>
            <button type="button" className="border-[1px] py-[0px] px-6 rounded-full border-[#FFF6DB]" onClick={() => galleryRef5.current?.next()}>
              <HiArrowLongRight />
            </button>
          </div>
        <p
          style={{ fontFamily: "CormorantL" }}
          className="text-[14.43px] text-[#FFF6DB] px-11 mt-[-2rem] text-justify leading-5 "
        >
          Ароматические саше для шкафа, комода или рабочего стола — продолжение эстетики свечей LUMĒRE. Наполнят ваше
          пространство уютом и изысканным ароматом.
        </p>
      </div>

      <h3 style={{ fontFamily: "CormorantM" }} className="text-[1.1rem] text-center text-[#FFF6DB] px-5 mt-[5rem]">
        Подарочные наборы
      </h3>

       <div className="h-[400px] mt-[-4rem]">
          <div className="pointer-events-none absolute mt-10 left-0 right-0 flex justify-center z-0">
            <img src="/img/line.png" alt="" className="w-full max-w-[360px] object-contain" />
          </div>
          <CircularGallery
          ref={galleryRef6}
            items={[
            { image: `/img/candles/Frame 54.png`, text: "" },
            { image: `/img/candles/Frame 55.png`, text: "" },
            { image: `/img/candles/Frame 56.png`, text: "" },
            { image: `/img/candles/Frame 57.png`, text: "" },
            { image: `/img/candles/Frame 58.png`, text: "" },
          ]}
            bend={-2}
            textColor="#660000"
            borderRadius={0}
            scrollEase={0.5}
            font="22px CormorantL"
          />
        <div className="absolute left-0 right-0 -mt-16 flex justify-center gap-2 z-10">
          <button type="button" className="border-[1px] py-[0px] px-6 rounded-full border-[#FFF6DB]" onClick={() => galleryRef6.current?.prev()}>
            <HiArrowLongLeft />
          </button>
          <button type="button" className="border-[1px] py-[0px] px-6 rounded-full border-[#FFF6DB]" onClick={() => galleryRef6.current?.next()}>
            <HiArrowLongRight />
          </button>
        </div>
        <p
          style={{ fontFamily: "CormorantL" }}
          className="text-[14.43px] text-[#FFF6DB] px-11 mt-[-2rem] text-justify leading-5 "
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
