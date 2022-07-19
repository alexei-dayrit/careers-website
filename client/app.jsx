import React from 'react';
import Home from './pages/home';
import Navbar from './components/navbar';

const App = () => {
  return (
    <div className='sm:container md:container lg:container mx-auto'>
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
