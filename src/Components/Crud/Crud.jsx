import './Crud.css'
import destino from '../../Assets/img/destino.png'
import reserva from '../../Assets/img/reserva.png'

function Crud() {
    return (
        <section class="container crud row">
            <div class="img-fluid botao col-5">
                <a href="#"><img src={destino} class="img-fluid" /></a>
            </div>
            <div class="img-fluid botao col-5">
                <a href="#"><img src={reserva} class="img-fluid" /></a>
            </div>
        </section>
    );
}

export default Crud;