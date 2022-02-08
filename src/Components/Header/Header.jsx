import { Link } from "react-router-dom";
import './Header.css'
import logo from '../../Assets/img/logo.png'

export default () => {
    return (
        <>
            <header>
                <nav className="img-fluid menu">
                    <img className="img-fluid " src={logo} />
                    <ul>
                        <li>
                            <Link to="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Destinos">
                                <a>Destinos</a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Promocoes">
                                <a>Promoções</a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Contato">
                                <a>Contato</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}