 //Write your Character component here

/*
 export default function Character(props) {
    console.log(props)

    return (
        <article className="character">
            <h2>{props.character.name}</h2>
            <img src={props.character.name} alt={props.character.image} />
        </article>
    );
};
*/

import React from 'react'; 

const Character = (props) => {
    console.log(props)

    return (
       <h1 key={"characterArticle-" + props.character.id}>{props.character.name}</h1>
    );
};

export default Character; 