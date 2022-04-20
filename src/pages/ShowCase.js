import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router";
import { HeaderSecondTitle, SectionWrapper } from "../components/common/Common";
import ItemDiv from "../components/Showcase/ItemDiv.js";

const ShowCaseDiv = styled.div`
  width: 100%;
  height: auto;
  background-color: rgba(51, 51, 51);
`;

const ShowCaseTitle = styled.div`
  width: 100%;
  height: 100%;
`;

const NewInfo = styled.div`
  position: relative;
  z-index: 100;
  width: 100%;
  height: 880px;
  margin: 144px 0 100px 0;
`;

const NewInfoImg = styled.div`
  width: 100%;
  height: 100%;
  background-color: #777;
`;
const NewCaption = styled.div`
  position: absolute;
  z-index: 1000;
  left: 110px;
  bottom: 70px;
  width: 100%;
  height: 90px;
  dl {
    width: 100%;
    height: auto;
    color: #fff;
    dt {
      margin-bottom: 20px;
      font-size: 32px;
    }
    dd {
      font-size: 18px;
    }
  }
`;

const WorkInNew = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 580px;
  margin-bottom: 20px;
  background-color: #FFC461;
  figure {
    width: 840px;
    height: 580px;
    background-color: #fff;
  }
  figcaption {
    padding: 0 40px 0 40px;
    font-size: 32px;
    color: #000;
    line-height: 580px;
  }
`;

const Item = styled.div`
  width: 100%;
  height: 382px;
  margin-bottom: 40px;
  //background-color: #fff;
`;

const ListTitle = styled.div`
  width: 100%;
  height: auto;
  padding-top: 90px;
`;

const ShowCaseList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 325px;
  margin-top: 27px;
  margin-bottom: 100px;
`;
const ListDiv = styled.div`
  width: 440px;
  height: 325px;
  figure {
    width: 400px;
    height: 275px;
    margin-bottom: 20px;
    background-color: #fff;
  }
  figcaption {
    font-size: 24px;
    color: #fff;
  }
`;

const ShowCase = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ShowCaseDiv>
      <SectionWrapper width="1320px" padding="90px 0  100px">
        <ShowCaseTitle>
          <HeaderSecondTitle fontSize={"44px"} color="#fff" >showcase</HeaderSecondTitle>
        </ShowCaseTitle>
        <NewInfo>
          <NewInfoImg>img</NewInfoImg>
          <NewCaption>
            <dl>
              <dt>서울 신상 맛집 업데이트</dt>
              <dd>
                새로운 한 해만큼 맛집 리스트도 새롭게 재정비할 때. 서울 핫한 신상 맛집만 모았다.
              </dd>
            </dl>
          </NewCaption>
        </NewInfo>
        <WorkInNew>
          <figure>img</figure>
          <figcaption>봄 맞이 폰꾸 스타일 5</figcaption>
        </WorkInNew>
        <Item>
          <ItemDiv />
        </Item>
        <ListTitle>
          <HeaderSecondTitle color="#fff" fontSize={"44px"}>showcase list</HeaderSecondTitle>
        </ListTitle>
        <ShowCaseList>
          <ListDiv>
            <figure>img</figure>
            <figcaption>효소 다이어트 전성시대</figcaption>
          </ListDiv>
          <ListDiv>
            <figure>img</figure>
            <figcaption>한겨울의 미술 산책</figcaption>
          </ListDiv>
          <ListDiv>
            <figure>img</figure>
            <figcaption>호랑이 기운 맛보실래요?</figcaption>
          </ListDiv>
          <ListDiv>
            <figure>img</figure>
            <figcaption>빵순이를 위한 건강 빵집 4</figcaption>
          </ListDiv>
        </ShowCaseList>
      </SectionWrapper>
    </ShowCaseDiv>
  );
};

export default ShowCase;
