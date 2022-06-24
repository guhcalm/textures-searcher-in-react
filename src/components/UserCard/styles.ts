import styled from "styled-components"

export default styled.li`
  border: 1px solid rgb(230, 230, 230);
  width: 300px;
  height: 200px;
  list-style: none;
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  & > section {
    width: 100%;
    height: 50%;
  }
`

export const Cover = styled.section`
  background-color: rgb(230, 195, 185);
`

export const Info = styled.section`
  background-color: white;
  padding-top: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  & > h1 {
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 12px;
    position: relative;
    & > img {
      height: 14px;
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
    font-size: 10px;
  }
`

export const Avatar = styled.section`
  user-select: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 5px;
  background-color: white;
  width: 80px !important;
  height: 80px !important;
  border-radius: 50%;
  & > img {
    width: 100%;
    height: 100%;
    background-color: rgb(230, 230, 230);
    border-radius: 50%;
    object-fit: cover;
  }
`
