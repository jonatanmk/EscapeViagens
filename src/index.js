import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Pages/Home/Home";
import Destinos from "./Pages/Destinos/Destinos";
import Promocoes from "./Pages/Promocoes/Promocoes";
import AdmPromocoes from "./Pages/Promocoes/AdmPromocoes";
import Footer from "./Components/Footer/Footer";
import Contato from "./Pages/Contato/Contato";
import Header from "./Components/Header/Header";
import AtualizarOfertas from "./Components/Ofertas/Atualizar/AtualizarOfertas"
import Error from "./Pages/Error/Error";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Destinos" element={<Destinos />} />
          <Route path="/Promocoes" element={<Promocoes />} />
          <Route path="/Contato" element={<Contato />} />
          <Route path="/AdmPromocoes" element={<AdmPromocoes />} />
          <Route path='/AdmPromocoes/Atualizar/:id' element={<AtualizarOfertas />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </Auth0Provider>,
  

  document.getElementById("root")
);
