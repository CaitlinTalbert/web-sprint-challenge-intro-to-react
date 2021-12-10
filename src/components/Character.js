 //Write your Character component here
import React from 'react'; 
import styled from 'styled-components'; 

const H2 = styled.h2`
    font-family: 'Trispace', sans-serif;
    text-align: center; 
    font-weight: bold; 
    font-size: 2rem; 
    color: #14213D; 
    text-shadow: 2px 2px #4D194D;
    transition: all 0.2s ease-in-out; 
    &:hover {
        transition: all 0.2s ease-in-out; 
        background-color: #272640; 
    }
    `




const Character = (props) => {
    console.log(props)

    return (
       <H2 key={"characterArticle-" + props.character.id}>{props.character.name}</H2>
    );
};

export default Character; 