import React from 'react';
const background = '/images/background-image.jpeg';

const About = () => {
  return (
    <div style={{ backgroundImage: `url(${background})` }} id='about'
      className='text-white bg-center bg-cover bg-no-repeat min-h-screen w-full px-10
        py-8 flex justify-center items-center  snap-start'>
      <div>
        <div className='text-center w-full mb-4'>
          <h1 className='text-4xl font-semibold pb-3'>The React Story</h1>
          <p>Free and open source.</p>
        </div>
        <div className='px-4 text-lg leading-loose w-full'>
          <p className='py-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptate
            id fuga quas magni, et laborum blanditiis laboriosam modi? Est ullam exercitationem
            qui harum, atque, debitis hic officia voluptas repellat ducimus minus mollitia
            molestiae autem enim doloremque optio voluptates nulla, ab quis itaque reiciendis
            aliquid! Dicta facere voluptatem eius tempora illum?
          </p>
          <p className='pt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea odio ut,
            repellat aut debitis quod ipsum officia harum fuga aperiam quam dolorem,
            neque, deleniti officiis? Quaerat, laudantium blanditiis! Id omnis a ratione
            nostrum enim recusandae assumenda magnam nobis temporibus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
