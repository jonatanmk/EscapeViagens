import ModalPost from 'react-modal';
import ModalPut from 'react-modal';
import ModalDelete from 'react-modal';
import React, { useEffect, useState } from 'react';
import apiCard from '../../apiCard';
import AddOfertas from '../Ofertas/Cadastrar/AddOfertas'
import AtualizarOfertas from '../Ofertas/Atualizar/AtualizarOfertas'
import DeleteOfertas from '../Ofertas/Deletar/DeleteOfertas'
import './ListaOfertas.css';


ModalPost.setAppElement('#root')
ModalPut.setAppElement('#root')
ModalDelete.setAppElement('#root')

function ListaOfertas() {
    //Crud
    const [card, setCard] = useState([])

    useEffect(() => {
        apiCard.get('/cards').then(res => setCard(res.data)).catch(err => console.log(err))
    }, [])

    //Modal Post
    const [modalIsOpenPost, setIsOpenPost] = useState(false);

    function handleOpenModalPost() {
        setIsOpenPost(true);
    }

    function handleCloseModalPost() {
        setIsOpenPost(false);
    }

    //Modal Put
    const [modalIsOpenPut, setIsOpenPut] = useState(false);

    function handleOpenModalPut() {
        setIsOpenPut(true);
    }

    function handleCloseModalPut() {
        setIsOpenPut(false);
    }

    //Modal Delete
    const [modalIsOpenDelete, setIsOpenDelete] = useState(false);

    function handleOpenModalDelete() {
        setIsOpenDelete(true);
    }

    function handleCloseModalDelete() {
        setIsOpenDelete(false);
    }

    const customStyles = {
        content: {
            top: '55%',
            left: '50%',
            right: '39%',
            bottom: '-30%',
            width: '90%',
            maxWidth: '70vh',
            height: '475px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px',          
            transform: 'translate(-50%, -50%)'
        }
    }

    return (
        <div className="container ">
            <div className="botoes">
                {/* Modal Post */}
                <button className="modal-button" onClick={handleOpenModalPost}>
                    <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                            <i className="fa fa-paper-plane" aria-hidden="true"></i>
                        </div>
                    </div>
                    <span>Cadastrar</span>
                </button>
                <ModalPost
                    isOpen={modalIsOpenPost}
                    onRequestClose={handleCloseModalPost}
                    style={customStyles}
                >
                    <AddOfertas />
                </ModalPost>

                {/* Modal Put */}
                <button className="modal-button" onClick={handleOpenModalPut}>
                    <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                            <i className="fa fa-refresh" aria-hidden="true"></i>
                        </div>
                    </div>
                    <span>Alterar</span>
                </button>
                <ModalPut
                    isOpen={modalIsOpenPut}
                    onRequestClose={handleCloseModalPut}
                    style={customStyles}
                >
                    <AtualizarOfertas />
                </ModalPut>

                {/* Modal Delete */}
                <button className="modal-button" onClick={handleOpenModalDelete}>
                    <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                            <i className="fa fa-ban" aria-hidden="true"></i>
                        </div>
                    </div>
                    <span>Apagar</span>
                </button>
                <ModalDelete
                    isOpen={modalIsOpenDelete}
                    onRequestClose={handleCloseModalDelete}
                    style={customStyles}
                >
                    <DeleteOfertas />
                </ModalDelete>

            </div>


            {/* Lista de ofertas */}
            <div className="mt-5 table-responsive">
                <table className="table table-sm table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Link da Imagem</th>
                            <th scope="col">Preço Anterior</th>
                            <th scope="col">Preço Novo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {card.map(card => (
                            <tr key={card.id}>
                                <th scope="row">{card.id}</th>
                                <td>{card.nome}</td>
                                <td>{card.linkImg}</td>
                                <td>{card.precoAnt}</td>
                                <td>{card.precoNovo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>







        </div >
    );
}

export default ListaOfertas;