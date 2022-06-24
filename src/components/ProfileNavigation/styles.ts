import styled from "styled-components"

export default styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  & > li {
    flex: 1;
    padding: 5px;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 10px;
    cursor: pointer;
    font-weight: 900;
    height: 30px;
    color: rgb(230, 230, 230);
  }
  .active {
    color: black;
  }
`
