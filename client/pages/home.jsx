import React from 'react';
import About from '../components/About';
import Mission from '../components/Mission';
import Values from '../components/Values';
import Team from '../components/Team';
import Jobs from '../components/Jobs';
import JobForm from '../components/JobForm';

export default function Home(props) {
  return (
    <div>
      <About />
      <Mission />
      <Values />
      <Team />
      <Jobs />
      <JobForm />
    </div>
  );
}
