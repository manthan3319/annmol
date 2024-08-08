import React from 'react';
import { Title } from '../Function/Function';
import { gallery1, gallery10, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9 } from '../Images/Images';

const images = [
  gallery1, gallery2, gallery3, gallery4, gallery5,
  gallery6, gallery7, gallery8, gallery9, gallery10
];

const Home_Gallery = () => {
    return (
        <div className='bg-green py-[50px]'>
            <div className='lg:max-w-[1440px] m-auto px-[20px]'>
                <div className='text-center'>
                    <Title name="Gallery" />
                </div>

                <div className='flex flex-wrap justify-center gap-[20px] mt-[40px]'>
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`gallery-${index + 1}`} className='w-[22%] min-h-[247px] max-h-[247px] border' />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home_Gallery;
