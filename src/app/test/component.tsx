type Props = {
  model: Cms.ArtModel
}

export default function Component({
  model
}: Props ) {
  return <>
    <h1 id={model.slug}>
      Hello
    </h1>
  </>
}
