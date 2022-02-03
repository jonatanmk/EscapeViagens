import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home/Home';
import Destinos from './Pages/Destinos/Destinos';
import Promocoes from './Pages/Promocoes/Promocoes';
import Contato from './Pages/Contato/Contato';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>  
      <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/Destinos" exact element={<Destinos/>}></Route>
          <Route path="/Promocoes" exact element={<Promocoes/>}></Route>
          <Route path="/Contato" exact element={<Contato/>}></Route>
        </Routes>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
