import React from 'react' 
import './welcomepage.css';
import Logo from './streamlobby.png';

const Splashpage = () => {
    return (
        <div className="splash">
            <img src={Logo} alt='Stream Lobby'/>
            <br></br>
            <input type="text" /> 
            <br></br>
            <input type="text" />
            <br></br>
            <input type="text" />
            <br></br>
            <input type="text" />
        </div>
    )  
};

export default Splashpage;