// styles
import {
  Container,
  Wrapper,
  Left,
  Version,
  Center,
  Logo,
  Right,
  MenuItem,
} from '../Styles/navbar.styles';

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Version>FR</Version>
        </Left>
        <Center>
          <Logo>Junhan</Logo>
        </Center>
        <Right>
          <MenuItem>CurriculumVitae</MenuItem>
          <MenuItem>Feedback</MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
