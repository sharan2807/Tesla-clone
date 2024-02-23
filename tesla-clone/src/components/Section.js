import React from "react";
import styled from "styled-components";

function Section({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          {leftBtnText && <LeftButton>{leftBtnText}</LeftButton>}
          {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
        </ButtonGroup>
        <DownArrow src="images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vh;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  //   background-image: url("images/model-s.jpg");
  display: flex;
  flex-direction: column; //now since we switched direction, now justify content will be for vertical spacing & align items for horizontal spacing.
  justify-content: space-between; //now vertical
  align-items: center; //now horizontal
  background-image: ${(props) => `url("images/${props.bgImage}")`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  width: 256px;
  height: 40px;
  background-color: rgba(23, 26, 32, 0.8);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;
`;
const Buttons = styled.div``;
