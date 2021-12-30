import React from 'react';
import Slider from 'Components/Home/Slider';
import Motivation from 'Components/Home/Motivation';
import Project from 'Components/Home/Project';

interface Props {}

const Home = (props: Props) => {
  return (
    <>
      <Slider />
      <Motivation />
      <Project />
    </>
  );
};

export default Home;
