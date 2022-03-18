import './Ofertas.css';
import React, { useEffect, useState } from 'react';
// import { useRef } from 'react';
import apiCard from '../../apiCard';


function Ofertas() {

    // const nome = useRef();
    // const linkImg = useRef();
    // const precoAnt = useRef();
    // const precoNovo = useRef();

    const [card, setCard] = useState([])

    // function enviarCard(event) {
    //     event.preventDefault();
    //     console.log(nome, linkImg, precoAnt, precoNovo)
    //     apiCard.post('/cards', {
    //         nome: nome.current.value,
    //         linkImg: linkImg.current.value,
    //         precoAnt: precoAnt.current.value,
    //         precoNovo: precoAnt.current.value,
    //     }).then(res => window.location.reload())
    //         .catch(err => console.log(err))
    // }

    useEffect(() => {
        apiCard.get('/cards').then(res => setCard(res.data)).catch(err => console.log(err))
    }, [])

    return (
        <div className="bodyFake">
            <div className="container container2">
                {card.map(card => (
                    <div className="card" key={card.id}>
                        <div className="imgBx">
                            <img src={card.linkImg} alt="foto"/>
                            <ul className="action">
                                <li>
                                    <i className="fa fa-heart" aria-hidden="true"></i>
                                    <span>Favoritos</span>
                                </li>
                                <li>
                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                    <span>Meu Carrinho</span>
                                </li>
                                <li>
                                    <i className="fa fa-eye" aria-hidden="true"></i>
                                    <span>Detalhes</span>
                                </li>
                            </ul>
                        </div>
                        <div className="content">
                            <div className="productName">
                                <h3>{card.nome}</h3>
                            </div>
                            <div className="precoAnt">
                                <h3>R${card.precoAnt}</h3>
                            </div>
                            <div className="precoNovo">
                                <h2>R${card.precoNovo}</h2>
                                <div>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star gray" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
}

export default Ofertas;