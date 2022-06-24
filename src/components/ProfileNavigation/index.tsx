import { FC } from "react"
import Container from "./styles"

export default (({
  handlers: { onLoved, onFollowing, loveClass, followingClass, page }
}) => (
  <Container>
    <li
      onClick={onLoved}
      className={loveClass(page)}
      role="presentation"
      key="loved"
    >
      LOVED
    </li>
    <li
      onClick={onFollowing}
      className={followingClass(page)}
      role="presentation"
      key="following"
    >
      FOLLOWING
    </li>
  </Container>
)) as FC<{ handlers: any }>
