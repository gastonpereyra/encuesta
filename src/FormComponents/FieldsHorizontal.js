// Modulos
import React from 'react';

export const FieldText = ({label, nameId, value, onchange}) => {
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

export const FieldNumber = ({label, nameId, value, onchange, min, max}) => {
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
export const FieldSelect = ({label, nameId, items, value, onchange}) => {

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

export const FieldRadio = ({labels, nameId, value, onchange}) => {
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