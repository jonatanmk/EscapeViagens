import './Crud.css'
import destino from '../../Assets/img/destino.png'
import reserva from '../../Assets/img/reserva.png'
import Carousel2 from '../Carousel/Carousel2'

function Crud() {
    return (
        <>
            <Carousel2 />
            <section className="container crud row">
                <div className="img-fluid botao col-5">
                    <a href="/#"><img src={destino} className="img-fluid" alt="crud" /></a>
                </div>
                <div className="img-fluid botao col-5">
                    <a href="/#"><img src={reserva} className="img-fluid" alt="crud" /></a>
                </div>
            </section>
        </>
    );
}

export default Crud;