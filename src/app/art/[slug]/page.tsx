import BackHome from "@/components/atoms/BackHome"
import styles from "./_index.module.scss"
import { ArtSampleModels } from "@/app/data/art-sample-models"
import NamePlate from "@/components/atoms/NamePlate"
import Image from "next/image"
import DummyBody from "../components/atoms/DummyBody"

type Props = {
  params: {
    slug: string
  }
}

export default function Art({
  params
}: Props ) {
  const arts: Array<Cms.ArtModel> = ArtSampleModels
  const artModel: Cms.ArtModel = arts.filter( art => art.slug === params.slug)[0]
  return <>
    <div className={`${styles.root}`}>
      <div className={`${styles.image}`}>
        <Image
          src={artModel.visual.src}
          alt={artModel.visual.altText}
          width={artModel.visual.width}
          height={artModel.visual.height}
          priority
        />
      </div>
      <div className={`${styles.plate}`}>
        <NamePlate title={artModel.title} author={artModel.author} />
      </div>
      <div className={`${styles.content}`}>
        <DummyBody />
      </div>
      <div className={`${styles.buttons}`}>
        <BackHome />
      </div>
    </div>
  </>
}

export function generateStaticParams() {
  const arts: Array<Cms.ArtModel> = ArtSampleModels
  return arts.map( art => ({
    slug: art.slug
  }))
}
