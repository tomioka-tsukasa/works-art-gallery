import { Dispatch, useEffect, useState } from "react"
import NamePlate from "../../atoms/NamePlate"
import styles from "./_index.module.scss"
import Image from "next/image"
import ViewMore from "../ViewMore"

type Props = {
  artModel: Cms.ArtModel,
  scrollObserve?: boolean
}

const bodyMarginLeft = () => {
  return (innerWidth - document.body.clientWidth) / 2
}

const observe: (
  e: HTMLElement
) => boolean = (
  e
) => {
  const rect = e?.getBoundingClientRect()
  if (!rect || !e) return false
  return rect.x - bodyMarginLeft() < document.body.clientWidth / 1.8
}

const scrollTrigger = (
  artModel: Cms.ArtModel,
  setView: Dispatch<boolean>
) => {
  function animation() {
    const e = document.querySelector(`#${artModel.slug}`) as HTMLElement
    setView(observe(e))
    requestAnimationFrame(animation) 
  }
  requestAnimationFrame(animation)
}

export default function ArtModel({
  artModel,
  scrollObserve = false
}: Props ) {
  const [isView, setView] = useState<boolean>(true)
  useEffect(() => {
    scrollTrigger(
      artModel,
      setView
    )
  }, [artModel, isView, setView])
  return <>
    <div className={styles.root}>
      <div className={`${styles.image} ${isView ? styles.isView : ''}`}>
        <Image
          src={artModel.visual.src}
          alt={artModel.visual.altText}
          width={artModel.visual.width}
          height={artModel.visual.height}
          priority
        />
      </div>
      <div className={`${styles.content}`}>
        <div className={`${styles.plate} ${isView ? styles.isView : ''}`}>
          <NamePlate title={artModel.title} author={artModel.author} />
        </div>
        <div className={`${styles.more} ${isView ? styles.isView : ''}`}>
          <ViewMore />
        </div>
      </div>
    </div>
  </>
}
