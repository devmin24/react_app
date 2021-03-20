import React from "react";
import styled from "styled-components";

const Score = (props) => {
  return (
    <ScoreContainer>
      <Text>
        <span>르탄이</span> 퀴즈의 <br />
        대한 내 점수는?
      </Text>
      <MyScore>
        <span>100</span>점<p>이 정도면 아주 친한 친구에요!</p>
      </MyScore>
      <Button>랭킹보기</Button>
    </ScoreContainer>
  );
};

const ScoreContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 16px;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h1`
  font-size: 1.5em;
  margin: 0px;
  line-height: 1.4;
  & span {
    background-color: #fef5d4;
    padding: 5px 10px;
    border-radius: 30px;
  }
`;

const MyScore = styled.div``;

const Button = styled.button``;

export default Score;
