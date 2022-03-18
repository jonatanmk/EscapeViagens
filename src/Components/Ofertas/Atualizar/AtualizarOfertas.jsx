import React from 'react';
import { useRef } from 'react';
import apiCard from '../../../apiCard';
import './AtualizarOfertas.css';

function AddOfertas() {

    const id = useRef();
    const nome = useRef();
    const linkImg = useRef();
    const precoAnt = useRef();
    const precoNovo = useRef();

    function atualizarCard(event) {
        event.preventDefault();
        console.log(id, nome, linkImg, precoAnt, precoNovo)
        apiCard.put(`/cards/${id.current.value}`, {
            id: id.current.value,
            nome: nome.current.value,
            linkImg: linkImg.current.value,
            precoAnt: precoAnt.current.value,
            precoNovo: precoNovo.current.value,
        }).then(res => window.location.reload())
            .catch(err => console.log(err))
    }

    return (
        
            <form onSubmit={atualizarCard}>
                <input type="hidden" name="accessKey" value="5c000c14-2996-46e0-a7d6-6fe1005dbfc1" />
                <fieldset>
                    <legend><b>Atualizar</b></legend>
                    <br />
                    <div className="inputbox inpNome">
                        <input type="text" name="id" id="id" className="inputUser" required ref={id} />
                        <label for="id" className="labelInput">Id</label>
                    </div>
                    <br />
                    <div className="inputbox">
                        <input type="text" name="name" id="nome" className="inputUser" ref={nome} />
                        <label for="nome" className="labelInput">Nome</label>
                    </div>
                    <br />
                    <div className="inputbox">
                        <input type="text" name="linkImg" id="linkImg" className="inputUser" ref={linkImg} />
                        <label for="linkImg" className="labelInput">Link da Imagem</label>
                    </div>
                    <br />
                    <div className="inputbox">
                        <input type="text" name="precoAnt" id="precoAnt" className="inputUser" ref={precoAnt} />
                        <label for="precoAnt" className="labelInput">Preço Anterior</label>
                    </div>
                    <br />
                    <div className="inputbox">
                        <input type="tel" name="precoNovo" id="precoNovo" className="inputUser" ref={precoNovo} />
                        <label for="precoNovo" className="labelInput">Preço Novo</label>
                    </div>
                    <br />
                    
                    <input type="submit" name="submit" id="submit" />
                </fieldset>
            </form>
        
    );
}

export default AddOfertas;