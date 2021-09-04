import styled from "styled-components";

const ToggleContainer = styled.div`
  position: relative;
  cursor: pointer;

  > .toggle-container {
    width: 40px;
    height: 18px;
    border-radius: 30px;
    background-color: gainsboro;
    &.toggle--checked {
      background-color: rgb(74, 74, 74);
      transition: all 1s ease-in-out;
    }
    &.toggle--unChecked {
      background-color: gainsboro;
      transition: all 0.5s ease-in-out;
    }
  }

  > .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: rgb(26, 26, 26);
    &.toggle--checked {
      transition: all 0.5s ease-in-out;
      left: 23px;
    }
    &.toggle--unChecked {
      transition: all 0.5s ease-in-out;
      left: 1px;
    }
  }
`;

function Toggle({ isOn, toggleHandler }) {
  return (
    <div>
      <ToggleContainer onClick={toggleHandler}>
        <div
          className={`toggle-container ${
            isOn ? "toggle--checked" : "toggle--unChecked"
          }`}
        />
        <div
          className={`toggle-circle ${
            isOn ? "toggle--checked" : "toggle--unChecked"
          }`}
        />
      </ToggleContainer>
    </div>
  );
}

export default Toggle;
