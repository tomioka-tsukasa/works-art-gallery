import { Dispatch, useCallback, useState } from "react"
import NamePlate from "../../atoms/NamePlate"
import styles from "./_index.module.scss"
import Image from "next/image"
import ViewMore from "../ViewMore"
import { useAppDispatch } from "@/lib/store/hook"
import { update } from "@/lib/store/slice/loadingCtrl"
import { useRouter } from "next/navigation"
import { useScrollObserve } from "./customHooks/useScrollObserve"

type Props = {
  artModel: Cms.ArtModel,
  scrollObserve?: boolean,
}

export default function ArtModel({
  artModel,
  scrollObserve = true,
}: Props ) {
  const [isView, setView] = useState<boolean>(true)
  const dispatch = useAppDispatch()
  const router = useRouter()
  const clickHandler = useCallback(() => {
    dispatch(update({ complete: false }))
    setTimeout(() => {
      router.push(`/art/${artModel.slug}`)
    }, 900);
  }, [dispatch, artModel.slug, router])
  useScrollObserve(
    artModel,
    setView,
    scrollObserve
  )
  return <>
    <div 
      className={`${styles.root} ${isView ? styles.isView : ''}`} 
      onClick={clickHandler}
    >
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
