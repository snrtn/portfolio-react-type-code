import React, { useState } from 'react';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import { experienceitems } from '../../Data/datas';
import { Container } from '../../Styles/experience.styles';

const Experience = () => {
  const [exImg, setexImg] = useState(0);

  return (
    <Container>
      <div className="container">
        <div
          className="backimg"
          style={{ backgroundImage: `url(${experienceitems[exImg].img})` }}
        />
        <div className="textbox">
          <p className="title">{experienceitems[exImg].title}</p>
          <p className="subtitle">{experienceitems[exImg].subtitle}</p>
          <hr />
          <p className="data">{experienceitems[exImg].data}</p>
          <p className="mission">Mission</p>
          <p className="dect">{experienceitems[exImg].dect}</p>
          <p className="dect">{experienceitems[exImg].decta}</p>
          <p className="dect">{experienceitems[exImg].dectb}</p>
        </div>
      </div>
      <div className="buttonbox">
        <div className="controle">
          <ArrowBack
            className="left"
            onClick={() => {
              exImg > 0 && setexImg(exImg - 1);
            }}
          />
          <ArrowForward
            className="right"
            onClick={() => {
              exImg < experienceitems.length - 1 && setexImg(exImg + 1);
            }}
          />
        </div>
      </div>
    </Container>
  );
};

export default Experience;
