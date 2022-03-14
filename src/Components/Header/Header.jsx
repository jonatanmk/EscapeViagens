import { Link } from "react-router-dom";
import './Header.css'
import logo from '../../Assets/img/logo.png'

function Header() {
    return (
        <>
                        <header>
                <nav className="img-fluid menu">
                    <img className="img-fluid " src={logo} />
                    <ul>
                        <li>
                            <Link to="/">
                                <a className="btn">Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Destinos">
                                <a className="btn">Destinos</a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Promocoes">
                                <a className="btn">Promoções</a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Contato">
                                <a className="btn">Contato</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;