// Modulos
import React from 'react';
import { Control, Errors } from 'react-redux-form'; 

const isRequired = (val) => val && val.length;
const notRequired = (val) => true;
const isRequiredSelect = (val) => val && val.length && (val !== '-');
const minLength = (len) => (val) => (val) && (val.length >= len);
const maxLength = (len) => (val) => (val) && (val.length <= len);
const minNumber = (min) => (val) => (val) && (val >= min);
const maxNumber = (max) => (val) => (val) && (val <= max);

export const FieldText = ({label, nameId, min, max, required, messages}) => {
    
    const validators = {
        required: required ? isRequired : notRequired,
        minLength: min ? minLength(min) : notRequired,
        maxLength: max ? maxLength(max) : notRequired
    };

    const valMessages= {
        required: messages.required,
        minLength: messages.minLength+min+".",
        maxLength: messages.maxLength+max+".",
    };

    return (
        <div className="field is-horizontal">
            <div className="field-label">
                <label className="label">{label}</label>
            </div>
            <div className="field-body">
                <div className="field">
                    <div className="control">
                        <Control.text className="input" model={"."+nameId} id={nameId} name={nameId} placeholder={label} 
                                        validators={validators}  />
                        <Errors className="help is-danger" model={"."+nameId} show="touched"
                                messages={valMessages} />
                    </div>
                </div>  
            </div>
        </div>
    )
}

export const FieldNumber = ({label, nameId, min, max, required, messages}) => {

    const validators = {
        required: required ? isRequired : notRequired,
        minNumber: min ? minNumber(min) : notRequired,
        maxNumber: max ? maxNumber(max) : notRequired
    };

    const valMessages= {
        required: messages.required,
        minNumber: messages.minNumber+min+".",
        maxNumber: messages.maxNumber+max+".",
    };

    return (
        <div className="field is-horizontal">
            <div className="field-label">
                <label className="label">{label}</label>
            </div>
            <div className="field-body">
                <div className="field is-narrow">
                    <div className="control">
                        <Control.input className="input" type="number" model={"."+nameId} id={nameId} name={nameId} min={min} max={max} placeholder={label}
                                        validators={validators}  />
                        <Errors className="help is-danger" model={"."+nameId} show="touched"
                                messages={valMessages} />
                    </div>
                </div>  
            </div>
        </div>
    )
}
export const FieldSelect = ({label, nameId, items, required, messages}) => {

    const validators = {
        required: required ? isRequiredSelect : notRequired,
    };

    const valMessages= {
        required: messages.required,
    };

    const itemsToMap = ["-"].concat(items);
    const opciones = itemsToMap.map( (item ,index) => 
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
                            <Control.select model={"."+nameId} id={nameId} name={nameId}
                                        validators={validators} >
                                {opciones}
                            </Control.select>
                        </div>
                        
                        <Errors className="help is-danger" model={"."+nameId} show="touched"
                                messages={valMessages} />
                    </div>
                </div>  
            </div>
        </div>
    )
}

export const FieldRadio = ({label, items, nameId, required, messages}) => {

    const validators = {
        required: required ? isRequired : notRequired,
    };

    const valMessages= {
        required: messages.required,
    };

    const radioButtons = items.map( (label, i) => (
        <label className="radio"  key={`${label}-${i}`}>
            <Control.radio model={"."+nameId} name={nameId} value={label} 
                            validators={validators} />
            {" "+label}
        </label>
    ));

    return (
        <div className="field is-horizontal">
            <div className="field-label">
                <label className="label">{label}</label>
            </div>
            <div className="field-body">
                <div className="field">
                    <div className="control">
                        {radioButtons}
                        <Errors className="help is-danger" model={"."+nameId} show="touched"
                                messages={valMessages} />
                    </div>
                </div>
            </div>
        </div>
    )
}

/*
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

*/