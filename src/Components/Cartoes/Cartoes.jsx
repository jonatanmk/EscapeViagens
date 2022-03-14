import './Cartoes.css';
import cartoes from '../../Assets/img/cartoes.jpg'

function Cartoes() {
    return (
        <section>
            <div class="item">
                <img src={cartoes} alt="cartoes" />
            </div>
            <div class="item">
                <h2>Se sua vontade de viajar não é passageira,</h2>
                <h3>por que seus pontos tem que ser?</h3>
                <p>Com os Cartões Escape Viagens suas compras
                    valem pontos que não expiram para você trocar
                    pelo que quiser na Escape.
                </p>
            </div>
        </section>
    );
}

export default Cartoes;