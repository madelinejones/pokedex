import React from 'react';

const Card = ({ name, type, id }) => {
    return (
        <div className='tc bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt={`${name}`} width='150px' height='150px' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}></img>
            <div>
                <h2>{name}</h2>
                <p>{type}</p>
            </div>
        </div>
    );
}



export default Card;