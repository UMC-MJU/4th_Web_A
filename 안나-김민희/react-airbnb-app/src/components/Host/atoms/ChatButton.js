import React from "react";
import styled from "styled-components";

const ChatButton = () => {
  return (
    <Chat>
      <Button>슈퍼호스트와 채팅하기</Button>
    </Chat>
  );
};

export default ChatButton;

const Chat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 10px;
`;

const Button = styled.div`
  width: 200px;
  height: 48px;
  background-color: white;
  font-size: 18px;
  font-weight: 600;
  color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  border: 2px solid black;
`;
