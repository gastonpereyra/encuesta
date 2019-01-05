// Modulos
import React from 'react';

const FieldText = ({label, nameId, value, onchange}) => {
    return (
        <div className="field is-horizontal">
            <div className="field-label">
                <label className="label">{label}</label>
            </div>
            <div className="field-body">
                <div className="field">
                    <div className="control">
                        <input className="input" type="text" name={nameId} placeholder={label} value={value} onChange={onchange}/>
                    </div>
                </div>  
            </div>
        </div>
    )
}

const FieldNumber = ({label, nameId, value, onchange, min, max}) => {
    return (
        <div className="field is-horizontal">
            <div className="field-label">
                <label className="label">{label}</label>
            </div>
            <div className="field-body">
                <div className="field is-narrow">
                    <div className="control">
                        <input className="input" type="number" name={nameId} min={min} max={max} placeholder={label} value={value} onChange={onchange}/>
                    </div>
                </div>  
            </div>
        </div>
    )
}
const FieldSelect = ({label, nameId, items, value, onchange}) => {

    const opciones = items.map( (item ,index) => 
        <option key={`${label}-${index}`} value={item}>{item}</option>  
    );

    return (
        <div className="field is-horizontal">
            <div className="field-label">
                <label className="label">{label}</label>
            </div>
            <div className="field-body">
                <div className="field">
                    <div className="control">
                        <div className="select">
                            <select name={nameId} onChange={onchange} required>
                                {opciones}
                            </select>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}

const FieldRadio = ({labels, nameId, value, onchange}) => {
    const radioButtons = labels.map( (label, i) => (
        <label class="radio"  key={`${label}-${i}`}>
            <input type="radio" name={nameId} value={label}/>
            {label}
        </label>
    ));

    return (
        <div className="field is-horizontal">
            <div className="field-label">
                <label className="label"></label>
            </div>
            <div className="field-body">
                <div class="field">
                    <div class="control">
                        <label class="radio">
                            {radioButtons}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

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