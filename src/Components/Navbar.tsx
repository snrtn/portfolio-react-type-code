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

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/">
            <Logo>Junhan</Logo>
          </Link>
        </Left>
        <Center></Center>
        <Right>
          <Menu>
            <Link to="/curriculum" style={{ width: '60%' }}>
              <Item>CurriculumVitae</Item>
            </Link>
            <Link to="/feedback">
              <Item>Feedback</Item>
            </Link>
          </Menu>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
