import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import ItemSection from "./ItemSection";

const ItemDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  flex-wrap:wrap;
  width: 100%;
  height: ${(props) => props.height || "100%"};
  margin-top: 40px;
  //margin-right: 20px;
  //background-color: #fff;

  @media screen and (max-width: 320px) {
    display:flex;
    flex-dirextion: column;
    gap: 10px;
  }
`;

function ItemDivContent(props) {

  const expenses = [
    { image : 'img_01', caption: '클래식한 프레피룩의 유쾌한 반란'},
    { image : 'img_02', caption: '스타들의 베리 페리 룩'},
    { image : 'img_03', caption: '트렌치코트 스타 일링 포인트 5'},
    { image : 'img_04', caption: '어떤 청바지를 입을까'}
  ];

  return (
    <ItemDiv>
      <ItemSection 
        image={expenses[0].image} 
        caption={expenses[0].caption} />
      <ItemSection 
        image={expenses[1].image} 
        caption={expenses[1].caption} />
      <ItemSection 
        image={expenses[2].image} 
        caption={expenses[2].caption} />
      <ItemSection 
        image={expenses[3].image} 
        caption={expenses[3].caption} />
    </ItemDiv>
  );
}

export default ItemDivContent;

