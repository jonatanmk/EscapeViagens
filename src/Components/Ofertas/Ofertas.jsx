import './Ofertas.css';
import joaoPessoa from '../../Assets/img/joaoPessoa.jpg'
import fozIguacu from '../../Assets/img/fozIguacu.jpg'
import curitiba from '../../Assets/img/curitiba.jpg'

export default () => {
    return (
        <>
            <section class="container">
                <div class="item">
                    <a href="#"><img src={joaoPessoa} /></a>
                </div>
                <div class="item">
                    <h2>Pacotes para João Pessoa (OFERTA IMPERDÍVEL!)</h2>
                    <p id="texto">Preço por pessoa</p>
                    <h2 class="precoNovo">R$ 1.049</h2>
                    <h4 class="precoAnt">R$ 1.409</h4>
                    <p id="texto">Taxas e impostos não inclusos</p>
                </div>
            </section>
            <section class="container">
                <div class="item">
                <a href="#"><img src={fozIguacu} /></a>
                </div>
                <div class="item">
                    <h2>Pacotes para Foz do Iguaçu (OFERTA IMPERDÍVEL!)</h2>
                    <p id="texto">Preço por pessoa</p>
                    <h2 class="precoNovo">R$ 873</h2>
                    <h4 class="precoAnt">R$ 1.205</h4>
                    <p id="texto">Taxas e impostos não inclusos</p>
                </div>
            </section>        <section class="container">
                <div class="item">
                <a href="#"><img src={curitiba} /></a>
                </div>
                <div class="item">
                    <h2>Pacotes para Curitiba (OFERTA IMPERDÍVEL!)</h2>
                    <p id="texto">Preço por pessoa</p>
                    <h2 class="precoNovo">R$ 672</h2>
                    <h4 class="precoAnt">R$ 809</h4>
                    <p id="texto">Taxas e impostos não inclusos</p>
                </div>
            </section>
        </>
    );
}