import styles from "./_index.module.scss"
import { zenOldMincho_w400 } from "@/lib/fonts"
import MoreArrow from "@/components/atoms/MoreArrow"

type Props = {
  text?: string
}

export default function ViewMore({
  text
}: Props ) {
  return <>
    <div className={styles.root}>
      <div className={`${styles.text} ${zenOldMincho_w400.className}`}>
        {text ?? 'VIEW'}
      </div>
      <div className={styles.arrow}>
        <MoreArrow />
      </div>
    </div>
  </>
}
