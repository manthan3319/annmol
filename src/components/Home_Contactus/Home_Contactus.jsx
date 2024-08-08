import React from 'react';
import { Title } from '../Function/Function';

const Home_Contactus = () => {
    return (
        <div className=' py-[50px]'>
            <div className='lg:max-w-[1440px] m-auto px-[20px]'>
                <div>
                    <div className='text-center'>
                        <Title name="Contact Us" color="#74C264" />
                    </div>

                    <div className='flex justify-between flex-wrap mt-[50px]'>
                        <div className='items-center flex flex-col bg-green p-[20px] rounded-[15px] w-[300px] h-[150px] overflow-hidden'>
                            <p className='text-[30px] mb-[10px] text-gold'><i className="fa fa-phone" aria-hidden="true"></i></p>
                            <p className='font-ubuntu text-[20px] text-white'>+91 7043253295</p>
                        </div>

                        <div className='items-center flex flex-col bg-green p-[20px] rounded-[15px] w-[300px] h-[150px] overflow-hidden'>
                            <p className='text-[30px] mb-[10px] text-gold'><i className="fa fa-envelope" aria-hidden="true"></i></p>
                            <p className='font-ubuntu text-[20px] text-white'>shahraj.1432001@gmail.com</p>
                        </div>

                        <div className='items-center flex flex-col bg-green p-[20px] rounded-[15px] w-[300px] h-[150px] overflow-hidden'>
                            <p className='text-[30px] mb-[10px] text-gold'><i className="fa fa-map-marker" aria-hidden="true"></i></p>
                            <p className='font-ubuntu text-[20px] text-white'>Pune</p>
                        </div>
                    </div>
                </div>

                <div className='mt-[80px]'>
                    <div className='text-center'>
                        <Title name="Drop Us A Message For Any Query" color="#74C264" />
                    </div>

                    <div className='mt-[50px] bg-[#d7ac442b] p-[40px] rounded-[15px]'>
                        <div className='flex flex-col gap-[35px] md:flex-row'>
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

                        <div className='flex flex-col gap-[35px] md:flex-row'>
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home_Contactus;
