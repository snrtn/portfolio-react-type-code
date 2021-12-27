import Navbar from 'Components/Navbar';

// Components
import Home from './Pages/Home';

// Styles
import { Wrapper } from './Styles/app.styles';

const App = () => {
  return (
    <Wrapper>
      <Navbar />
      <Home />
    </Wrapper>
  );
};

export default App;
