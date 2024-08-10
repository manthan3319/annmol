import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { chana_bg, logo2, marcha_bg, tector } from '../Images/Images';

const Home_Slider = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const bounceInVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } },
  };

  return (
    <div className="relative">
      {/* Slider */}
      <Slider {...sliderSettings} className="relative w-full md:h-[680px] h-[750px]">
        <div>
          <img src={marcha_bg} className='w-[100%] md:h-[680px] h-[750px]' alt="Background" />
        </div>
        <div>
          <img src={chana_bg} className='w-[100%] md:h-[680px] h-[750px]' alt="Background" />
        </div>
        <div>
          <img src={marcha_bg} className='w-[100%] md:h-[680px] h-[750px]' alt="Background" />
        </div>
        <div>
          <img src={marcha_bg} className='w-[100%] md:h-[680px] h-[750px]' alt="Background" />
        </div>
      </Slider>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center text-white bg-green bg-opacity-70 px-[20px]">
        <div className="lg:max-w-[1440px] m-auto md:mt-[100px] md:mb-[150px]">
          <motion.div
            ref={headingRef}
            className="flex flex-col-reverse gap-[25px] sm:gap-0 md:flex-row items-center text-center bg-[#ffffff36] section1 section_slider_box relative md:z-[99999999999]"
            variants={fadeInVariants}
            initial="hidden"
            animate={headingInView ? 'visible' : 'hidden'}
          >
            <motion.div
              className="text-container"
              variants={bounceInVariants}
            >
              <h1 className='lg:text-[80px] text-[54px] md:text-black text-white font-ubuntu font-bold max-w-[520px]'>
                <span className='welcome'>Welcome To</span> <span className='welcome xl:text-[88px] md:text-black sm:text-white'>ANNMOL</span>
              </h1>
            </motion.div>
            <div className='bg-gold slider_logo'>
              <img src={logo2} className='md:w-[338px] w-[224px]' alt="Logo" />
            </div>
            <div>
              <img src={tector} alt='tector' className='absolute md:block hidden md:right-[120px] right-0 bottom-0 z-[-1] opacity-[0.3] w-[600px] top-[5px]' />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home_Slider;
