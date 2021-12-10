 //Write your Character component here
import React from 'react'; 
import styled from 'styled-components'; 

const H1 = styled.h1`
    font-family: sans-serif;
    `




const Character = (props) => {
    console.log(props)

    return (
       <H1 key={"characterArticle-" + props.character.id}>{props.character.name}</H1>
    );
};

export default Character; 