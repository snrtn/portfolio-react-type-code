import React, { useState } from 'react';
import { Container } from '../../Styles/profli.styles';

import { profilitems } from '../../Data/datas';

const Profli = () => {
  const [prifilImg, setprifilImg] = useState(0);
  const delay = 6000;

  React.useEffect(() => {
    setTimeout(
      () =>
        setprifilImg((prevslideImg) =>
          prevslideImg === profilitems.length - 1 ? 0 : prevslideImg + 1,
        ),
      delay,
    );
  }, [prifilImg]);

  return (
    <Container>
      <div className="container">
        <div
          className="imgs"
          style={{ backgroundImage: `url(${profilitems[prifilImg].img})` }}
        />
        <div className="text">
          <div className="profile">
            <div className="profile-heder">
              <div className="name">
                Je suis
                <div className="name_job">
                  <ul className="name_job_list">
                    <li>Courageux</li>
                    <li>FrontEnd</li>
                    <li>Developer</li>
                  </ul>
                </div>
              </div>
              <p>
                Après mon service militaire et mon travail dans la sécurité,
                j'ai décidé de venir en France sans parler la langue pour
                découvrir ce pays qui m'intéresse depuis longtemps. <br />
                Je me suis donc inscrit à des cours de français et ai travaillé
                dans un grand magasin alimentaire. <br /> <br />
                Mais j'ai voulu chercher un secteur d'activité qui me motive et
                j'ai donc commence à faire des formations en ligne en
                autodidacte en développent FrontEnd.
                <br />
                Étant père au foyer depuis plus d'un an, je me forme
                principalement le soir et le weekend. <br /> <br />
                Aujourd'hui je me sens prêt à commencer une nouvelle formation
                reconnue tout en travaillant pour accroitre mes compétences et
                en acquérir de nouvelles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Profli;
