import React from 'react';

const background = '/images/space-bg.jpeg';
const About = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${background})`, backgroundPosition: 'center' }}
        className='mt-32 p-4 text-white'>
        <h1 className='text-3xl text-center font-semibold'>The React Story</h1>
      </div>

      <div className='bg-[#f8f9fa] p-4'>
        <p className='text-lg py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est inventore
          non quasi doloremque reprehenderit consequatur at exercitationem dolorum s
          imilique eveniet!
        </p>

        <p className='text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo veritatis
          autem cumque odit quo distinctio quia sapiente praesentium sequi architecto.
        </p>
      </div>
    </>
  );
};

export default About;
