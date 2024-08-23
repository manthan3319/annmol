import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { bg2, bg3, chana_bg, logo2, marcha_bg, tector, wheatbg } from '../Images/Images';
import { Link } from 'react-router-dom';

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
            className="flex gap-[25px] sm:gap-0 flex-col items-center text-center relative md:z-[99999999999]"
            variants={fadeInVariants}
            initial="hidden"
            animate={headingInView ? 'visible' : 'hidden'}
          >
            <motion.div
              className="text-container"
              variants={bounceInVariants}
            >

            </motion.div>
            {/* <div className='bg-gold slider_logo mt-[45px]'>
              <img src={logo2} className='md:w-[338px] w-[224px]' alt="Logo" />
            </div> */}

            <div className='sm:mt-[50px]'>
              <h1 className='sm:text-[70px] font-ubuntu font-bold text-[50px] text-[#ffd700]'>Sustainable Agriculture</h1>
              <p className='sm:text-[23px] font-poppins max-w-[1100px] mt-[15px] text-[20px]'>Committed to transforming farming practices, we provide innovative solutions and high-quality products that support sustainable growth and enhance agricultural productivity.</p>

              <div className='flex justify-center mt-[25px] gap-[20px] sm:flex-row flex-row'>
                <Link to="/product" className='text-[20px] bg-custome text-white px-[20px] py-[15px] rounded-[5px] hover:bg-[#e6c04d] transition duration-300 sm:min-w-[200px] w-[150px]'>Product</Link>
                <Link to="/contactus" className='text-[20px] bg-custome text-white px-[20px] py-[15px] rounded-[5px] hover:bg-[#e6c04d] transition duration-300 sm:min-w-[200px] w-[150px]'>Contact Us</Link>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home_Slider;
