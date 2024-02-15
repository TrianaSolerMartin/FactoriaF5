import React from "react"
import styled from "styled-components";

const BotonGuay = styled.button
 `
  background-color: pink;
  border: 2px solid pink;
  border-radius: 5px;
  color: white;
  padding: 10px;
  box-shadow: 5px 5px 5px 0px lightgray;
  `
  ;

const Button =() => {
    return  (<BotonGuay>Boton con estilo</BotonGuay>);
};

export default Button;