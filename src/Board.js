import React from "react";
import styled from 'styled-components';
import StyledCard from "./Card";

const Board = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 95%;
  margin: 20px auto;
  min-height: 800px;
  position: relative;
  border: 1px solid #000000;
  background-image: url("https://picsum.photos/1000/1000/?random");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

// const deck = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"][Math.floor(Math.random() * 13)];
// const deck = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];

const StyledBoard = (props) => {
  const cards = props.d.map((d,i) =>{
    return <StyledCard key={i} n={d} c={props.l} s={i*15} />;
  });
  return (
    <Board>
      {cards}
    </Board>
  )
}

export default StyledBoard;