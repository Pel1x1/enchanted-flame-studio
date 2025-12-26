import CircularGallery from './ui/CircularGallery';

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="relative py-24 md:py-32 lg:py-40">
      <h2 
        style={{ fontFamily: 'Bruney' }}
        className="text-[2.25rem] md:text-5xl lg:text-6xl text-center mb-8 md:mb-12 text-[#FFF6DB] px-6"
      >
        PoRtfoLio
      </h2>

      <h3 
        style={{ fontFamily: 'CormorantM' }}
        className="text-[1.2rem] md:text-2xl lg:text-3xl text-center text-[#FFF6DB] px-6"
      >
        Свечи в гипсовых формах
      </h3>

      <div className='h-[500px] md:h-[600px] lg:h-[700px] mt-[-140px] md:mt-[-160px]'>
        <div style={{ height: '600px', position: 'relative' }} className="md:h-[700px] lg:h-[800px]">
          <div className="pointer-events-none absolute top-[7rem] md:top-[8rem] left-0 right-0 flex justify-center z-0">
            <img
              src="/img/line.png"
              alt=""
              className="w-full max-w-[1200px] object-contain"
            />
          </div>
          <CircularGallery
            items={[
              { image: `/img/big.png`, text: '' },
              { image: `/img/group.png`, text: '' },
              { image: `/img/hourse.png`, text: '' },
              { image: `/img/hourse2.png`, text: '' },
              { image: `/img/small.png`, text: '' },
            ]}
            bend={-1} 
            textColor="#660000" 
            borderRadius={0} 
            scrollEase={0.5} 
            font='30px CormorantL'
          />
        </div>
      </div>

      <h3 
        style={{ fontFamily: 'CormorantM' }}
        className="text-[1.2rem] md:text-2xl lg:text-3xl text-center text-[#FFF6DB] px-6"
      >
        Аромасаше
      </h3>

      <div className='h-[500px] md:h-[600px] lg:h-[700px] mt-[-140px] md:mt-[-160px]'>
        <div style={{ height: '600px', position: 'relative' }} className="md:h-[700px] lg:h-[800px]">
          <div className="pointer-events-none absolute top-[7rem] md:top-[8rem] left-0 right-0 flex justify-center z-0">
            <img
              src="/img/line.png"
              alt=""
              className="w-full max-w-[1200px] object-contain"
            />
          </div>
          <CircularGallery
            items={[
              { image: `/img/hourse3.png`, text: '' },
              { image: `/img/sashe.png`, text: '' },
              { image: `/img/sashe2.png`, text: '' },
            ]}
            bend={-1} 
            textColor="#660000" 
            borderRadius={0} 
            scrollEase={0.5} 
            font='30px CormorantL'
          />
        </div>
        <p 
          style={{ fontFamily: 'CormorantL' }}
          className="text-[14.43px] md:text-lg lg:text-xl text-[#FFF6DB] px-11 md:px-16 lg:px-24 mt-[-10rem] md:mt-[-8rem] leading-relaxed text-justify md:text-center max-w-4xl mx-auto"
        >
          Ароматические саше для шкафа, комода или рабочего стола — продолжение эстетики свечей LUMĒRE. Наполнят ваше пространство уютом и изысканным ароматом.
        </p>
      </div>

      <h3 
        style={{ fontFamily: 'CormorantM' }}
        className="text-[1.2rem] md:text-2xl lg:text-3xl text-center text-[#FFF6DB] px-6 mt-[5rem] md:mt-[6rem]"
      >
        Подарочные наборы
      </h3>

      <div className='h-[500px] md:h-[600px] lg:h-[700px] mt-[-140px] md:mt-[-160px]'>
        <div style={{ height: '600px', position: 'relative' }} className="md:h-[700px] lg:h-[800px]">
          <div className="pointer-events-none absolute top-[7rem] md:top-[8rem] left-0 right-0 flex justify-center z-0">
            <img
              src="/img/line.png"
              alt=""
              className="w-full max-w-[1200px] object-contain"
            />
          </div>
          <CircularGallery
            items={[
              { image: `/img/combo.png`, text: '' },
              { image: `/img/combo2.png`, text: '' },
              { image: `/img/combo3.png`, text: '' },
            ]}
            bend={-1} 
            textColor="#660000" 
            borderRadius={0} 
            scrollEase={0.5} 
            font='30px CormorantL'
          />
        </div>
        <p 
          style={{ fontFamily: 'CormorantL' }}
          className="text-[14.43px] md:text-lg lg:text-xl text-[#FFF6DB] px-11 md:px-16 lg:px-24 mt-[-10rem] md:mt-[-8rem] leading-relaxed text-justify md:text-center max-w-4xl mx-auto"
        >
          Готовые подарки для особых случаев — день рождения, Новый год, юбилей. Красивая упаковка и продуманная композиция.
        </p>
      </div>
    </section>
  );
};

export default PortfolioSection;
