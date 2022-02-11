import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { CardCaption, CardImage } from "../common/Common";

const Card = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
const CardContent = styled.div`
  width: 100%;
  height: auto;
  padding: 0.3rem 0;

  dt {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 5px;

    & span {
      color: #999;
    }

    &:last-child {
      font-size: 20px;
      font-weight: 400;
    }
  }
`;

const IconDiv = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 48px;
  height: 48px;
  background-color: #fff;
  border-radius: 100%;
  font-size: 30px;
  line-height: 53px;
  text-align: center;
  cursor: pointer;
`;

const SingleEditConList = ({ data }) => {
  return (
    <Card>
      <IconDiv>
        <FaRegHeart />
      </IconDiv>
      <CardImage>
        <Link to="/">
          <img alt="" src={`${data.image}`}></img>
        </Link>
      </CardImage>
      <CardContent>
        <CardCaption>
          <dt>
            <Link to="/">
              <span>{data.mainTag}</span>
              <span>{data.hashTag}</span>
            </Link>
          </dt>
          <dd>
            <Link to="/"> {data.mainTitle}</Link>
          </dd>
        </CardCaption>
      </CardContent>
    </Card>
  );
};

export default SingleEditConList;
