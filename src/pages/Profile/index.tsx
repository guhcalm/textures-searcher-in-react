import { useState } from "react"
import Container, { Cover, Avatar, Info } from "./styles"
import avatar from "../../../public/assets/icons/avatar.png"
import verified from "../../../public/assets/icons/verified.png"
import { TexturesGallery, UsersGallery } from "../../containers"
import { ProfileNavigation, ReturnButton, UserStatus } from "../../components"

enum PageEnum {
  LOVED,
  FOLLOWING,
  EDIT
}
const Pages = {
  [PageEnum.LOVED]: <TexturesGallery />,
  [PageEnum.FOLLOWING]: <UsersGallery />
}
const loveClass = (page: PageEnum) => (page === PageEnum.LOVED ? "active" : "")
const followingClass = (page: PageEnum) =>
  page === PageEnum.FOLLOWING ? "active" : ""

export default () => {
  const [page, setPage] = useState<PageEnum>(PageEnum.LOVED)
  const onLoved = () => setPage(PageEnum.LOVED)
  const onFollowing = () => setPage(PageEnum.FOLLOWING)
  const onEdit = () => setPage(PageEnum.EDIT)
  return (
    <Container data-profile="">
      <ReturnButton />
      <header>
        <Cover />
        <Avatar>
          <img src={avatar} alt="" draggable="false" />
        </Avatar>
        <Info>
          <button type="button" onClick={onEdit}>
            Edit Profile
          </button>
          <h1>
            Name
            <img src={verified} alt="" draggable="false" />
          </h1>
          <span>user</span>
          <UserStatus />
          <ProfileNavigation
            handlers={{ onLoved, onFollowing, loveClass, followingClass, page }}
          />
        </Info>
      </header>
      {Pages[page]}
    </Container>
  )
}
