import React from 'react';
import About from '../components/About';
import Values from '../components/Values';
import Team from '../components/Team';
import Jobs from '../components/Jobs';

export default function Home(props) {
  return (
    <>
      <About />
      <Values />
      <Team />
      <Jobs />
    </>
  );
}
