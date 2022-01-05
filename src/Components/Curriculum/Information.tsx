import React from 'react';

import { Container } from '../../Styles/information.styles';

interface Props {}

const Information = (props: Props) => {
  return (
    <Container>
      <ul className="gallery">
        <li>
          <div className="content_info">
            <h2>Ju-jitsu</h2>
            <p>
              J'ai pratiqué de 12 à 17 ans.
              <br />
              J'ai appris plusieurs techniques de défense.
            </p>
          </div>
        </li>
        <li>
          <div className="content_info">
            <h2>Capoera</h2>
            <p>
              J'ai pratiqué de 14 à 16 ans.
              <br />
              J'ai appris des techniques simples grace à la simulation de la
              compétition en utilisant différentes actions.
            </p>
          </div>
        </li>
        <li>
          <div className="content_info">
            <h2>TaekwonDo</h2>
            <p>
              J'ai pratiqué de 18 à 20 ans à l'armée.
              <br />
              J'ai appris les techniques d'attaque et de défense.
            </p>
          </div>
        </li>
      </ul>
    </Container>
  );
};

export default Information;
