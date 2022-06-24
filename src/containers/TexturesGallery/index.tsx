import { TextureCard, TexturesGalleryLayout } from "../../components"

export default () => (
  <TexturesGalleryLayout>
    {new Array(20).fill("").map((card, id) => (
      <TextureCard key={`card-${id}`} />
    ))}
  </TexturesGalleryLayout>
)
