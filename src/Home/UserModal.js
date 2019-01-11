// Modulos
import React from 'react';
import { Form } from 'react-redux-form'; 
import {FieldText, FieldNumber, FieldRadio, FieldSelect} from '../FormComponents/FieldsHorizontal';
import {FieldButtons} from '../FormComponents/Field';


export const UserModal = (props) => {
    const onSubmit = (values) => { props.submitUser(values.firstname, values.lastname, values.age, values.genre, values.continent, values.zone, values.colorFavourite); };
    const valMessages = {
        required: " Requerido.",
        minLength: " Minimo de caracteres es ",
        maxLength: " Maximo de caracteres es ",
        minNumber: " Minimo es ",
        maxNumber: " Máximo es ",
    }
    
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
                        <Form model="userForm" onSubmit={(values) => onSubmit(values) }>
                            <FieldText label="Nombre" nameId="firstname" min={3} max={20} messages={valMessages} required/>
                            <FieldText label="Apellido" nameId="lastname" min={3} max={20} messages={valMessages} required/>
                            <FieldNumber label="Edad" nameId="age" min={0} max={120}  messages={valMessages} required/>
                            <FieldRadio label="Genero"  nameId="genre" items={["Hombre","Mujer","No-Binario"]}  messages={valMessages} required/>
                            <FieldSelect label="Continente" nameId="continent" items={["America del Sur", "Europa", "Otro"]}  messages={valMessages} required />
                            <FieldSelect label="Tipo de Zona" nameId="zone" items={["Ciudad grande", "Pueblo", "Otro"]} messages={valMessages} required />
                            <FieldText label="Color Favorito" nameId="colorFavourite" messages={valMessages} required/>
                            <FieldButtons label="Genero"  nameId="genres" items={["Hombre","Mujer","No-Binario"]}  messages={valMessages} required/>
                            <div className="field is-grouped is-grouped-centered">
                                <div className="control">
                                    <button className="button is-success" type="submit">Avanzar</button>
                                </div>
                                <div className="control">
                                    <button className="button is-danger" data-target={props.nameId} onClick={props.toggle}>Cancelar</button>
                                </div>
                            </div>
                        </Form>

                    </div>
                </section>
            </div>
        </div>
    )
}