// Modulos
import React from 'react';
import { UserModal } from './Home/UserModal';

const Home = (props) => {
    // Toggle para el Modal
    
    const toggleModal = (event) => {
        const target = event.target.dataset.target;
        document.getElementById(target).classList.toggle('is-active');
    }

    return (
        <div className="hero is-primary is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <h1 className="subtitle">{props.messages.home_title}</h1>
                    <h1 className="title">{props.messages.home_welcome}</h1>
                    <p>{props.messages.home_lang+props.messages[props.actualLang]}</p>
                    <button className="button is-warning" onClick={()=>{props.changeLang("es")}}>{props.messages.es}</button>
                    <button className="button is-warning" onClick={()=>{props.changeLang("en")}}>{props.messages.en}</button>
                    <button className="button is-success" data-target={"userModal"} onClick={toggleModal}>Comenzar</button>
                </div>
            </div>
            <UserModal nameId={"userModal"} toggle={toggleModal} />
        </div>
    )
}

export default Home;