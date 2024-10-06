'use client'

import styles from "./_index.module.scss"
import { useSmoothScroll } from "@/lib/customHooks/useSmoothScroll"
import { useAppSelector } from "@/lib/store/hook"
import GalleryNav from "../GalleryNav"
import { useEffect, useRef, useState } from "react"
import Gallery from "../Gallery"

export default function DisplayGallery() {
  const isLoaded = useAppSelector(selector => selector.loadingCtrl.complete)
  const [isCompleted, setCompleted] = useState<boolean>(false)
  const isBootup = useRef<boolean>(false)
  const smoothScroll = useSmoothScroll({
    autoScroll: true,
    inited: () => {
      setCompleted(true)
    }
  })
  useEffect(() => {
    if (
      isLoaded
      && smoothScroll
    ) {
      if (smoothScroll.status.inited) {
        !isBootup.current && smoothScroll.bootup()
        isBootup.current = true
        setCompleted(true)
        smoothScroll.status.inited = true
      } else {
        smoothScroll.init()
      }
    }
  }, [isLoaded, isCompleted, smoothScroll])
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
