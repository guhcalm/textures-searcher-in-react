import { FC } from "react"
import { SearchCollections } from "../../components"
import { Header, TexturesGallery } from "../../containers"
import Container from "./styles"

export default (() => (
  <Container>
    <Header />
    <main>
      <TexturesGallery />
    </main>
  </Container>
)) as FC
