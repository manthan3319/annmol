import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { products } from '../Data/Data';
import { motion } from 'framer-motion';

const Product_View = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;
  const whatsappNumber = "+917043253295";
  const whatsappURL = `https://wa.me/${whatsappNumber}`;

  if (!product) {
    return <div>Product not found</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
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

  const handleProductClick = (product) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="py-[100px] bg-green text-white">
      <div className='lg:max-w-[1440px] m-auto px-[20px]'>
        <div className='flex flex-col md:flex-row mt-[45px] gap-[35px] bg-[#ffffff0a] md:p-[65px] p-[16px] rounded-[5px]'>
          <div className='mb-[20px] lg:w-[40%]'>
            <img
              src={product.image}
              alt={product.name}
              className="w-[300px] md:w-[500px] md:min-h-[500px] max-h-[500px] min-h-[330px] object-cover rounded-[10px] m-auto"
            />
          </div>
          <div className='lg:w-[60%]'>
            <h1 className="text-[32px] font-bold mb-[20px] text-custome">{product.name}</h1>
            <p className="text-[20px] mb-[20px]">{product.description}</p>
            <div className='mb-[15px]'>
            <h2 className="text-[24px] font-semibold mb-[10px]">fetureFeatures:</h2>
              <ul>
                {product.fetureFeatures.map((info, index) => (
                  <li key={index}>{info}</li>
                ))}
              </ul>
            </div>
            {product.specification && product.specification.length > 0 && (
              <>
                <h2 className="text-[24px] font-semibold mb-[10px]">Specification:</h2>
                <table className="mb-[20px] w-full text-left">
                  <thead>
                    <tr>
                      <th className="border-b-2 border-gray-300 py-[10px]">Parameter</th>
                      <th className="border-b-2 border-gray-300 py-[10px]">Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.specification.map((spec, index) => (
                      <tr key={index}>
                        <td className="border-b border-gray-300 py-[10px]">{spec.Parameter}</td>
                        <td className="border-b border-gray-300 py-[10px]">{spec.Level}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}

            {/* Packaging Information */}
            {product.PackagingInformation && product.PackagingInformation.length > 0 && (
              <>
                <h2 className="text-[24px] font-semibold mb-[10px]">Packaging Information:</h2>
                <ul className="list-disc list-inside mb-[20px]">
                  {product.PackagingInformation.map((info, index) => (
                    <li key={index}>{info.detail}</li>
                  ))}
                </ul>
              </>
            )}

           


            <a href={whatsappURL} className="bg-white w-[200px] text-green text-[20px] font-bold py-[10px] px-[20px] rounded-[5px] hover:bg-gray-200 flex items-center gap-[15px]">
              Order On <div className='contact_icon2 '><i className="fa fa-whatsapp" aria-hidden="true"></i></div>
            </a>
          </div>
        </div>

        <div className='lg:mt-[100px]'>
          <h1 className="md:text-[45px] text-[38px] text-center my-[40px] font-ubuntu text-custome font-bold">Related Products</h1>
          <Slider {...settings}>
            {products.map((item) => (
              <motion.div
                key={item.id}
                className="p-[10px]"
                variants={fadeInUpVariants}
                onClick={() => handleProductClick(item)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[350px] sm:min-h-[400px] sm:max-h-[400px] min-h-[190px] object-cover rounded-[5px] mb-[10px]"
                />
                <h2 className="text-[18px] font-semibold text-center">{item.name}</h2>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Product_View;
