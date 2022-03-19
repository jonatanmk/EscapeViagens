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
                            <Link to="/" className="nav-link" aria-current="page" href="/#">
                                <img className="img-fluid " src={logo} alt="logo"/></Link>
                            </nav>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <a className="navbar-toggler-icon" href="/#"></a>
                            </button>
                            <div className="collapse navbar-collapse menuAj" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <Link to="/" className="nav-link" aria-current="page" href="/#">
                                        <i class="fa fa-home" aria-hidden="true"></i> Home</Link>
                                    </li>
                                    {/* <li className="nav-item">
                                        <Link to="/Destinos" className="nav-link" aria-current="page" href="/#">Destinos</Link>
                                    </li> */}
                                    <li className="nav-item">
                                        <Link to="/Promocoes" className="nav-link " aria-current="page" href="/#">
                                        <i class="fa fa-plane" aria-hidden="true"></i> Promoções</Link>
                                    </li>
                                    {isAuthenticated && user.sub === "auth0|62353e08abc5b5006f58bbc4" && (
                                        <li className="nav-item">
                                            <Link to="/AdmPromocoes" className="nav-link" aria-current="page" href="/#">
                                            <i class="fa fa-cogs" aria-hidden="true"></i> Administrar</Link>
                                        </li>
                                    )}
                                    <li className="nav-item">
                                        <Link to="/Contato" className="nav-link" aria-current="page" href="/#">
                                        <i class="fa fa-envelope-open" aria-hidden="true"></i> Contato</Link>
                                    </li>
                                    <li className="nav-item">
                                        {!isAuthenticated ? (
                                            <Link to="#" className="nav-link" aria-current="page" href="/#" onClick={() => loginWithRedirect()}>
                                            <i class="fa fa-sign-in" aria-hidden="true"></i> Login</Link>
                                        ) : (
                                            <Link to="#" className="nav-link" aria-current="page" href="/#" onClick={() => logout()}>
                                            <i class="fa fa-sign-out" aria-hidden="true"></i> Sair</Link>
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