import React from "react";
import styled from "styled-components";

import "../styles/styles.css";

const Login = () => {
  return (
    <Wrapper>
      <LoginLabel>로그인</LoginLabel>
      <WrapperA>
        <IdInput type="text" placeholder="아이디를 입력해주세요"></IdInput>
        <PasswordInput
          type="text"
          placeholder="비밀번호를 입력해주세요"
        ></PasswordInput>
      </WrapperA>
      <WrapperB>
        <li>아이디 찾기</li>|<li>비밀번호 찾기</li>
      </WrapperB>
      <WrapperC>
        <LoginButton>로그인</LoginButton>
        <SigninButton>회원가입</SigninButton>
      </WrapperC>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
`;
const LoginLabel = styled.p`
  font-size: 1.2rem;
  padding: 4rem 0 2rem 0;
  font-weight: bolder;
`;
const IdInput = styled.input`
  height: 3rem;
  width: 19rem;
  padding: 0 0 0 1rem;
  border-color: lightgrey;
  border-radius: 5px;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const PasswordInput = styled.input`
  height: 3rem;
  width: 19rem;
  padding: 0 0 0 1rem;
  border-color: lightgrey;
  border-radius: 5px;
  font-size: 1rem;
`;

const LoginButton = styled.button`
  background-color: #5f0080;
  color: white;
  height: 3rem;
  width: 19rem;
  font-weight: bold;
  border-radius: 5px;
  margin-bottom: 0.8rem;
`;
const SigninButton = styled.button`
  background-color: white;
  color: #5f0080;
  height: 3rem;
  width: 19rem;
  font-weight: bold;
  border: 1px solid #5f0080;
  border-radius: 5px;
`;
const WrapperA = styled.div`
  display: flex;
  flex-direction: column;
`;
const WrapperB = styled.div`
  display: flex;
  list-style-type: none;
  margin-left: 10rem;
  font-size: small;
  padding: 1rem 0 1.5rem 0;
`;
const WrapperC = styled.div`
  display: flex;
  flex-direction: column;
`;
