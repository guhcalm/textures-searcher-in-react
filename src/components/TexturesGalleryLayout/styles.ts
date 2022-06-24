import styled from "styled-components"

export default styled.div`
  position: relative;
  overflow-x: scroll;
  width: 100%;
  padding: 12px;
  ::-webkit-scrollbar {
    display: none;
  }
  & > ul {
    display: flex;
    gap: 10px;
  }
`
