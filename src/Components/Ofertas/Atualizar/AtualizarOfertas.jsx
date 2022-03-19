import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import apiCard from '../../../apiCard';
import './AtualizarOfertas.css';
import { useForm } from 'react-hook-form'

function AddOfertas() {

    const {register, handleSubmit, reset} = useForm();
    const navigate = useNavigate();
    
    const { id } = useParams();

    useEffect(() => {
		apiCard.get(`/cards/${id}`).then((res) => {
			reset(res.data);
		});
	}, []);

	const atualizarCard = (dados) => {
		console.log(dados);
		apiCard.put(`/cards/${id}`, dados)
			.then(() => {
				console.log('Deu Tudo Certo');
				navigate('/AdmPromocoes');
			})
			.catch(() => {
				console.log('Deu Errado');
			});
	};

    return (
        
            <form onSubmit={handleSubmit(atualizarCard)}>
                <input type="hidden" name="accessKey" value="5c000c14-2996-46e0-a7d6-6fe1005dbfc1"/>
                <fieldset>
                    <legend><b>Atualizar</b></legend>
                    <br />
                    <div className="inputbox inpNome">
                        <input type="text" name="id" {...register('id')} id="id" className="inputUser"/>
                        <label for="id" className="labelInput">Id</label>
                    </div>
                    <br />
                    <div className="inputbox">
                        <input type="text" name="nome" {...register('nome')} id="nome" className="inputUser"/>
                        <label for="nome" className="labelInput">Nome</label>
                    </div>
                    <br />
                    <div className="inputbox">
                        <input type="text" name="linkImg" {...register('linkImg')} id="linkImg" className="inputUser"/>
                        <label for="linkImg" className="labelInput">Link da Imagem</label>
                    </div>
                    <br />
                    <div className="inputbox">
                        <input type="text" name="precoAnt" {...register('precoAnt')} id="precoAnt" className="inputUser"/>
                        <label for="precoAnt" className="labelInput">Preço Anterior</label>
                    </div>
                    <br />
                    <div className="inputbox">
                        <input type="tel" name="precoNovo" {...register('precoNovo')} id="precoNovo" className="inputUser"/>
                        <label for="precoNovo" className="labelInput">Preço Novo</label>
                    </div>
                    <br />
                    
                    <input type="submit" name="submit" id="submit" />
                </fieldset>
            </form>
        
    );
}

export default AddOfertas;