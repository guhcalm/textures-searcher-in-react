import { FC } from "react"
import Container from "./styles"
import { SearchBar, SearchCollections } from "../../components"
import avatar from "../../../public/assets/icons/avatar.png"
import moon from "../../../public/assets/icons/moon.png"

export default (() => (
  <Container>
    <div>
      <img src={avatar} alt="avatar" />
      <SearchCollections />
      <img src={moon} alt="theme" />
    </div>
    <SearchBar />
  </Container>
)) as FC
