import logo from './logo.svg';
import './App.css';
import Longin from './components/Longin';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Tictactoe from './components/Tictactoe';
import Newtictac from './components/Newtictac';

function App() {

  return (
    <div className="">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='sign' element={<Longin/>}/>
        <Route path='tictac' element={<Tictactoe/>}/>
        <Route path='newtictac' element={<Newtictac/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
