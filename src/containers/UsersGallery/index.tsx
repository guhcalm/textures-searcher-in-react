import { UserCard, UsersGalleryLayout } from "../../components"

export default () => (
  <UsersGalleryLayout>
    {new Array(20).fill("").map((card, id) => (
      <UserCard key={`card-${id}`} />
    ))}
  </UsersGalleryLayout>
)
