import Hero from '../hero/Hero';
import React from 'react';

const Home = ({movies}) => {
  return (
        <Hero movies = {movies} />
  )
}

export default Home