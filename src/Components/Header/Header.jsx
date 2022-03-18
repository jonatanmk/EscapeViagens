import { Link } from "react-router-dom";
import './Header.css'
import logo from '../../Assets/img/logo.png'
import { useAuth0 } from "@auth0/auth0-react";

function Header() {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

    return (
        <>
            <header>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <nav className="img-fluid menu">
                                <img className="img-fluid " src={logo} />
                            </nav>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <a className="navbar-toggler-icon"></a>
                            </button>
                            <div className="collapse navbar-collapse menuAj" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <Link to="/" className="nav-link" aria-current="page">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/Destinos" className="nav-link" aria-current="page" href="/#">Destinos</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/Promocoes" className="nav-link " aria-current="page" href="/#">Promoções</Link>
                                    </li>
                                    {isAuthenticated && user.sub === "google-oauth2|101310849100982124402" && (
                                        <li className="nav-item">
                                            <Link to="/AdmPromocoes" className="nav-link" aria-current="page" href="/#">Administrar</Link>
                                        </li>
                                    )}
                                    <li className="nav-item">
                                        <Link to="/Contato" className="nav-link" aria-current="page" href="/#">Contato</Link>
                                    </li>
                                    <li className="nav-item">
                                        {!isAuthenticated ? (
                                            <Link to="#" className="nav-link" aria-current="page" href="/#" onClick={() => loginWithRedirect()}>Login</Link>
                                        ) : (
                                            <Link to="#" className="nav-link" aria-current="page" href="/#" onClick={() => logout()}>Sair</Link>
                                        )}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;