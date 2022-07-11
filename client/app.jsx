import React from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';

export default class App extends React.Component {
  render() {
    return (
      <div className='sm:container md:container lg:container mx-auto'>
        <Navbar />
        <Home />
      </div>
    );
  }
}
