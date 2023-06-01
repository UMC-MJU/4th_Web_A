import React from "react";
import { styled } from "styled-components";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <InputTodo />
        <TodoList />
      </Wrapper>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Wrapper = styled.div`
  border: 1px solid gray;
  margin: 20px;
  padding: 20px;
  width: 40vw;
`;
