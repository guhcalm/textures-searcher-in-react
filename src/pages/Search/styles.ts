import styled from "styled-components"

export default styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  & > main {
    flex-grow: 1;
    width: 100%;
  }
`
