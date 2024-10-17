import React, { useState } from 'react';
import { Title } from '../Function/Function';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from 'emailjs-com';

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

    // Handle form submission
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Number: '',
        Subject: '',
        Message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_fe62azb', // Replace with your EmailJS service ID
            'template_7okw9gf', // Replace with your EmailJS template ID
            formData, // Send the form data as parameters
            'k7Tuz-KeXhiz3LAhq' // Replace with your EmailJS user ID
        )
        .then((result) => {
            alert('Message sent successfully!!');
        }, (error) => {
            console.error('Failed to send message', error);
            alert('Failed to send message, please try again.');
        });
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
                <div className='text-center'>
                    <Title name="Contact Us" color="#74C264" />
                </div>

                <div className='flex md:justify-between flex-wrap mt-[50px] items-center justify-center gap-[15px]'>
                    {/* Contact Information */}
                </div>

                <div className='mt-[80px]'>
                    <div className='text-center'>
                        <Title name="Drop Us A Message For Any Query" color="#74C264" />
                    </div>

                    <motion.form
                        onSubmit={handleSubmit}
                        className='mt-[50px] bg-[#d7ac442b] p-[40px] rounded-[15px]'
                        variants={fadeInVariants}
                    >
                        <div className='flex flex-col md:gap-[35px] md:flex-row'>
                            <input
                                type="text"
                                placeholder='Name'
                                name='Name'
                                className='w-[100%] p-[15px] outline-none bg-transparent text-black border-b-[1px] border-green placeholdercustom'
                                onChange={handleChange}
                                value={formData.Name}
                            />

                            <input
                                type="email"
                                placeholder='Email'
                                name='Email'
                                className='w-[100%] p-[15px] outline-none bg-transparent text-black border-b-[1px] border-green placeholdercustom'
                                onChange={handleChange}
                                value={formData.Email}
                            />
                        </div>

                        <div className='flex flex-col md:gap-[35px] md:flex-row'>
                            <input
                                type="number"
                                placeholder='Number'
                                name='Number'
                                className='w-[100%] p-[15px] outline-none bg-transparent text-black border-b-[1px] border-green placeholdercustom'
                                onChange={handleChange}
                                value={formData.Number}
                            />

                            <input
                                type="text"
                                placeholder='Subject'
                                name='Subject'
                                className='w-[100%] p-[15px] outline-none bg-transparent text-black border-b-[1px] border-green placeholdercustom'
                                onChange={handleChange}
                                value={formData.Subject}
                            />
                        </div>

                        <div className='mt-[20px]'>
                            <textarea
                                className='w-[100%] p-[15px] outline-none bg-transparent text-black border-b-[1px] border-green placeholdercustom'
                                placeholder='Your Message'
                                name='Message'
                                cols={25}
                                rows={8}
                                onChange={handleChange}
                                value={formData.Message}
                            />
                        </div>

                        <div className='text-center mt-[30px]'>
                            <button type='submit' className='bg-gold w-[150px] py-[15px] text-white rounded-[10px]'>
                                Submit
                            </button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </motion.div>
    );
};

export default Home_Contactus;
