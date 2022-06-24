import { FC, ReactNode } from "react"
import Container from "./styles"

export default (({ children: Cards }) => (
  <Container>
    <ul>{Cards}</ul>
  </Container>
)) as FC<{ children: ReactNode }>
