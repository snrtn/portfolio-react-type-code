import React from 'react';
import { Container } from './formationTB.styles';

const FormationTop = () => {
  return (
    <Container>
      <div className="headBox">
        <div className="box">
          <h1>La langue de française</h1>
          <p>
            L’Alliance française de Paris(l'école d’enseignement du français
            langue étrangère)
          </p>
          <hr />
          <h2>Période : 2018 ~ 2020</h2>
          <hr />
          <div className="textBox">
            <p>
              📑 J'ai appris la grammaire et la conjugaison à travers les
              journaux, le cinéma et différents thèmes.
              <br />
              📑 J'ai pratiqué l'écoute des nouvelles a la radio sur différents
              sujets.
              <br />
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FormationTop;
