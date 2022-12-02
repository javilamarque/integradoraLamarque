import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './component/home/Home'
import Fotter from './layout/Fotter';
import Contact from './component/contact/Contact';
import NavBar from './layout/NavBar';
import Product from './component/product/Carousel';
import Card from './component/card/card';

function App() {



  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          
          <Route path='/contact' element={ <Contact />} />
          <Route path='/product' element={<Product />} />
          <Route path='/card' element={<Card />} />        
        </Routes>
        
      
        <Fotter/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
