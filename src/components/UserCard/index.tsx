import Container, { Cover, Info, Avatar } from "./styles"
import avatar from "../../../public/assets/icons/avatar.png"
import verified from "../../../public/assets/icons/verified.png"

export default () => (
  <Container data-user="">
    <Cover />
    <Info>
      <h1>
        Name
        <img src={verified} alt="" draggable="false" />
      </h1>
      <span>user</span>
    </Info>
    <Avatar>
      <img src={avatar} alt="" draggable="false" />
    </Avatar>
  </Container>
)
