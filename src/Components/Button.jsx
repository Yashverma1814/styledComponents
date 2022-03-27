import React from "react";
import styled from "styled-components";

const Button = styled.button`
    border: none;
    border-radius: 2px;
    color: white;
    background-color: aqua;
    margin: 5px;
    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: background-color 1s, color 1s;
    }
`;
const Button1 = styled.button`
    border: 1px solid black;
    border-radius: 2px;
    margin: 5px;
    background-color: transparent;
`;
const Button2 = styled.button`
    border: 1px solid black;
    border-radius: 2px;
    margin: 5px;
    background-color: transparent;
    border-style: dashed;
`;
const Button3 = styled.button`
    border: none;
    border-radius: 2px;
    color: black;
    background-color: transparent;
    margin: 5px;
    &:hover{
        background-color: grey;
        color: black;
        border: 1px solid black;
        transition: background-color 1s, color 1s;
    }
`;
const Button4 = styled.button`
    border: none;
    border-radius: 2px;
    color: Blue;
    background-color: transparent;
    margin: 5px;
    &:hover{
        color: red;
    }
`;

//  const Button =({children, onClick}) =>{
//      return(
//          <button className="btn" onClick={onClick}>
//              {children}
//          </button>
//      )
//  }
 export {Button};
 export {Button1,Button2,Button3,Button4};