'use client'

import { zenOldMincho_w400 } from "@/lib/fonts"
import styles from "./_index.module.scss"
import { useAppDispatch, useAppSelector } from "@/lib/store/hook"
import { useVisited } from "./customHooks/useVisited"
import { useEffect } from "react"
import { update } from "@/lib/store/slice/loadingCtrl"
import { usePathname } from "next/navigation"

type Props = {
  active?: boolean
}

export default function Loading({
  active = true
}: Props ) {
  const isComplete = useAppSelector(selector => selector.loadingCtrl.complete)
  const isVisited = useAppSelector(selector => selector.loadingCtrl.visied)
  const pathname = usePathname()
  const dispatch = useAppDispatch()
  useVisited()
  useEffect(() => {
    isComplete && dispatch(update({
      complete: false
    }))
    setTimeout(() => {
      dispatch(update({
        complete: true
      }))
    }, 900);
  }, [pathname])
  useEffect(() => {
    !isVisited && setTimeout(() => {
      dispatch(update({
        complete: true
      }))
    }, 900);
  }, [isComplete, active, dispatch])
  if (!active) return <></>
  else return <>
    <div className={`${styles.root} ${isComplete ? styles.isComplete : ''}`}>
      <div className={`${styles.content}`}>
        <div className={`${styles.title} ${zenOldMincho_w400.className}`}>
          Now <br />
          Loading...
        </div>
        <div className={`${styles.border}`}></div>
      </div>
    </div>
  </>
}
