import styled from "styled-components"

export default styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 5px;
  background-color: rgb(230, 230, 230);
  border-radius: 15px;

  & > button {
    background-color: transparent;
    border-radius: 15px;
    height: 40px;
    white-space: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 12px;
    &.active {
      background-color: white;
    }
  }
`
