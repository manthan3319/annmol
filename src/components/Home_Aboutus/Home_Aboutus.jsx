import React from 'react';
import { motion } from 'framer-motion';
import { farming } from '../Images/Images';
import { Title } from '../Function/Function';
import { useLocation } from 'react-router-dom';
const Home_Aboutus = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const location = useLocation();
  const isAboutUs = location.pathname === '/aboutus';

  return (
    <div style={{ position: 'relative', height: "100%", width: "100%" }} className='py-[50px]'>
      <div style={{
        backgroundImage: `url(${farming})`,
        height: "100%",
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        backgroundAttachment: "fixed",
      }}></div>
      <div style={{
        backgroundColor: 'rgb(26 39 58 / 70%)',
        height: "100%",
        width: "100%",
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
      }}></div>
      <motion.div
        className={`lg:max-w-[1440px] m-auto px-[20px] relative ${isAboutUs ? "mt-[50px] md:mt-0" : "mt-0"}`}
        style={{ height: "100%" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className='flex flex-col' style={{ height: "100%" }}>
          <div className='text-center'>
            <Title name="Company Profile" />
          </div>

          <div className='flex md:flex-row flex-col md:gap-[50px] md:mt-[50px] mt-[50px] gap-[25px]'>
            <motion.div
              className='md:w-[50%] bg-[#ffffff24] border-[2px] border-gold p-[20px] relative'
              variants={fadeInUp}
            >
              <div>
                <h1 className='md:text-[40px] font-ubuntu font-bold text-gold leading-[48px] text-[25px]'>
                  <span className='text-custome border-b-[1px] border-custome inline-block'>Raj Agrifoods</span> in Sustainable Farming and Nature Products
                </h1>

                <div className='mt-[25px]'>
                  <p className='text-white text-[18px] font-semibold'>
                    <span className='font-bold font-poppins text-custome'>Dahyabhai Jamnadas and Raj Agrifoods are sister concerns, suggesting they are related or affiliated companies working in similar or complementary fields,</span>  It sounds like Dahyabhai Jamnadas, founded in 1993 by Mr. Harishkumar Shah, is now led by Mr. Nimesh Shah as the chairperson and Mr. Tushar Shah as a partner. Both bring their own expertise to the company.
                  </p>
                  <p className='mt-[15px] text-white text-[18px] font-semibold'>
                  Dahyabhai Jamnadas is a prominent name in the agri-commodities sector in Surat District, known for its commitment to quality. Each year, around 3,000 farmers from local villages sell their raw materials to the company, where they receive competitive prices. To further enhance their offerings, Dahyabhai Jamnadas has invested in sortex machinery, which ensures that grains are cleaned to the highest standards, providing top-quality, chemical-free material at affordable prices.
                  </p>
                </div>
              </div>

              <div className='mt-[25px]'>
                <h1 className='md:text-[30px] font-ubuntu font-bold text-custome leading-[63px] text-[27px]'>Our Story</h1>
                <p className='text-white font-poppins text-[18px] mb-[5px]'>
                  <b className='text-gold'>Founded:</b> 1993
                </p>
                <p className='text-white font-poppins text-[18px] mb-[5px]'>
                  <b className='text-gold'>Founder:</b> Mr. Harish Kumar  Shah
                </p>
                <p className='text-white font-poppins text-[18px] mb-[5px]'>
                  <b className='text-gold'>Current Chairperson:</b> Mr. Nimesh Shah 
                </p>
                <p className='text-white font-poppins text-[18px] mb-[5px]'>
                  <b className='text-gold'>New Venture:</b> vesma,surat
                </p>
              </div>

              <motion.div
                className='bg-gold absolute lg:right-[-72px] lg:bottom-[-93px] xl:right-[8px] xl:bottom-[16px] since_div bottom-[-123px] right-0'
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <h1 className='font-ubuntu text-[35px] text-red-700 font-bold'>Since</h1>
                <p className='text-[23px] font-ubuntu text-white'>1993</p>
              </motion.div>
            </motion.div>

            <motion.div
              className='md:w-[50%] bg-[#ffffff24] border-[2px] border-white p-[20px] scale-[0.9]'
              variants={fadeInUp}
            >
              <h1 className='md:text-[45px] font-ubuntu font-bold text-custome leading-[63px] text-[27px]'>Our Products</h1>
              <p className='text-white font-poppins text-[18px] my-[10px]'>
                We take pride in offering a diverse range of high-quality natural products, including:
              </p>
              <ul className='mt-[18px] gap-y-[15px] flex flex-col'>
                <li className='flex gap-x-[10px] text-gold font-ubuntu text-[20px] font-bold'>
                  <span className='text-custome'><i className="fa fa-check" aria-hidden="true"></i></span>White Sesame Seeds
                </li>
                <li className='flex gap-x-[10px] text-gold font-ubuntu text-[20px] font-bold'>
                  <span className='text-custome'><i className="fa fa-check" aria-hidden="true"></i></span>Black Sesame Seeds
                </li>
                <li className='flex gap-x-[10px] text-gold font-ubuntu text-[20px] font-bold'>
                  <span className='text-custome'><i className="fa fa-check" aria-hidden="true"></i></span>Toor  (Pigeon Pea)
                </li>
                <li className='flex gap-x-[10px] text-gold font-ubuntu text-[20px] font-bold'>
                  <span className='text-custome'><i className="fa fa-check" aria-hidden="true"></i></span>Green Moong (Green Gram)
                </li>
                <li className='flex gap-x-[10px] text-gold font-ubuntu text-[20px] font-bold'>
                  <span className='text-custome'><i className="fa fa-check" aria-hidden="true"></i></span>Wheat
                </li>
                <li className='flex gap-x-[10px] text-gold font-ubuntu text-[20px] font-bold'>
                  <span className='text-custome'><i className="fa fa-check" aria-hidden="true"></i></span>Desi Chana (Bengal Gram)
                </li>
              </ul>
              <p className='text-white font-poppins text-[18px] my-[10px]'>
                Our commitment to quality ensures that each product meets the highest standards, providing our customers with the best nature has to offer.
              </p>
              <div className='mt-[10px]'>
                <h1 className='md:text-[30px] font-ubuntu font-bold text-custome leading-[63px] text-[25px]'>Our Vision</h1>
                <p className='text-white font-poppins text-[18px]'>
                To be a global leader in the agri-commodities sector, recognized for our commitment to quality, innovation, and sustainability. We strive to enhance agricultural practices, support local farmers, and deliver superior products that meet the highest standards of excellence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home_Aboutus;
