import React from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
      </div>
    );
  }
}
