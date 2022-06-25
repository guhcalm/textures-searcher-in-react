import verified from "../../../public/assets/icons/verified.png"
import avatar from "../../../public/assets/icons/avatar.png"
import Container, { Cover, Avatar, Info } from "./styles"
import { TexturesGallery } from "../../containers"
import { ReturnButton, UserStatus } from "../../components"

export default () => (
  <Container data-profile="">
    <ReturnButton />
    <header>
      <Cover />
      <Avatar src={avatar} alt="" draggable="false" />
      <Info>
        <button type="button">Edit Profile</button>
        <h1>
          Name
          <img src={verified} alt="" draggable="false" />
        </h1>
        <span>user</span>
        <UserStatus />
      </Info>
    </header>
    <TexturesGallery />
  </Container>
)
