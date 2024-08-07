import React from 'react';
import { logo } from '../Images/Images';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
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

    return (
        <div className='shadow-md xl:py-[10px] header relative bg-custome' style={{ zIndex:"99999999999" }}>
            <div className='xl:max-w-[1440px] m-auto px-[20px]'>
                <div className='flex items-center justify-between'>
                    <div>
                        <img src={logo} alt='logo' className='xl:w-[150px] w-[150px]' />
                    </div>
                    <div>
                        <nav>
                            <ul className='flex xl:gap-[50px]'>
                                {NavbarMenu.map((item) => (
                                    <li key={item.id}>
                                        <NavLink 
                                            to={item.link} 
                                            className={({ isActive }) => 
                                                isActive 
                                                ? 'text-white font-ubuntu xl:text-[20px] bg-[#154C30] px-[20px] py-[10px] rounded-t-[30px]' 
                                                : 'text-black hover:text-white transition duration-300 font-ubuntu xl:text-[20px] bg-[#ffffff24] px-[20px] py-[10px] rounded-t-[30px]'
                                            }
                                        >
                                            {item.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <Link to="/contactus" className='text-black hover:text-red-600 transition duration-300 font-ubuntu xl:text-[20px] bg-white px-[30px] py-[15px] rounded-[5px]'>Contact Us</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
