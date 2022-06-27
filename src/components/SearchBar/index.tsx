import { FC } from "react"
import Container from "./styles"
import search from "../../../public/assets/icons/search_light.png"
import remove from "../../../public/assets/icons/remove_light.png"

export default (() => {
  return (
    <Container>
      <section>
        <img src={search} alt="" />
        <input type="text" placeholder="Search" />
        <img src={remove} alt="" />
      </section>
      <div />
    </Container>
  )
}) as FC
