import { FC } from "react"
import { NavbarHeader, NavbarNavigation } from "../../components"
import Container from "./styles"

export default (() => (
  <Container>
    <NavbarHeader />
    <NavbarNavigation />
  </Container>
)) as FC
