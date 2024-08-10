import React from 'react';

export const Title = ({ name, color }) => {
  const titleColor = color || 'white'; // Default to white if no color prop is provided

  return (
    <h1
      className={`xl:text-[50px] font-ubuntu font-semibold inline-block border-b-[1px] text-[34px]`}
      style={{ color: titleColor, borderBottomColor: titleColor }}
    >
      {name}
    </h1>
  );
};


export const Whatsapp =()=> {
  return (
    <div className='flex flex-col items-center justify-center fixed bottom-[10px] right-[15px]'>
                <div className='contact_icon '><i class="fa fa-whatsapp" aria-hidden="true"></i></div>
                <p className='text-center text-white contact_on'>Connect on <br></br> Whatsapp</p>
            </div>
  );
};