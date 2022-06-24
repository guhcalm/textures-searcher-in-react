import styled from "styled-components"

export default styled.main`
  width: 100vw;
  height: 100vh;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poiret One", cursive;
  font-size: 20px;
  font-weight: 500;
  color: white;
  background-color: black;

  & > span {
    font-size: 30px;
    padding: 5px 0;
    padding-right: 15px;
    margin-right: 15px;
    border-right: 1px solid white;
  }
`
