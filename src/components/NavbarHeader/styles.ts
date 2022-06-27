import styled from "styled-components"

export default styled.header`
  border-bottom: 1px solid rgb(230, 230, 230);
  position: relative;
  background-color: white;
  width: 200px;
  & > .user {
    width: 100%;
    padding: 5px;
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    align-items: center;

    & > img {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      background-color: rgb(230, 230, 230);
      overflow: hidden;
      object-fit: cover;
    }

    & > aside {
      height: 100%;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
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
    }
  }

  & > ul.status {
    padding-top: 10px;
    width: 100%;
    display: flex;

    & > li {
      height: 30px;
      list-style: none;
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 10px;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      & > span {
        font-weight: 900;
        font-size: 12px;
        padding-right: 3px;
      }
    }
  }
`
