import React from 'react';
import { logo } from '../Images/Images';

const Footer = () => {
  return (
    <div className='bg-green'>
        <div className='lg:max-w-[1440px] m-auto px-[20px]'>
            <div className='flex md:flex-row justify-between'>
                <div className='md:w-[30%]'>
                    <div>
                        <img src={logo} className='lg:w-[300px]' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;
