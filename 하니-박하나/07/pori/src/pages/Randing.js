import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import panda from "../assets/판다포리.png";
import sad from "../assets/무기력포리.png";
import angry from "../assets/화난포리.png";
import main from "../assets/뒤뚱포리.png"

const RandingDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  color: black;
  margin-top: 5vh;
`;

const SubTitle = styled.span``;

const Form = styled.form`
  display: flex;
  padding: 5vh;
`;

const Result = styled.div`
  width: 40em;
  border: 1px solid;
  padding-bottom: 5vh;
  margin-bottom: 20vh;
  border-radius: 5rem;
  background-color: bisque;
  @media (max-width: 500px) {
    width: 70%;
    background-color: aliceblue;
  }
`;

const Image = styled.img`
  height: 30vh;
`;

const MainImage = styled.img`
    width: 20vw;
    animation: flipImage 2s infinite alternate;

    @keyframes flipImage {
        0% {
            transform: scaleX(1);
        }
        100% {
            transform: scaleX(-1);
        }
    }
`;

const Randing = () => {
  const [station, setStation] = useState();
  const [result, setResult] = useState(null);

  const SearchStation = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?stationName=${station}&dataTerm=month&pageNo=1&numOfRows=1&returnType=json&serviceKey=%2FkR9HCv6YxY%2BIeqWi9UvUKEJOq%2BLYqmmG13nKO1%2BxTsnOnFq0Kfd4%2BwlGPwquoCQRfOXb14SqKhKucCRsv%2BeOw%3D%3D`
      );
      const items = response.data.response.body.items;
      if (items.length === 0) {
        alert("해당 측정소가 없습니다.");
      } else {
        console.log(items);
        setResult(items[0]); // 첫 번째 결과를 상태에 저장
      }
    } catch (error) {
      console.error("에러임", error);
    }
  };

  return (
    <RandingDiv>
        <MainImage src={main} alt="포리는 산책하고 싶어"/>
      <Title>포리는 산책하고 싶어!</Title>
      <SubTitle>포리 표정으로 보는 미세먼지 농도</SubTitle>
      <Form>
        <input
          type="text"
          placeholder="측정소 검색"
          onChange={(e) => setStation(e.target.value)}
        ></input>
        <button onClick={SearchStation}>검색</button>
      </Form>
      {result && (
        <Result>
          <p>측정 시간: {result.dataTime}</p>
          <p>미세먼지 농도: {result.pm10Value} μg/m³</p>
          {result.pm10Value > 80 && result.pm10Value <= 150 && (
            <>
            <Image src={angry} alt="화난 포리" />
            <p>현재 포리의 표정은 매우 나쁨 ㅡㅡ</p>
            <p>잉간 나빠</p>
            </>
          )}
          {result.pm10Value > 30 && result.pm10Value <= 80 && (
            <>
            <Image src={sad} alt="우울 포리" />
            <p>현재 포리의 표정은 조금 우울 ㅜㅜ</p>
            <p>웅니야... 잠깐만이라도 다녀오면 안 되까?</p>
            </>
          )}
          {result.pm10Value <= 30 && (
            <>
              <Image src={panda} alt="행복 포리" />
              <p>현재 포리의 표정은 매우 기쁨! ^_^</p>
              <p>웅니야 산책하러 가자아</p>
            </>
          )}
          {/* 추가적인 결과 정보를 여기에 표시할 수 있습니다 */}
        </Result>
      )}
    </RandingDiv>
  );
};

export default Randing;
