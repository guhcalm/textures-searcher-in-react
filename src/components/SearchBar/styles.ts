import styled from "styled-components"

export default styled.form`
  width: 80%;
  display: flex;
  align-items: center;
  gap: 5px;
  & > section {
    display: flex;
    align-items: center;
    flex-grow: 1;
    border-radius: 100vmax;
    padding: 5px;
    background-color: rgb(245, 245, 245);
    & > input {
      width: 100%;
      height: 100%;
      background-color: transparent;
      text-align: center;
      outline: none;
      &::placeholder {
        outline: none;
      }
    }
    & > img {
      height: 20px;
      width: 20px;
      object-fit: cover;
      opacity: 0.5;
    }

    & > img:last-child {
      visibility: hidden;
    }
    & > img:last-child {
      &.active {
        visibility: visible;
      }
    }
  }
`
