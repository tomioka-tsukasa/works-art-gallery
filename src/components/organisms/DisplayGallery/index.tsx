'use client'

import styles from "./_index.module.scss"
import { useSmoothScroll } from "@/lib/customHooks/useSmoothScroll"
import { useAppSelector } from "@/lib/store/hook"
import GalleryNav from "../GalleryNav"
import { useState } from "react"
import Gallery from "../Gallery"

let smoothScrollInited = false

export default function DisplayGallery() {
  const isLoaded = useAppSelector(selector => selector.loadingCtrl.complete)
  const [isCompleted, setCompleted] = useState<boolean>(false)
  if (
    isLoaded
    && !smoothScrollInited
  ) {
    const smoothScroll = useSmoothScroll({
      inited: () => {
        setCompleted(true)
      }
    })
    smoothScrollInited = true
    smoothScroll && smoothScroll.bootup()
  }
  return <>
    <div className={`${styles.root}`}>
      <div className={`${styles.gallery}`}>
        <Gallery active={isCompleted} />
      </div>
      <div className={`${styles.nav}`}>
        <GalleryNav active={isCompleted} />
      </div>
    </div>
  </>
}
