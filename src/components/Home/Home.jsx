import React from 'react';
import Home_Slider from '../Home_Slider/Home_Slider';
import Home_Products from '../Home_Products/Home_Products';
import Home_Aboutus from '../Home_Aboutus/Home_Aboutus';
import Home_Gallery from '../Home_Gallery/Home_Gallery';
import Home_Contactus from '../Home_Contactus/Home_Contactus';

const Home = () => {
  return (
    <div>
       <Home_Slider/>
       <Home_Products/>
       <Home_Aboutus/>
       <Home_Gallery/>
       <Home_Contactus/>
    </div>
  );
}

export default Home;
