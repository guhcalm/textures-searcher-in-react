import styled from "styled-components"

export default styled.button`
  z-index: 2;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  &::after {
    content: "";
    display: block;
    width: 8px;
    height: 15px;
    background-color: white;
    clip-path: polygon(100% 0, 0 50%, 100% 100%, 4px 50%);
    transform: translateX(-10%);
  }
`
