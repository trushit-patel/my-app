import './App.css';
import Navbar from "./components/Navbar"
import Footer from './components/Footer';
import Products from './components/Products';
import Carts from './components/Carts';

import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Product from './components/Product';

function App() {
  return (
    <div className="App">
     <Navbar/>
     
     <Routes>
      <Route  path='/products' element={<Products/>} />
      <Route path='/products/:id' element={<Product/>}/>
      
     </Routes>
     
     <Footer/>
    </div>
  );
}

export default App;
