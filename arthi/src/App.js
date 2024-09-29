import logo from './logo.svg';
import './App.css';
import Header from './components/user/Header';
import Home from './components/user/Home';
import About from './components/user/About';
import Contact from './components/user/Contact';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
  <>
  
  <BrowserRouter>
  <Routes>
<Route path='/' element= {<Header/>}/>
<Route path="/home" element= {<Home/>}/>
<Route path="/about" element= {<About/>}/>
<Route path="/contact" element= {<Contact/>}/>

  </Routes>
  </BrowserRouter>
  
  
  
  
  </>
  );

}

export default App;
