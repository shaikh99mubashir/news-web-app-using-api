import logo from './logo.svg';
import './App.css';
import Routing from './Component/Routing';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routing/>
    </BrowserRouter>
  );
}

export default App;
