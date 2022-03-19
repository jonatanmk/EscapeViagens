import React from 'react';
import { useRef } from 'react';
import apiCard from '../../../apiCard';
import './AddOfertas.css';

function AddOfertas() {

    const nome = useRef();
    const linkImg = useRef();
    const precoAnt = useRef();
    const precoNovo = useRef();

    function enviarCard(event) {
        event.preventDefault();
        console.log(nome, linkImg, precoAnt, precoNovo)
        apiCard.post('/cards', {
            nome: nome.current.value,
            linkImg: linkImg.current.value,
            precoAnt: precoAnt.current.value,
            precoNovo: precoNovo.current.value,
        }).then(res => window.location.reload())
            .catch(err => console.log(err))
    }

    return (
        
            <form className="modal" onSubmit={enviarCard}>
                <input type="hidden" name="accessKey" value="5c000c14-2996-46e0-a7d6-6fe1005dbfc1" />
                <fieldset>
                    <legend><b>Cadastrar</b></legend>
                    <br />
                    <div className="inputbox inpNome">
                        <input type="text" name="name" id="nome" className="inputUser" required ref={nome} />
                        <label for="nome" className="labelInput">Nome</label>
                    </div>
                    <br />
                    <div className="inputbox">
                        <input type="text" name="linkImg" id="linkImg" className="inputUser" required ref={linkImg} />
                        <label for="linkImg" className="labelInput">Link da Imagem</label>
                    </div>
                    <br />
                    <div className="inputbox">
                        <input type="text" name="precoAnt" id="precoAnt" className="inputUser" required ref={precoAnt} />
                        <label for="precoAnt" className="labelInput">Preço Anterior</label>
                    </div>
                    <br />
                    <div className="inputbox">
                        <input type="tel" name="precoNovo" id="precoNovo" className="inputUser" required ref={precoNovo} />
                        <label for="precoNovo" className="labelInput">Preço Novo</label>
                    </div>
                    <br />
                    <br />
                    <input type="submit" name="submit" id="submit" />
                </fieldset>
            </form>
        
    );
}

export default AddOfertas;