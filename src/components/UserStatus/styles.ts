import styled from "styled-components"

export default styled.div`
  margin: 30px 0;
  border: 1px solid rgb(230, 230, 230);
  background-color: rgb(230, 230, 230);
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  gap: 1px;
  & > div {
    height: 60px;
    width: 120px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 18px;
    font-weight: 900;

    &::after {
      display: block;
      position: absolute;
      left: 50%;
      bottom: 5px;
      transform: translateX(-50%);
      font-size: 10px;
      font-weight: 100;
    }
  }

  & > div:nth-child(1) {
    &::after {
      content: "loved";
    }
  }
  & > div:nth-child(2) {
    &::after {
      content: "following";
    }
  }
  & > div:nth-child(3) {
    &::after {
      content: "follows";
    }
  }
`
