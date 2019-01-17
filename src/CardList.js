import React from 'react';
import Card from './Card';


const CardList = ({ Pokemon }) => {
    const cardComponent = Pokemon.map((user, i) => {
        return <Card id={ Pokemon[i].id } name={ Pokemon[i].name } type={ Pokemon[i].type }/>
    });
    return (
        <div>
            { cardComponent }
        </div>
    );
}

export default CardList;