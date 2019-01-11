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
        <div className="field">
            <label className="label">{label}</label>
            <div className="control">
                <Control.text className="input" model={"."+nameId} id={nameId} name={nameId} placeholder={label} 
                                validators={validators}  />
                <Errors className="help is-danger" model={"."+nameId} show="touched"
                        messages={valMessages} />
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
        <div className="field">
            <label className="label">{label}</label>
            <div className="control">
                <Control.input className="input" type="number" model={"."+nameId} id={nameId} name={nameId} min={min} max={max} placeholder={label}
                                validators={validators}  />
                <Errors className="help is-danger" model={"."+nameId} show="touched"
                        messages={valMessages} />
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
        <div className="field">
            <label className="label">{label}</label>
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
        <div className="field">
            <label className="label">{label}</label>
                <div className="control">
                    {radioButtons}
                    <Errors className="help is-danger" model={"."+nameId} show="touched"
                            messages={valMessages} />
            </div>
        </div>
    )
}

export const FieldButtons = ({label, items, nameId, required, messages}) => {

    const onClick = (event) => {
        const buttons = [...document.getElementById(event.target.dataset.target).children];
        buttons.forEach( b => {
            if (b.children[0].checked) {
                b.children[0].classList.add('is-success');
                b.children[1].classList.add('is-outlined');
            } else {
                b.children[0].classList.remove('is-success');
                b.children[1].classList.remove('is-outlined');
            }
        });
        
    }

    const validators = {
        required: required ? isRequired : notRequired,
    };

    const valMessages= {
        required: messages.required,
    };

    const buttons = items.map( (label, i) => (
        <label className="radio buttons is-groupped has-addons"  key={`${label}-${i}`}>
            <Control.radio className="button is-dark" data-target={nameId} model={"."+nameId} name={nameId} value={label} 
                            validators={validators} placeholder={label} onClick={onClick}/>
            <p className="button is-info">{label}</p>
        </label>
    ));

    return (
        <div className="field">
            <label className="label">{label}</label>
                <div id={nameId}className="control">
                    {buttons}
                    <Errors className="help is-danger" model={"."+nameId} show="touched"
                            messages={valMessages} />
            </div>
        </div>
    )
}
