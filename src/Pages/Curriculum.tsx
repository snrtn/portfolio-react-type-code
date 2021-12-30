import React from 'react';
import Experience from 'Components/Curriculum/Experience';
import Formation from 'Components/Curriculum/Formation';
import Information from 'Components/Curriculum/Information';
import Profli from 'Components/Curriculum/Profli';

import { Container, Logo } from '../Styles/curriculum.styles';

interface Props {}

const Curriculum = (props: Props) => {
  return (
    <Container>
      <Logo>Profil</Logo>
      <Profli />
      <Logo>Expériences Professionnelles</Logo>
      <Experience />
      <Logo>Formation</Logo>
      <Formation />
      <Logo>Autres informations</Logo>
      <Information />
    </Container>
  );
};

export default Curriculum;
