import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const ItemDiv = styled.div`
  display: flex;
  justify-content: space-between;
   //align-items:center;
  flex-wrap:wrap;
  width: 100%;
  height: ${(props) => props.height || "100%"};
  margin-right: 20px;
  background-color: #fff;

  @media screen and (max-width: 320px) {
    display:flex;
    flex-dirextion: column;
    gap: 10px;
  }
`;

const ItemSection = styled.div`
  width: calc(100% / 4);
  height: auto;
  // padding: 0.3rem 0;
  background-color:#ade;
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
  background-color: #fea;
  font-size: 24px;
`

function ItemDivContent(props) {

  return (
    <ItemDiv>
      <ItemSection>
        <ItemFigure>{props.image}</ItemFigure>
        <ItemFigcaption>{props.caption}</ItemFigcaption>
      </ItemSection>
    </ItemDiv>
  );
}

export default ItemDivContent;

// const ItemDivContent = (props) => {
//   console.log(props);
//    
//   return (
//     <ItemDiv>
//       <ItemCard height={'290px'} />
//         <Link to="/">
//           <img alt="" src=""/>
//         </Link>
//       <ItemContent></ItemContent>
//     </ItemDiv>
//   )
// }
// 
// 
// const ItemDivSample = () => {
//     return (
//         <ItemDiv>
//           <figure>img</figure>
//           <figcaption>나홀로 즐겁게 혼밥</figcaption>
//         </ItemDiv>
//     );
// };
