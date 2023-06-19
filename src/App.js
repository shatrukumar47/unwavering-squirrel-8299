import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Container, Box } from '@chakra-ui/react'
import Home from './Pages/Home';
import Footer from './components/Footer';
import AllRoutes from './Routes/AllRoutes';
import Loading from './components/Loading';

function App() {
  return (
    <div className="App" style={{width:"100%",margin:"auto"}}>
      <Navbar />
      <div style={{width:"100%", margin:"auto"}}>
          <AllRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
