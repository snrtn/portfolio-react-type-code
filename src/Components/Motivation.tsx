import { useState } from 'react';
import {
  Container,
  Wrapper,
  Left,
  Image,
  BtnContainer,
  Info,
  Button,
  Document,
  Imgaes,
  Right,
} from '../Styles/motivation.styles';
import { Add } from '@material-ui/icons';

import { faqItems } from '../datas';

const Motivation = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    const items = document.querySelectorAll('.accordion button');

    var i = 0;

    function toggleAccordion(this: any) {
      const itemToggle = this.getAttribute('aria-expanded');

      for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
      }
      if (itemToggle === 'false') {
        this.setAttribute('aria-expanded', 'true');
      }
    }

    items.forEach((item) => item.addEventListener('click', toggleAccordion));
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Left onClick={() => setOpen(true)}>
            <Image src="https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            <BtnContainer>
              <Info>Motivation</Info>
              <Button>
                <Add />
              </Button>
            </BtnContainer>
          </Left>
          <Right>
            <div className="faq-container">
              <h2>Frequently Asked Questions</h2>
              <div className="accordion">
                {faqItems.map((item: any) => (
                  <div className="accordion-item">
                    <button
                      onClick={handleClick}
                      id="accordion-button-1"
                      aria-expanded="false"
                    >
                      <span className="accordion-title" key={item.id}>
                        {item.title}
                      </span>
                      <span className="faq-icon" aria-hidden="true"></span>
                    </button>
                    <div className="accordion-content">
                      <p>{item.desc}</p>
                      <a
                        href={item.adress}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Line
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Right>
        </Wrapper>
      </Container>
      <Document open={open} onClick={() => setOpen(false)}>
        <Imgaes />
      </Document>
    </>
  );
};

export default Motivation;
