import React from 'react';
import { useRef } from 'react';
import apiCard from '../../../apiCard';
import './DeleteOfertas.css';

function DeleteOfertas() {

    const id = useRef();

    function excluirCard(event) {
        event.preventDefault();
        console.log(id)
        apiCard.delete(`/cards/${id.current.value}`, {
        id: id.current.value,
        }).then(res => window.location.reload())
            .catch(err => console.log(err))
    }

    return (

        <form className="modal" onSubmit={excluirCard}>
            <input type="hidden" name="accessKey" value="5c000c14-2996-46e0-a7d6-6fe1005dbfc1" />
            <fieldset>
                <legend><b>Apagar</b></legend>
                <br />
                <div className="inputbox inpNome">
                    <input type="text" name="id" id="id" className="inputUser" required ref={id} />
                    <label for="id" className="labelInput">Id</label>
                </div>
                <br />

                <input type="submit" name="submit" id="submit" />
            </fieldset>
        </form>

    );
}

export default DeleteOfertas;