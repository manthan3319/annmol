import React from 'react';
import { motion } from 'framer-motion';
import { Title } from '../Function/Function';
import { gallery1, gallery10, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, grasstector } from '../Images/Images';
import { useLocation } from 'react-router-dom';

const images = [
  gallery1, gallery2, gallery3, gallery4, gallery5,
  gallery6, gallery7, gallery8, gallery9, gallery10
];

const Home_Gallery = () => {
    const containerVariant = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2 // Adjust this value for the time between each image appearance
            }
        }
    };

    const imageVariant = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    };

    const location = useLocation();
  const isgallery = location.pathname === '/gallery';

    return (
        <div className={`bg-green py-[50px] relative ${isgallery ?"py-[100px]":""}`}>
            <div className='lg:max-w-[1440px] m-auto px-[20px]'>
                <div className='text-center'>
                    <Title name="Gallery" />
                </div>

                <motion.div
                    className='flex flex-wrap justify-center gap-[20px] mt-[40px]'
                    initial="hidden"
                    animate="visible"
                    variants={containerVariant}
                >
                    {images.map((image, index) => (
                        <motion.img
                            key={index}
                            src={image}
                            alt={`gallery-${index + 1}`}
                            className='md:w-[22%] w-[47%] md:min-h-[247px] min-h-[137px] max-h-[247px] border rounded-[10px]'
                            variants={imageVariant}
                        />
                    ))}
                </motion.div>
            </div>

            <div>
                <img src={grasstector} alt='img' className='opacity-[0.1] w-[100%] absolute bottom-0' />
            </div>
        </div>
    );
}

export default Home_Gallery;
