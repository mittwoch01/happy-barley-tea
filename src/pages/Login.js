import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SectionWrapper, WrapperDiv } from "../components/common/Common";

const LoginDiv = styled.section`
  width: 100%;
  background-color: #fff;
`;

const LoginForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: auto;
  margin-bottom: 20px;
  fieldset {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  input {
    width: 400px;
    height: 60px;
    margin-bottom: 20px;
    border-radius: 10px;
    background-color: rgba(244, 244, 244);
  }
  button {
    width: 400px;
    height: 60px;
    color: #ffffff;
    margin-bottom: 20px;
    border-radius: 10px;
    background-color: rgba(51, 51, 51);
  }
  p {
    margin-top: 40px;
  }
  a {
    display: block;
    width: 400px;
    height: 60px;
    padding: 19px 20px;
    border: 1px solid #333;
    border-radius: 10px;
    font-weight: bold;
    text-align: center;
    background-color: #ffffff;
  }
`;

const ForgotLogin = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  li {
    position: relative;
    margin-left: 20px;
    &::after {
      position: absolute;
      top: 2px;
      right: -10px;
      content: "";
      display: block;
      width: 1px;
      height: 14px;
      background-color: #333;
    }
    &:last-child::after {
      display: none;
    }
  }
`;

const SnsLogin = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin-top: 40px;
  li {
    width: 300px;
    height: 50px;
    padding: 11px 20px;
    border-radius: 10px;
    background-color: #eee;
  }
  button {
    width: 100%;
    height: 100%;
    background-color: transparent;
  }
`;

const Login = () => {
  return (
    <LoginDiv>
      <SectionWrapper padding={"200px 0 310px"}>
        <LoginForm>
          <legend></legend>
          <fieldset>
            <label></label>
            <input />
            <label></label>
            <input />
            <button>로그인</button>
          </fieldset>
          <WrapperDiv flexDirection={"row"}>
            <ForgotLogin>
              <li>아이디 찾기</li>
              <li>비밀번호 찾기</li>
            </ForgotLogin>
          </WrapperDiv>
          <WrapperDiv>
            <SnsLogin>
              <li>
                <button>네이버</button>
              </li>
              <li>
                <button>카카오</button>
              </li>
              <li>
                <button>페이스북</button>
              </li>
            </SnsLogin>
            <p>싱글플러스 회원가입하고 내 일상의 솔루션을 찾아보세요</p>
          </WrapperDiv>
          <WrapperDiv>
            <Link to="/join">회원가입</Link>
          </WrapperDiv>
        </LoginForm>
      </SectionWrapper>
    </LoginDiv>
  );
};

export default Login;