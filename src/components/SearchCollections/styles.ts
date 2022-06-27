import styled from "styled-components"

export default styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  padding: 2px;
  height: 30px;
  background-color: rgb(245, 245, 245);
  border-radius: 100vmax;

  & > button {
    background-color: transparent;
    border-radius: 100vmax;
    height: 100%;
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
