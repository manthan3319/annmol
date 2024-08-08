import React from 'react';

export const Title = ({ name, color }) => {
  const titleColor = color || 'white'; // Default to white if no color prop is provided

  return (
    <h1
      className={`xl:text-[50px] font-ubuntu font-semibold inline-block border-b-[1px]`}
      style={{ color: titleColor, borderBottomColor: titleColor }}
    >
      {name}
    </h1>
  );
};
