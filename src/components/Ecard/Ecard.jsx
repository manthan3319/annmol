import React from 'react'
import { ecard, logo2, rectengal, wheatbg } from '../Images/Images'
import { Link } from 'react-router-dom'

const Ecard = () => {
  return (
    <div className='2xl:w-[30%] xl:w-[40%] lg:w-[50%] md:w-[70%] sm:w-[80%] w-[100%] m-auto pb-[50px] pt-[150px] md:pt-[50px] px-[20px] '>
      <div style={{
        backgroundImage: `url(${ecard})`,
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: '100% 100%',
      }} className='rounded-sm h-full border-[2px] border-black ecard_shadow '>


        <div className='relative'>
          <img src={wheatbg} alt='img' className='h-[250px] w-[100%]' />
          <div className='w-[100%] h-[20px] bg-white'></div>
        </div>

        <div className='ecard_logo w-[220px] h-[220px] bg-green p-[15px] rounded-[50%] flex items-center justify-center m-auto mt-[-120px] z-[99] relative'>
          <img src={logo2} alt='img' className='w-[200px]' />
        </div>

        <div className='px-[20px] py-[20px]'>
          <div className='text-center'>
            <h1 className='text-[35px] font-poppins text-white font-bold'>SHAH RAJ</h1>
            <p className='text-[18px] font-medium font-ubuntu text-white'>Owner</p>
            <p className='text-[#d7ac44] font-ubuntu'>Deals in grains, oil seeds & pulses</p>
          </div>

          <div className='mt-[25px] flex flex-col gap-y-[25px]'>
            <div className='flex items-center gap-[10px]'>
              <div>
                <p className='text-black text-[30px] bg-white w-[35px] h-[35px] flex items-center justify-center rounded-[50px]'>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </p>
              </div>
              <div>
                <Link to="tel:+917043253295" className='font-ubuntu text-[25px] text-white'>+91 7043253295</Link>
              </div>
            </div>

            <div className='flex items-center gap-[10px]'>
              <div>
                <p className='text-black text-[25px] bg-white w-[35px] h-[35px] flex items-center justify-center rounded-[50px]'>
                  <i className="fa fa-envelope-o" aria-hidden="true"></i>
                </p>
              </div>
              <div>
                <Link to="mailto:Info@rajagrifoods.com" className='font-ubuntu text-[25px] text-white'>Info@rajagrifoods.com</Link>
              </div>
            </div>

            <div className='flex items-center gap-[10px]'>
              <div>
                <p className='text-black text-[25px] bg-white w-[35px] h-[35px] flex items-center justify-center rounded-[50px]'>
                  <i className="fa fa-globe" aria-hidden="true"></i>
                </p>
              </div>
              <div>
                <Link to="https://www.rajagrifoods.com" target="_blank" className='font-ubuntu text-[25px] text-white'>www.rajagrifoods.com</Link>
              </div>
            </div>

            <div className='flex items-center gap-[10px]'>
              <div>
                <p className='text-black text-[25px] bg-white w-[35px] h-[35px] flex items-center justify-center rounded-[50px]'>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                </p>
              </div>
              <div>
                <Link  target="_blank" className='font-ubuntu text-[25px] text-white'>
                  Plot No. 89, 90, Fairdeal Industrial Park-1, Palsana-Navsari Highway, Near Mindhola River, Near Rajhans Gesto.
                </Link>
              </div>
            </div>
          </div>

        </div>


        <div className='flex flex-row gap-[15px] justify-center mt-[15px] border-t-2 border-white py-[10px]'>
          <Link className='text-[30px] text-gold'><i class="fa fa-instagram" aria-hidden="true"></i></Link>
          <Link className='text-[30px] text-gold'><i class="fa fa-facebook-official" aria-hidden="true"></i></Link>
          <Link className='text-[30px] text-gold'><i class="fa fa-google" aria-hidden="true"></i></Link>
          <Link className='text-[30px] text-gold'><i class="fa fa-linkedin-square" aria-hidden="true"></i></Link>
        </div>

      </div>
    </div>
  )
}

export default Ecard
