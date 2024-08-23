import React from 'react';
import { Title } from '../Function/Function';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Home_Contactus = () => {
    const location = useLocation();
    const iscontactus = location.pathname === '/contactus';

    const { ref: sectionRef, inView: sectionInView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const fadeInVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <motion.div
            ref={sectionRef}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={fadeInVariants}
            className={` ${iscontactus ? "py-[100px]" : "py-[50px]"}`}
        >


            <div className='lg:max-w-[1440px] m-auto px-[20px]'>
                <div>
                    <div className='text-center'>
                        <Title name="Contact Us" color="#74C264" />
                    </div>

                    <div className='flex md:justify-between flex-wrap mt-[50px] items-center justify-center gap-[15px]'>
                        <motion.div
                            className='items-center flex flex-col bg-green p-[20px] rounded-[15px] w-[300px] h-[150px] overflow-hidden'
                            variants={fadeInVariants}
                        >
                            <p className='text-[30px] mb-[10px] text-gold'><i className="fa fa-phone" aria-hidden="true"></i></p>
                            <p className='font-ubuntu text-[20px] text-white'>+91 7043253295</p>
                        </motion.div>

                        <motion.div
                            className='items-center flex flex-col bg-green p-[20px] rounded-[15px] w-[300px] h-[150px] overflow-hidden'
                            variants={fadeInVariants}
                        >
                            <p className='text-[30px] mb-[10px] text-gold'><i className="fa fa-envelope" aria-hidden="true"></i></p>
                            <p className='font-ubuntu text-[20px] text-white'>shahraj.1432001@gmail.com</p>
                        </motion.div>

                        <motion.div
                            className='items-center flex flex-col bg-green p-[20px] rounded-[15px] w-[300px] h-[150px] overflow-hidden'
                            variants={fadeInVariants}
                        >
                            <p className='text-[30px] mb-[10px] text-gold'><i className="fa fa-map-marker" aria-hidden="true"></i></p>
                            <p className='font-ubuntu text-[20px] text-white'>vesma,surat</p>
                        </motion.div>
                    </div>
                </div>

                <div className='mt-[80px]'>
                    <div className='text-center'>
                        <Title name="Drop Us A Message For Any Query" color="#74C264" />
                    </div>

                    <motion.div
                        className='mt-[50px] bg-[#d7ac442b] p-[40px] rounded-[15px]'
                        variants={fadeInVariants}
                    >
                        <div className='flex flex-col md:gap-[35px] md:flex-row'>
                            <input
                                type="text"
                                placeholder='Name'
                                name='Name'
                                className='w-[100%] p-[15px] outline-none bg-transparent text-black border-b-[1px] border-green placeholdercustom'
                            />

                            <input
                                type="email"
                                placeholder='Email'
                                name='Email'
                                className='w-[100%] p-[15px] outline-none bg-transparent text-black border-b-[1px] border-green placeholdercustom'
                            />
                        </div>

                        <div className='flex flex-col md:gap-[35px] md:flex-row'>
                            <input
                                type="number"
                                placeholder='Number'
                                name='Number'
                                className='w-[100%] p-[15px] outline-none bg-transparent text-black border-b-[1px] border-green placeholdercustom'
                            />

                            <input
                                type="text"
                                placeholder='Subject'
                                name='Subject'
                                className='w-[100%] p-[15px] outline-none bg-transparent text-black border-b-[1px] border-green placeholdercustom'
                            />
                        </div>

                        <div className='mt-[20px]'>
                            <textarea
                                className='w-[100%] p-[15px] outline-none bg-transparent text-black border-b-[1px] border-green placeholdercustom'
                                placeholder='Your Message'
                                cols={25}
                                rows={8}
                            />
                        </div>

                        <div className='text-center mt-[30px]'>
                            <button type='submit' className='bg-gold w-[150px] py-[15px] text-white rounded-[10px]'>
                                Submit
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

           
        </motion.div>
    );
}

export default Home_Contactus;
