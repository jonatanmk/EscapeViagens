import ListaOfertas from "../../Components/Ofertas/ListaOfertas";
import Carousel2 from "../../Components/Carousel/Carousel2"
import { useAuth0 } from '@auth0/auth0-react'

function AdmOfertas() {
    const { user, isAuthenticated } = useAuth0()

    return (
        isAuthenticated && user.sub === "auth0|62353e08abc5b5006f58bbc4" && (
            <main>
                <Carousel2/>
                <ListaOfertas />
            </main>
        )
    );
}

export default AdmOfertas;