import { useState } from 'react';
import { Add } from '@material-ui/icons/';
// Styles
import {
  Container,
  Wrapper,
  Image,
  Button,
  Info,
  Document,
  Imgaes,
} from '../../Styles/motivation.styles';

const Motivation = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Wrapper onClick={() => setOpen(true)}>
        <Image src="https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        <Info>Motivation</Info>
        <Button>
          <Add />
        </Button>
      </Wrapper>
      <Document open={open} onClick={() => setOpen(false)}>
        <Imgaes />
      </Document>
    </Container>
  );
};

export default Motivation;
