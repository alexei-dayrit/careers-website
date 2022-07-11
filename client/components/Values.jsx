import React from 'react';

const values = [
  {
    id: '01',
    img: '/images/composable.png',
    title: 'Composable',
    text: 'Custom components allow maintainable and flexible code. No more thousands of lines of HTML!'
  },
  {
    id: '02',
    img: '/images/fast&efficient.png',
    title: 'Fast & Efficient',
    text: 'Pre-built patterns and functions act as building blocks to create fast and scalable projects.'
  },
  {
    id: '03',
    img: '/images/easy.jpeg',
    title: 'Simplicity',
    text: 'JSX is a special syntax which make JS and HTML easier to grasp.'
  }
];

const ValueItem = ({ value, text, img }) => {
  return (
    <div className='flex items-center justify-center flex-col h-3/4 w-full md:w-[30%] gap-4'>
      <img src={img} alt='value image'
        className={`w-48 h-48 object-cover
          ${img === '/images/composable.png' && 'border-2'}`
        } />
      <h1 className='text-xl italic font-semibold'>{value}</h1>
      <p className='text-center h-16'>{text}</p>
    </div>
  );
};

const Values = () => {
  return (
    <div className='min-h-[60vh] w-full bg-[#fafafa] flex items-center justify-center px-4 py-8' id='values'>
      <div>
        <h1 className='text-4xl font-semibold text-center mb-12'>
          Core Values
        </h1>

        <div className='flex flex-wrap items-center justify-center gap-8'>
          {values.map(value =>
            <ValueItem key={value.id} id={value.id} value={value.title}
              text={value.text} img={value.img} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Values;
