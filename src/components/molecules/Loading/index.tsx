import { zenOldMincho_w400 } from "@/lib/fonts"
import styles from "./_index.module.scss"

type Props = {
}

export default function LoadingCountup({
}: Props ) {
  return <>
    <div className={`${styles.root} ${zenOldMincho_w400.className}`}>
      <div className={styles.load}>
        Loading Gallery...
      </div>
    </div>
  </>
}
