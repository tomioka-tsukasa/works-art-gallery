import { zenOldMincho_w400 } from "@/lib/fonts"
import styles from "./_index.module.scss"

type Props = {
}

export default function Header({
}: Props ) {
  return <>
    <div className={styles.root}>
      <div className={styles.content}>
        <h1 className={`${styles.title} ${zenOldMincho_w400.className}`}>
          Art Gallery Room.
        </h1>
        <span className={styles.border}></span>
      </div>
    </div>
  </>
}
