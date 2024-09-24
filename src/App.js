import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import NavBar from './components/NavBar';
import Esection from './components/Esection';
import './App.css';
import Footer from './components/Footer';
import {Route, Routes } from 'react-router-dom'; 
import Contact from './components/Contact';
import Setting from './components/Setting';
import Cart from './components/Cart';
import Products from './components/Products';

function App(){
  return(
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Esection/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Products' element={<Products/>}/>
      <Route path='/Setting' element={<Setting/>}/>
      <Route path='/Cart' element={<Cart/>}/>
    </Routes>
    <Footer/>
    </>
  );
}
export default App;