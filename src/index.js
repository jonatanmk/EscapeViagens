import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Home from './Pages/Home/Home';
import Destinos from './Pages/Destinos/Destinos';
import Promocoes from './Pages/Promocoes/Promocoes';
import Footer from './Components/Footer/Footer';
import Contato from './Pages/Contato/Contato';
import Header from './Components/Header/Header';
import Error from './Pages/Error/Error';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>  
      <Header/>
      <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/Destinos" exact element={<Destinos/>}/>
          <Route path="/Promocoes" exact element={<Promocoes/>}/>
          <Route path="/Contato" exact element={<Contato/>}/>
          <Route path="*" exact element={<Error/>}/>
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
