import styled from "styled-components"

export default styled.button`
  z-index: 2;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border: 1.8px solid white;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    height: 18px;
  }
`
