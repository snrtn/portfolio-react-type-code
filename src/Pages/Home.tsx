import Slider from '../Components/Home/Slider';
import Motivation from 'Components/Home/Motivation';
import styled from 'styled-components';
import FAQ from 'Components/Home/FAQ';

const Container = styled.div`
  margin-top: 20px;
  height: 50vh;
  display: flex;
`;

const Home = () => {
  return (
    <>
      <Slider />

      <Container>
        <Motivation />
        <FAQ />
      </Container>
    </>
  );
};

export default Home;
