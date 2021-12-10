 //Write your Character component here
export default function Character(props) {
    console.log(props)

    return (
        <article classNAme="character">
            <h2>{props.Character.name}</h2>
            <img src={props.character.name} alt={props.person.image} />
        </article>
    )
}







/* import React, { useState } from 'react'; 

const Character = (props) => {
   const { } = props; 
    return (

    );
};

export default Character; */