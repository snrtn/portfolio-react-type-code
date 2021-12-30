import React from 'react';
import {
  Container,
  Wrapper,
  Left,
  Center,
  Right,
} from '../Styles/footer.styles';

interface Props {}

const Footer = (props: Props) => {
  return (
    <Container>
      <Wrapper>
        <Left>Le mise à jour continue.</Left>
        <Center></Center>
        <Right>
          <div className="snsContainer">
            <span>Suivez-moi</span>
            <div className="sns">
              <button
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/in/hanjun-kim-1b1741171/',
                    '_blank',
                  )
                }
              >
                <i className="fab fa-linkedin-in"></i>
              </button>
              <button
                onClick={() =>
                  window.open(
                    'https://www.facebook.com/profile.php?id=100001807374484',
                    '_blank',
                  )
                }
              >
                <i className="fab fa-facebook-f"></i>
              </button>
            </div>
          </div>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Footer;
