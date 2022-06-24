import Container, { Outdoor, Info } from "./styles"
import avatar from "../../../public/assets/icons/avatar.png"
import heart from "../../../public/assets/icons/heart_light.png"

export default () => (
  <Container data-texture="">
    <Outdoor />
    <Info>
      <aside>
        <img src={avatar} alt="" data-avatar="" draggable="false" />
        <aside>
          <h1>Item Name</h1>
          <span>user</span>
        </aside>
      </aside>
      <img src={heart} alt="" draggable="false" />
    </Info>
  </Container>
)
