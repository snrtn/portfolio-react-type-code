import React from 'react';

import { Container } from '../../Styles/formation.styles';

import FormationTop from './Formation/FormationTop';
import FormationBottom from './Formation/FormationBottom';

const Formation = () => {
  return (
    <Container>
      <div className="container">
        <div className="item12">
          <FormationTop />
        </div>
        <div className="item12">
          <FormationBottom />
        </div>
      </div>
    </Container>
  );
};

export default Formation;
