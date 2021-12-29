import Navbar from './Components/Navbar';

import Home from 'Pages/Home';

import { Container } from './app.styles';

const App = () => {
  return (
    <Container>
      <Navbar />
      <Home />
    </Container>
  );
};

export default App;
