import styled from "styled-components"

export default styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 200px;
  background-color: white;
  overflow: hidden;
  & > li {
    position: relative;
    list-style: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: 100;
    gap: 20px;
    padding: 10px 20px;

    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 12px;
    color: #000;

    & > img {
      height: 20px;
    }
  }
`
