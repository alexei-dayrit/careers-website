import React from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='sm:container md:container lg:container mx-auto'>
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
