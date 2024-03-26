import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';





const App = () => {



  return (
    <>
      <Header />
      <Container>
    
        <Outlet/>
      </Container>
      <Footer />
    </>
  );
};

export default App;
