import React from 'react';
import { useRef } from 'react';
import api from '../../api';
import './Formulario.css';

function Formulario () {

    const nome = useRef();
    const email = useRef();
    const telefone = useRef();
    const mensagem = useRef();
    
    function enviarContato(event) {
      event.preventDefault();
      console.log(nome, email, telefone, mensagem)
      api.post('/contatos', {
        nome: nome.current.value,
        email: email.current.value,
        telefone: telefone.current.value,
        mensagem: mensagem.current.value,
      }).then(res => window.location.reload())
      .catch(err => console.log(err))
    }

    return (
        <section className="container cont2">
            <div className="box">
                <form onSubmit={enviarContato}>
                    <input type="hidden" name="accessKey" value="5c000c14-2996-46e0-a7d6-6fe1005dbfc1"/>
                        <fieldset>
                            <legend><b>Fale com a gente...</b></legend>
                            <br />
                                <div className="inputbox inpNome">
                                    <input type="text" name="name" id="nome" className="inputUser" required ref={nome}/>
                                    <label for="nome" className="labelInput">Nome Completo</label>
                                </div>
                                <br />
                                <div className="inputbox">
                                    <input type="text" name="email" id="email" className="inputUser" required ref={email}/>
                                    <label for="email" className="labelInput">Email</label>
                                </div>
                                <br />
                                <div className="inputbox">
                                    <input type="tel" name="telefone" id="telefone" className="inputUser" required ref={telefone}/>
                                    <label for="telefone" className="labelInput">Telefone</label>
                                </div>
                                <br /><br />
                                <div className="inputbox">
                                    <textarea name="message" id="textarea" className="inputUser" rows="5" required ref={mensagem}></textarea>
                                    <label for="textarea" className="labelInput">Escreva aqui...</label>
                                </div>
                                <br />
                                <input type="submit" name="submit" id="submit" />
                        </fieldset>
                </form>
            </div>
        </section>
    );
}

export default Formulario;