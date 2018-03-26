import React from 'react'
import styled from 'styled-components';
import logo from './logo.svg';

const CardTL = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
`
const CardTR = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`
const CardBL = styled.div`
  position: absolute;
  bottom: 5px;
  left: 5px;
`
const CardBR = styled.div`
  position: absolute;
  bottom: 5px;
  right: 5px;
`
const CardM = styled.div`
  position: absolute;
  left: 5px;
  right: 5px;
  top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);  
`

const StyledCard = (props) => {
  const Card = styled.div`
    width: 200px;
    height: 300px;
    margin: 5px;
    color: #56D5FA;
    font-size: 20px;
    background-color: #FFFFFF;
    border: 1px solid #F5F5F5;
    border-radius: 4px;
    box-shadow: 0px 1px 6px #F5F5F5;

    position: ${props.c === 'default' ? 'relative' : 'absolute'};
    top: ${props.c === 'tl' ? props.s+'px' : props.c === 'tr' ? props.s+'px' : 'unset'};
    left: ${props.c === 'tl' ? props.s+'px' : props.c === 'bl' ? props.s+'px' : 'unset'};
    right: ${props.c === 'tr' ? props.s+'px' : props.c === 'br' ? props.s+'px' : 'unset'};
    bottom: ${props.c === 'bl' ? props.s+'px' : props.c === 'br' ? props.s+'px' : 'unset'};
  `

  return (
    <Card>
      <CardTL>{props.n}</CardTL>
      <CardTR>{props.n}</CardTR>
      <CardM>
        <img src={logo} className="App-logo" alt="logo" />
      </CardM>
      <CardBL>{props.n}</CardBL>
      <CardBR>{props.n}</CardBR>
    </Card>
  )
}

export default StyledCard;