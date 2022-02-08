import './Crud.css'
import destino from '../../Assets/img/destino.png'
import reserva from '../../Assets/img/reserva.png'

export default () => {
    return (
        <>
            <section class="container crud">
                <div class="row botao">
                    <a href="#"><img src={destino} class="img-fluid" /></a>
                </div>
                <div class="row botao">
                    <a href="#"><img src={reserva} class="img-fluid" /></a>
                </div>
            </section>
        </>

    );
}