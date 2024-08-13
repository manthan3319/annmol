import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate,useLocation } from 'react-router-dom';
import { Chanapng, chanapng2 } from '../Images/Images';
import { Title } from '../Function/Function';
import { products } from '../Data/Data';

const Home_Products = () => {
  const location = useLocation();
  const isproduct = location.pathname === '/product';

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } }); // Pass the product object in state
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div ref={ref} className={`bg-green xl:py-[50px] relative overflow-hidden ${isproduct ?"py-[120px]" : "py-[80px]"}`}>
      <div className='lg:max-w-[1440px] m-auto px-[20px]'>
        <div className='text-center'>
          <Title name="Products" />
        </div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUpVariants}
          className='flex flex-wrap justify-center gap-[10px] mt-8'
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className='w-[48%] sm:w-[45%] md:w-[30%] xl:w-[20%] flex flex-col product rounded-[10px] z-[99] cursor-pointer hover:scale-105 hover:shadow-lg transition-transform duration-300'
              variants={fadeInUpVariants}
              onClick={() => handleProductClick(product)}
            >
              <div className='h-[200px] sm:h-[250px] md:h-[330px] overflow-hidden'>
                <img src={product.image} className='w-[100%] h-[100%] object-cover rounded-t-[10px]' alt={product.name} />
              </div>
              <div className='text-center border-t-[5px] border-gol flex-grow flex items-center justify-center p-[10px]'>
                <h1 className='text-white font-poppins text-[16px] sm:text-[18px] md:text-[20px] font-medium truncate'>{product.name}</h1>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute right-[-110px] bottom-[-20px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img src={Chanapng} alt='img' className='w-[490px]' />
      </motion.div>

      <motion.div
        className="absolute left-[-110px] top-[50px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img src={chanapng2} alt='img' className='w-[490px]' />
      </motion.div>
    </div>
  );
}

export default Home_Products;
