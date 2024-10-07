'use client'

import { useRouter } from "next/navigation"
import styles from "./_index.module.scss"
import { useAppDispatch } from "@/lib/store/hook"
import { update } from "@/lib/store/slice/loadingCtrl"
import { LOADING_TIME } from "@/lib/store/consts"

export default function BackHome() {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const clickHandler = () => {
    dispatch(update({
      complete: false
    }))
    setTimeout(() => {
      router.push('/')
    }, LOADING_TIME);
  }
  return <>
    <div className={styles.root}>
      <button className={`${styles.button}`} onClick={clickHandler}>
        トップへ戻る
      </button>
    </div>
  </>
}
