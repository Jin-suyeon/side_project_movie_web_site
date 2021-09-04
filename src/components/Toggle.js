import React from "react";
import styled from "styled-componets";

const ToggleContainer = styled.div`
  position: relative;
  margin-top: 8rem;
  left: 47%;
  cursor: pointer;

  > .toggle-container {
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background-color: #8b8b8b;
    // TODO : .toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현합니다.
    &.toggle--checked {
      background-color: #4000c7;
      transition: all 1s ease-in-out;
    }
    &.toggle--unChecked {
      background-color: #8b8b8b;
      transition: all 0.5s ease-in-out;
    }
  }

  > .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #ffffff;
    // TODO : .toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현합니다.
    &.toggle--checked {
      transition: all 0.5s ease-in-out;
      left: 27px;
    }
    &.toggle--unChecked {
      transition: all 0.5s ease-in-out;
      left: 1px;
    }
  }
`;

function Toggle() {
  return (
    <div>
      <ToggleContainer>
        <div></div>
        <div></div>
      </ToggleContainer>
    </div>
  );
}

export default Toggle;
