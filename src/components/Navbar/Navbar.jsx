import React from 'react';
import { logo, menu } from '../Images/Images';
import { NavLink, Link } from 'react-router-dom';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDrawer = () => {
        setIsOpen(prevState => !prevState);
    };

    const NavbarMenu = [
        { id: 1, name: 'Home', link: '/' },
        { id: 2, name: 'About Us', link: '/aboutus' },
        { id: 3, name: 'Product', link: '/product' },
        { id: 4, name: 'Gallery', link: '/gallery' },
    ];

    const handleLinkClick = () => {
        toggleDrawer(); // Close the drawer when a link is clicked
    };

    return (
        <div>
            <div className='shadow-md xl:py-[10px] header relative bg-custome md:block hidden' style={{ zIndex: '99999999999' }}>
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
                            <Link to="/contactus" className='text-black hover:text-red-600 transition duration-300 font-ubuntu xl:text-[20px] bg-white px-[30px] py-[15px] rounded-[5px]'>
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:hidden block'>
                <div className='flex justify-between items-center px-[20px] fixed z-[999] w-[100%] bg-white'>
                    <div>
                        <Link to="/"><img src={logo} alt='logo' className='xl:w-[150px] w-[150px]' /></Link>
                    </div>
                    <div>
                        <button onClick={toggleDrawer}>
                            <img src={menu} alt='menu' className='w-[46px]' />
                        </button>
                    </div>
                </div>

                <Drawer
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction='right'
                    className='bla bla bla z-[99999999999]'
                >
                    <ul className='flex flex-col gap-[25px] pb-[30px] px-[20px] pt-[100px]'>
                        {NavbarMenu.map((item) => (
                            <li key={item.id}>
                                <NavLink
                                    to={item.link}
                                    onClick={handleLinkClick} // Close drawer on click
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'text-white font-ubuntu xl:text-[20px] bg-[#154C30] px-[20px] py-[10px] rounded-t-[30px] w-[100%] inline-block'
                                            : 'text-black hover:text-white transition duration-300 font-ubuntu xl:text-[20px] bg-[#ffffff24] px-[20px] py-[10px] rounded-t-[30px] w-[100%] inline-block'
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <div className='px-[20px]'>
                        <Link
                            to="/contactus"
                            onClick={handleLinkClick} // Close drawer on click
                            className='text-black transition duration-300 font-ubuntu xl:text-[20px] bg-custome px-[30px] py-[15px] rounded-[5px]'
                        >
                            Contact Us
                        </Link>
                    </div>
                </Drawer>
            </div>
        </div>
    );
};

export default Navbar;
