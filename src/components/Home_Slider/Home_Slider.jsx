import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { bg2, bg3, chana_bg, logo2, marcha_bg, tector, wheatbg } from '../Images/Images';

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
      <Slider {...sliderSettings} className="relative w-full md:h-[820px] h-[750px]">
        <div>
          <img src={wheatbg} className='w-[100%] md:h-[820px] h-[750px]' alt="Background" />
        </div>
        <div>
          <img src={bg2} className='w-[100%] md:h-[820px] h-[750px]' alt="Background" />
        </div>
        <div>
          <img src={bg3} className='w-[100%] md:h-[820px] h-[750px]' alt="Background" />
        </div>
        <div>
          <img src={marcha_bg} className='w-[100%] md:h-[820px] h-[750px]' alt="Background" />
        </div>
      </Slider>

      <div className="absolute inset-0 flex flex-col justify-center text-white bg-[#101010b3] bg-opacity-70 px-[20px]">
        <div className="lg:max-w-[1440px] m-auto md:mt-[100px] md:mb-[150px]">
          <motion.div
            ref={headingRef}
            className="flex  gap-[25px] sm:gap-0 flex-col  items-center text-center relative md:z-[99999999999]"
            variants={fadeInVariants}
            initial="hidden"
            animate={headingInView ? 'visible' : 'hidden'}
          >
            <motion.div
              className="text-container"
              variants={bounceInVariants}
            >
              
            </motion.div>
            <div className='bg-gold slider_logo mt-[45px]'>
              <img src={logo2} className='md:w-[338px] w-[224px]' alt="Logo" />
            </div>

            <div className='sm:mt-[50px]'>
              <h1 className='sm:text-[60px] font-ubuntu font-bold text-[34px]'>FARMING COMPANY</h1>
              <p className='sm:text-[23px] font-poppins max-w-[1300px] mt-[15px] text-[20px]'>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
            </div>
            
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home_Slider;
