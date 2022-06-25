import styled from "styled-components"

export default styled.main`
  width: 100%;
  min-height: 100%;
  background-color: white;
`

export const Cover = styled.section`
  width: 100%;
  height: 150px;
  background-color: rgb(230, 195, 185);
`

export const Avatar = styled.img`
  z-index: 2;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 3px solid white;
  background-color: rgb(230, 230, 230);
  height: 100px;
  width: 100px;
  object-fit: cover;
  overflow: hidden;
`

export const Info = styled.section`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color: white;
  position: relative;
  & > button {
    cursor: pointer;
    user-select: none;
    padding: 8px 10px;
    border-radius: 5px;
    border: 1px solid rgb(230, 230, 230);
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 10px;
    background-color: transparent;
    position: absolute;
    right: 10px;
    top: 10px;
    font-weight: 900;
  }
  & > h1 {
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 30px;
    position: relative;
    & > img {
      height: 25px;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(calc(100% + 3px), -50%);
      user-select: none;
    }
  }
  & > span {
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 12px;
  }
`
