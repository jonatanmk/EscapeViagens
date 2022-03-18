import './CrudOfertas.css';
import React, { useEffect, useState } from 'react';
// import { useRef } from 'react';
import apiCard from '../../apiCard';

function CrudOfertas() {

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
        <>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1>asdash</h1>
        </>

    );
}

export default CrudOfertas;