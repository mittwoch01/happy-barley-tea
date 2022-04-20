import React from "react";
import styled from "styled-components";

const ItemBox = styled.div`
  width: calc( (100% / 4) - 40px );
  height: auto;
  //background-color:#ade;

`
const ItemFigure = styled.div`
  width: 100%;
  height: 290px;
  background-color:#55e;
`
const ItemFigcaption = styled.div`
  width: 100%;
  height: 70px;
  margin-top: 20px;
  //background-color: #fea;
  font-size: 24px;
  color: #fff;
`
const ItemSection = (props) => {

  return (
      <ItemBox>
        <ItemFigure>{props.image}</ItemFigure>
        <ItemFigcaption>{props.caption}</ItemFigcaption>
      </ItemBox>
     
    );
};

export default ItemSection;