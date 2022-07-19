import React from 'react';
import About from '../components/about';
import Mission from '../components/mission';
import Values from '../components/values';
import Team from '../components/team';
import Jobs from '../components/jobs';

export default function Home(props) {
  return (
    <div>
      <About />
      <Mission />
      <Values />
      <Team />
      <Jobs />
    </div>
  );
}
