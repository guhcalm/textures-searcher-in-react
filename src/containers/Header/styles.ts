import styled from "styled-components"

export default styled.header`
  width: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    width: 100%;
    padding: 10px 0;
    & > img:first-child {
      height: 30px;
      width: 30px;
      object-fit: cover;
      background-color: rgb(230, 230, 230);
      border-radius: 50%;
    }
    & > img:last-child {
      height: 25px;
      width: 25px;
      object-fit: cover;
    }
  }
`
