import React, { useState } from 'react';
import './Card.css';

const Card = ({ what, who, clicked, id, handleClickDelete, handleClickCard, handleModify, handleDoing }) => {
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
                        <button onClick= {() => handleModify(id,modWhat,modWho)}>Modify</button>
                    </div>
                    :
                    <div>
                        <div className="card-what">{what}</div>
                        <div className="card-who">{who}</div>
                    </div>
            }
            <div onClick={handleClickInput}>
            <button onClick={() => handleClickDelete(id)}>Delete</button>
            <button onClick={() => handleDoing(id)}>Done</button>
            </div>
        </div>
    );
}





export default Card;