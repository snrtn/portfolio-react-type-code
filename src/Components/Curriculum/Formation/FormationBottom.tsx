import React from 'react';

import { Container } from './formationTB.styles';

const FormationBottom = () => {
  return (
    <Container>
      <div className="headBox bottom">
        <div className="box">
          <h1>Formations en informatique en ligne</h1>
          <p>Openclassrooms et les Formations en ligne en Corée de sud</p>
          <hr />
          <h2>Période : 2020~</h2>
          <hr />
          <div className="textBox">
            <p>
              📑 J'ai appris comment changer la valeur des attributs des balises
              HTML et css. Afficher différentes formes et animations en
              utilisant le css. Manipuler le dom HTML en apprenant Javascript
              es6 et jquery, React et l'utilisation de différentes library.
              <br />
              📑 Je reprends les cours terminés pour bien consolider mes bases.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FormationBottom;
