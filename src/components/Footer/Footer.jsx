import React from 'react';
import {  logo2 } from '../Images/Images';
import { NavLink, Link } from 'react-router-dom';

const Footer = () => {
    const NavbarMenu = [
        {
            id: 1,
            name: "Home",
            link: "/"
        },
        {
            id: 2,
            name: "AboutUS",
            link: "/aboutus"
        },
        {
            id: 3,
            name: "Product",
            link: "/product"
        },
        {
            id: 4,
            name: "Gallery",
            link: "/gallery"
        },
    ];

    const ourproduct = [
        {
            id: 1,
            name: "Tuver-Pigeon pea",
            link: "/product"
        },
        {
            id: 2,
            name: "Wheat",
            link: "/product"
        },
        {
            id: 3,
            name: "Green Moong",
            link: "/product"
        },
        {
            id: 4,
            name: "Organic Sesame Seeds",
            link: "/product"
        },
        {
            id: 5,
            name: "Desi Chana",
            link: "/product"
        },
        {
            id: 6,
            name: "Whole Peanuts",
            link: "/product"
        },

    ];

    return (
        <div className='bg-green py-[50px] border-l-[15px] border-gold border-r-[15px] border-b-[7px]'>
            <div className='lg:max-w-[1440px] m-auto px-[20px]'>
                <div className='flex flex-col lg:flex-row justify-between gap-[25px] lg:gap-0'>
                    <div className='lg:w-[30%]'>
                        <div>
                            <img src={logo2} className='lg:w-[300px] w-[250px]' />
                        </div>
                        <div className='mt-[15px]'>
                            <p className='text-[15px] text-white'>Our vision is to lead the way in sustainable farming and to continue expanding our portfolio of nature products. We aim to promote health and well-being through our organic offerings, supporting both our customers and the environment.</p>
                        </div>
                    </div>

                    <div className='lg:w-[20%]'>
                        <div className='mb-[20px]'>
                            <h1 className=' font-ubuntu text-[25px] text-custome font-bold border-b-[2px] border-custome inline-block pb-[5px]'>Company</h1>
                        </div>
                        <nav>
                            <ul className='flex flex-col xl:gap-[20px]'>
                                {NavbarMenu.map((item) => (
                                    <li key={item.id}>
                                        <NavLink
                                            to={item.link}
                                            className="text-[18px] text-white font-poppins hover:text-gray-500"
                                        >
                                            {item.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div className='lg:w-[20%]'>
                        <div className='mb-[20px]'>
                            <h1 className=' font-ubuntu text-[25px] text-custome font-bold border-b-[2px] border-custome inline-block pb-[5px]'>Our Product</h1>
                        </div>
                        <nav>
                            <ul className='flex flex-col xl:gap-[20px]'>
                                {ourproduct.map((item) => (
                                    <li key={item.id}>
                                        <NavLink
                                            to={item.link}
                                            className="text-[18px] text-white font-poppins hover:text-gray-500"
                                        >
                                            {item.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div className='lg:w-[15%]'>
                        <div className='mb-[20px]'>
                            <h1 className=' font-ubuntu text-[25px] text-custome font-bold border-b-[2px] border-custome inline-block pb-[5px]'>Social Media</h1>
                        </div>

                        <div className='flex flex-row gap-[15px]'>
                            <Link className='text-[30px] text-gold'><i class="fa fa-instagram" aria-hidden="true"></i></Link>
                            <Link className='text-[30px] text-gold'><i class="fa fa-facebook-official" aria-hidden="true"></i></Link>
                            <Link className='text-[30px] text-gold'><i class="fa fa-google" aria-hidden="true"></i></Link>
                            <Link className='text-[30px] text-gold'><i class="fa fa-linkedin-square" aria-hidden="true"></i></Link>
                        </div>
                    </div>
                </div>

                <div className='mt-[25px] text-center border-t-[1px] pt-[20px]'>
                    <a href="https://brightensolutions.com/"><p class="font-poppins text-white font-medium text-[15px] lg:text-[18px]">© Copyright 2024 by <a class="text-gold font-ubuntu font-bold hover:text-customBlue" href="https://brightensolutions.com/"> Brighten Solutions </a></p></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
