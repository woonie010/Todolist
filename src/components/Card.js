import React, { useState } from 'react';
import './Card.css';

const Card = ({ what, who, clicked, id, handleClickDelete, handleClickCard }) => {
    const [modWhat, setModWhat] = useState(what);
    const [modWho, setModWho] = useState(who);

    const handleChangeWhat = (e) => {
        setModWhat(e.target.value);
    }
    const handleChangeWho = (e) => {
        setModWho(e.target.value);
    }

    const handleClickInput = (e) => {
        e.stopPropagation();
    }

    return (
        <div className="card" onClick={() => handleClickCard(id)} >
            {
                clicked ?
                    <div onClick={handleClickInput}>
                        <input value={modWhat} onChange={handleChangeWhat}  />
                        <input value={modWho} onChange={handleChangeWho}  />
                    </div>
                    :
                    <div>
                        <div className="card-what">{what}</div>
                        <div className="card-who">{who}</div>
                    </div>
            }
            <button onClick={() => handleClickDelete(id)}>Delete</button>
        </div>
    );
}





export default Card;