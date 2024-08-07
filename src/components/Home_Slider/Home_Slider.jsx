import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { chana_bg, logo2, marcha_bg } from '../Images/Images';

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

  return (
    <div className="relative">
      {/* Slider */}
      <Slider {...sliderSettings} className="relative w-full h-[600px]">
        <div>
          <img src={marcha_bg} className='w-[100%] h-[600px]' alt="Background" />
        </div>
        <div>
          <img src={chana_bg} className='w-[100%] h-[600px]' alt="Background" />
        </div>
        <div>
          <img src={marcha_bg} className='w-[100%] h-[600px]' alt="Background" />
        </div>
        <div>
          <img src={marcha_bg} className='w-[100%] h-[600px]' alt="Background" />
        </div>
      </Slider>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center text-white bg-green bg-opacity-70 px-[20px] ">
        <div className="lg:max-w-[1440px] m-auto md:mt-[100px] md:mb-[150px]">
          <div className="flex flex-col md:flex-row items-center text-center bg-[#ffffff36] section1 section_slider_box">
            <div>
              <h1 className='text-[80px] text-white font-ubuntu font-bold  max-w-[520px]'>
                <span className='welcome '>Welcome To</span> <span className='anmol_text xl:text-[88px] text-white'>ANNMOL</span>
              </h1>
            </div>
            <div className='bg-gold slider_logo'>
              <img src={logo2} className='w-[338px]' alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_Slider;
