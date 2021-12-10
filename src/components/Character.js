 //Write your Character component here
import React from 'react'; 

const Character = (props) => {
    console.log(props)

    return (
       <h1 key={"characterArticle-" + props.character.id}>{props.character.name}</h1>
    );
};

export default Character; 