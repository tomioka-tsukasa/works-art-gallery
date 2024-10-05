import { zenOldMincho_w400 } from "@/lib/fonts"
import styles from "./_index.module.scss"

type Props = {
}

export default function LoadingCountup({
}: Props ) {
  return <>
    <div className={`${styles.root} ${zenOldMincho_w400.className}`}>
      <span className={`${styles.wrap} ${styles.digit_2}`}>
        <span className={`${styles.original}`}>
          0
        </span>
        <span className={`${styles.after}`}>
          0
        </span>
      </span>
      <span className={`${styles.wrap} ${styles.digit_1}`}>
        <span className={`${styles.original}`}>
          0
        </span>
        <span className={`${styles.after}`}>
          0
        </span>
      </span>
      <span className={`${styles.wrap} ${styles.percent}`}>
        <span className={`${styles.original}`}>
          %
        </span>
        <span className={`${styles.after}`}>
          0
        </span>
      </span>
    </div>
  </>
}
