import {
  Container,
  Wrapper,
  Left,
  Center,
  Logo,
  Right,
  Menu,
  Item,
} from '../Styles/navbar.styles';

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Junhan</Logo>
        </Left>
        <Center></Center>
        <Right>
          <Menu>
            <Item>CurriculumVitae</Item>
            <Item>Feedback</Item>
          </Menu>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
