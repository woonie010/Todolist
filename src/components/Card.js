import React from 'react';
import './Card.css';

const Card = ({ what, who, id, handleClickDelete }) => {
    return (
        <div className="card">
            <div className="card-what">{what}</div>
            <div className="card-who">{who}</div>
            <button onClick={() => handleClickDelete(id)}>Delete</button>
        </div>
    );
}





export default Card;