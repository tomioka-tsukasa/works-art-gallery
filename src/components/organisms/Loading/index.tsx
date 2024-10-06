'use client'

import { zenOldMincho_w400 } from "@/lib/fonts"
import styles from "./_index.module.scss"
import { useAppDispatch, useAppSelector } from "@/lib/store/hook"
import { useVisited } from "./customHooks/useVisited"
import { useEffect } from "react"
import { update } from "@/lib/store/slice/loadingCtrl"

export default function Loading() {
  const isComplete = useAppSelector(selector => selector.loadingCtrl.complete)
  const dispatch = useAppDispatch()
  useVisited()
  useEffect(() => {
    setTimeout(() => {
      dispatch(update({
        complete: true
      }))
    }, 1200);
  }, [isComplete])
  return <>
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
