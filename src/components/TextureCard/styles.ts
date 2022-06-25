import styled from "styled-components"

export default styled.li`
  list-style: none;
  min-width: 300px;
  height: 400px;
  border: 1px solid rgba(230, 230, 230, 1);
  position: relative;
  border-radius: 10px;
  overflow: hidden;
`

export const Outdoor = styled.section`
  position: relative;
  background-color: rgb(239, 195, 184);
  background-image: radial-gradient(
    circle at 50% 50%,
    transparent,
    rgba(0, 0, 0, 0.1)
  );
  width: 100%;
  height: calc(100% - 40px);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Info = styled.section`
  width: 100%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  & > aside {
    display: flex;
    gap: 10px;
    & > img {
      height: 30px;
      width: 30px;
      border-radius: 50%;
      background-color: rgb(230, 230, 230);
      user-select: none;
    }
    & > aside {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      & > h1 {
        font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
          "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
        font-size: 12px;
      }
      & > span {
        font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
          "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
        font-size: 10px;
      }
    }
  }

  & > img {
    height: 25px;
    cursor: pointer;
    user-select: none;
    opacity: 0.3;
  }
`
