import React, { useState } from 'react';


const Done = ({ what, who}) => {
    return(
        <div>
                        <div className="card-what">{what}</div>
                        <div className="card-who">{who}</div>
                    </div>

    );


}

export default Done