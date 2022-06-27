import { FC } from "react"
import Container from "./styles"
import following from "../../../public/assets/icons/following_light.png"
import logout from "../../../public/assets/icons/logout_light.png"

export default (() => (
  <Container>
    <li className="active">
      <img src={following} alt="" />
      Profile
    </li>
    <li>
      <img src={logout} alt="" />
      Logout
    </li>
  </Container>
)) as FC
