import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Container, Box } from '@chakra-ui/react'
import Home from './Pages/Home';

function App() {
  return (
    <div className="App" style={{width:"80%",margin:"auto"}}>
      <div>
            <Navbar />
            <Home />
      </div>
    </div>
  );
}

export default App;
