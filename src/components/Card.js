import React from 'react';
import './Card.css';

const Card = ({ what, who, todo }) => {
    return (
        <div className="card">
            <div className="card-what">{what}</div>
            <div className="card-who">{who}</div>
            <button onClick={cardDelete(todo)}>Delete</button>
        </div>
    );
}

function cardDelete(arr) {
    let newarr = arr;
    console.log(newarr);
}




export default Card;