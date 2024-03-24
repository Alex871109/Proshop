import { Container } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Welcome to Proshop</h1>
        <HomeScreen/>
      </Container>
      <Footer />
    </>
  );
};

export default App;
