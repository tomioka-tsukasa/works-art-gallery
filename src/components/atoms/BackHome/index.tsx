'use client'

import { useRouter } from "next/navigation"
import styles from "./_index.module.scss"
import { useAppDispatch } from "@/lib/store/hook"
import { update } from "@/lib/store/slice/loadingCtrl"

export default function BackHome() {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const clickHandler = () => {
    dispatch(update({
      complete: false
    }))
    setTimeout(() => {
      router.push('/')
    }, 900);
  }
  return <>
    <div className={styles.root}>
      <button className={`${styles.button}`} onClick={clickHandler}>
        トップへ戻る
      </button>
    </div>
  </>
}
