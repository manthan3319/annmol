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


export const Whatsapp = () => {
  const whatsappNumber = "+917043253295";
  const whatsappURL = `https://wa.me/${whatsappNumber}`;

  return (
    <a href={whatsappURL} target="_blank" rel="noopener noreferrer" className='flex flex-col items-center justify-center fixed bottom-[10px] right-[15px]'>
      <div className='contact_icon'>
        <i className="fa fa-whatsapp" aria-hidden="true"></i>
      </div>
      <p className='text-center text-white contact_on'>
        Connect on <br /> Whatsapp
      </p>
    </a>
  );
};