// Modulos
import React from 'react';

export const UserModal = (props) => {
    return (
        <div id={props.nameId} className="modal">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Iniciando</p>
                    <button className="delete" aria-label="close" data-target={props.nameId} onClick={props.toggle}></button>
                </header>
                <section className="modal-card-body">
                    <p>Para empezar necesitamos unos datos personales</p>
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-success" data-target={props.nameId} onClick={()=>{alert("Mandado")}}>Guardar</button>
                    <button className="button is-danger" data-target={props.nameId} onClick={props.toggle}>Cancelar</button>
                </footer>
            </div>
        </div>
    )
}