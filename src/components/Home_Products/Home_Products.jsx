import React from 'react';
import { Chanapng, chanapng2, desi_chana, Moong, peanuts, Sesame, Tuver, wheat } from '../Images/Images';
import { Title } from '../Function/Function';

const products = [
  {
    id: 1,
    name: 'Tuver-Pigeon pea',
    image: Tuver,
  },
  {
    id: 2,
    name: 'Wheat',
    image: wheat,
  },
  {
    id: 3,
    name: 'Green Moong',
    image: Moong,
  },
  {
    id: 4,
    name: 'Organic Sesame Seeds',
    image: Sesame,
  },
  {
    id: 5,
    name: 'Desi Chana / Bengal Gram',
    image: desi_chana,
  },
  {
    id: 6,
    name: 'Whole Peanuts',
    image: peanuts,
  },

];

const Home_Products = () => {
  return (
    <div className='bg-green xl:py-[50px] relative overflow-hidden'>
      <div className='lg:max-w-[1440px] m-auto px-[20px]'>
        <div>
          <div className='text-center'>
           <Title name="Products" />
          </div>

          <div className='flex flex-wrap justify-center gap-6 mt-8 '>
            {products.map((product) => (
              <div key={product.id} className='xl:w-[20%]  flex flex-col product rounded-[10px]'>
                <div className='h-[330px] min-h-[330px] max-h-[330px] overflow-hidden'>
                  <img src={product.image} className='w-[100%] h-[100%] object-cover rounded-t-[10px]' alt={product.name} />
                </div>
                <div className='text-center border-t-[5px] border-gol flex-grow flex items-center justify-center p-[10px]'>
                  <h1 className='text-white font-poppins text-[20px] font-medium truncate'>{product.name}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <dov className="absolute right-[-110px] bottom-[-20px]">
        <img src={Chanapng} alt='img' className='w-[490px] opacity-[0.2]'/>
      </dov>

      <dov className="absolute left-[-110px] top-[50px]">
        <img src={chanapng2} alt='img' className='w-[490px] opacity-[0.2]'/>
      </dov>
    </div>
  );
}

export default Home_Products;
