// Modulos
import React from 'react';
import {FieldText, FieldNumber, FieldRadio, FieldSelect} from '../FormComponents/FieldsHorizontal';


export const UserModal = (props) => {
    const onChange = (event) => { console.log(event.target.value) };
    return (
        <div id={props.nameId} className="modal">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Iniciando</p>
                    <button className="delete" aria-label="close" data-target={props.nameId} onClick={props.toggle}></button>
                </header>
                <section className="modal-card-body">
                    <div className="content has-text-black">
                        <p>Para empezar necesitamos unos datos personales</p>
                    
                        <hr/>
                        <FieldText label="Nombre" nameId="firstName" value={""} onchange={onChange} />
                        <FieldText label="Apellido" nameId="lastName" value={""} onchange={onChange} />
                        <FieldNumber label="Edad" nameId="age" min={0} max={0} value={0} onchange={onChange} />
                        <FieldRadio labels={["Hombre","Mujer","No-Binario"]} nameId="genre" value={""} onchange={onChange} />
                        <FieldSelect label="Pais" nameId="country" items={["Argentina", "Brasil", "Otro"] }value={"Argentina"} onchange={onChange} />
                        <FieldText label="Ciudad" nameId="city" value={""} onchange={onChange} />

                    </div>
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-success" data-target={props.nameId} onClick={()=>{alert("Mandado")}}>Guardar</button>
                    <button className="button is-danger" data-target={props.nameId} onClick={props.toggle}>Cancelar</button>
                </footer>
            </div>
        </div>
    )
}