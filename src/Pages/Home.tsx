import React from 'react';
import Slider from 'Components/Slider';
import Motivation from 'Components/Motivation';

interface Props {}

const Home = (props: Props) => {
  return (
    <>
      <Slider />
      <Motivation />
    </>
  );
};

export default Home;
