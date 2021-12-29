import {
  Container,
  Wrapper,
  Left,
  Image,
  Right,
} from '../Styles/motivation.styles';

const Motivation = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Image src="https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        </Left>
        <Right></Right>
      </Wrapper>
    </Container>
  );
};

export default Motivation;
