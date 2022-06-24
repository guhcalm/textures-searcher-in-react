import styled from "styled-components"

export default styled.main`
  width: 100%;
  min-height: 100%;
  background-color: white;
`

export const Cover = styled.section`
  width: 100%;
  height: 200px;
  background-color: rgb(230, 195, 185);
`

export const Avatar = styled.section`
  z-index: 2;
  position: absolute;
  left: 50%;
  top: calc(200px);
  transform: translate(-50%, -50%);
  border-radius: 50%;
  padding: 5px;
  background-color: white;
  height: 100px;
  width: 100px;
  & > img {
    width: 100%;
    height: 100%;
    background-color: rgb(230, 230, 230);
    border-radius: 50%;
    object-fit: cover;
  }
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
  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    width: calc(100% - 60px);
    border-bottom: 1px solid rgb(230, 230, 230);
  }
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
    font-size: 15px;
    position: relative;
    & > img {
      height: 15px;
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
