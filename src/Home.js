// Modulos
import React from 'react';

const Home = (props) => {
    return (
        <div className="hero is-primary is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <p>{props.message.home_welcome}</p>
                </div>
            </div>
        </div>
    )
}

export default Home;