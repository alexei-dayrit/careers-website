import React from 'react';
const background = '/images/space-bg.jpeg';

const About = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${background})` }}
        className='mt-28 pt-20 text-white bg-center bg-contain h-screen w-full px-10'>
        <div className='text-center'>
          <h1 className='text-4xl font-semibold pb-3'>The React Story</h1>
          <p>Free and open source.</p>
        </div>

        <div className='p-4 text-lg leading-loose'>
          <p className='py-4 mt-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptate
            id fuga quas magni, et laborum blanditiis laboriosam modi? Est ullam exercitationem
            qui harum, atque, debitis hic officia voluptas repellat ducimus minus mollitia
            molestiae autem enim doloremque optio voluptates nulla, ab quis itaque reiciendis
            aliquid! Dicta facere voluptatem eius tempora illum? Ea dolor veritatis aliquam
            dicta, dolorum nostrum nisi quaerat, itaque magnam nulla pariatur facilis ipsum
            incidunt quidem, quis officiis aut quia ratione quibusdam molestiae in cum minus.
            Quidem tempore, ad nihil nesciunt perferendis fugit aperiam placeat esse nisi quas,
            nulla blanditiis rem commodi tempora hic, magni dolorem minima est.
          </p>
          <p className='pt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea odio ut,
            repellat aut debitis quod ipsum officia harum fuga aperiam quam dolorem,
            neque, deleniti officiis? Quaerat, laudantium blanditiis! Id omnis a ratione
            nostrum enim recusandae assumenda magnam nobis temporibus, fuga voluptas
            sit aut explicabo voluptatibus eum, itaque facilis repudiandae numquam
            deserunt adipisci accusamus eligendi aspernatur? Impedit aperiam ut
            consequuntur doloremque veniam.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
