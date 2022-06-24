import { FC, ReactNode } from "react"
import Container from "./styles"

export default (({ children: Users }) => <Container>{Users}</Container>) as FC<{
  children: ReactNode
}>
