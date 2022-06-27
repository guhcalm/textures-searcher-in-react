import { FC } from "react"
import Container from "./styles"

export default (() => (
  <Container>
    <button className="active">Posts</button>
    <button>Loved</button>
    <button>Follows</button>
    <button>Following</button>
  </Container>
)) as FC
