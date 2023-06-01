import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit, reset } = useForm();
  return (
    <Wrapper>
      <Box title="true">
        <Title>행사 참석 여부</Title>
        <Description>
          행사장 주소: 서울시 강남구 가나다로 123, 12345 <br />
          연락처 정보: (+82)000-0000 또는 abcd@gmail.com
        </Description>
      </Box>
      <form
        onSubmit={handleSubmit((data) => {
          alert(JSON.stringify(data));
        })}
      >
        <Box>
          <Label htmlFor="name">
            참석하는 사람들의 성함을 알려주세요. <Requried>*</Requried>
          </Label>
          <Input
            text="true"
            id="name"
            type="text"
            name="name"
            placeholder="내 답변"
            {...register("name", {
              required: "이름은 필수 입력입니다.",
              minLength: {
                value: 2,
                message: "이름을 2글자 이상 작성해주세요.",
              },
            })}
          />
        </Box>
        <Box>
          <Label htmlFor="how">행사에 관해 어떻게 알게 되셨나요?</Label>
          <RadioBox>
            <Input
              type="radio"
              name="how"
              value="웹사이트"
              {...register("how")}
            />
            웹사이트
          </RadioBox>
          <RadioBox>
            <Input type="radio" name="how" value="친구" {...register("how")} />
            친구
          </RadioBox>
          <RadioBox>
            <Input
              type="radio"
              name="how"
              value="뉴스레터"
              {...register("how")}
            />
            뉴스레터
          </RadioBox>
          <RadioBox>
            <Input type="radio" name="how" value="광고" {...register("how")} />
            광고
          </RadioBox>
        </Box>
        <Box>
          <Label htmlFor="question">의견 또는 질문</Label>
          <Input
            text
            id="question"
            type="text"
            name="question"
            placeholder="내 답변"
            {...register("question")}
          />
        </Box>
        <BtnBox>
          <SubmitBtn type="submit">제출</SubmitBtn>
          <RemoveBtn onClick={() => reset()}>양식 지우기</RemoveBtn>
        </BtnBox>
      </form>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  width: 90vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  background-color: lightgray;
  padding: 5vw;
`;

const Box = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  border-radius: 10px;
  border-top: ${(props) =>
    props.title ? "2vw solid darkred" : "0px solid darkred"};
  margin: 1vw 0;
  padding: 1vw;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin: 1vw;
`;

const Description = styled.div`
  margin: 1vw;
  font-size: 1rem;
`;

const Label = styled.label`
  margin: 1vw;
  font-size: 1rem;
`;

const Input = styled.input`
  width: ${(props) => (props.text ? "86vw" : "auto")};
  margin: 1vw;
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid lightgray;
  padding: 1vw;
`;

const RadioBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BtnBox = styled.div`
  width: 92vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SubmitBtn = styled.button`
  width: 10vw;
  height: 5vw;
  background-color: darkred;
  border: none;
  color: white;
  font-size: 1.3rem;
  border-radius: 10px;
  cursor: pointer;
`;

const RemoveBtn = styled.button`
  width: 12vw;
  height: 5vw;
  background-color: transparent;
  border: none;
  color: darkred;
  font-size: 1.3rem;
  border-radius: 10px;
  cursor: pointer;
`;

const Requried = styled.span`
  color: red;
`;
