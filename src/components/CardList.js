import React from 'react';
import Card from './Card';

//we are destructuring robots into parameter because we need to grab robot info
//we are grabbing robot info already from ./Card

//in CardComponent, we are iterating thru each robot user and info

const CardList = ({robots}) => {
    return (
    <div>
        {
    robots.map((user, i) =>{
        return( 
        <Card
            key={i} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email} 
            /> 
        ); 
        })
}
    </div>
    );
}

export default CardList;