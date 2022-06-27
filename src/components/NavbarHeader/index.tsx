import { FC } from "react"
import Container from "./styles"
import avatar from "../../../public/assets/icons/avatar.png"
import verified from "../../../public/assets/icons/verified.png"

export default (() => (
  <Container>
    <section className="user">
      <img src={avatar} alt="" />
      <aside>
        <h1>
          Name
          <img src={verified} alt="" draggable="false" />
        </h1>
        <span>user</span>
      </aside>
    </section>
    <ul className="status">
      <li>
        <span>10</span>Posts
      </li>
      <li>
        <span>10</span>Loved
      </li>
    </ul>
  </Container>
)) as FC
