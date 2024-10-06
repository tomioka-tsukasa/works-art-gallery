import { zenOldMincho_w400, zenOldMincho_w700 } from "@/lib/fonts"
import styles from "./_index.module.scss"

type Props = {
  title: string,
  author: string,
}

export default function NamePlate({
  title,
  author,
}: Props ) {
  return <>
    <div className={styles.root}>
      <div className={`${styles.title} ${zenOldMincho_w700.className}`}>
        {title}
      </div> 
      <div className={`${styles.author} ${zenOldMincho_w400.className}`}>
        {author}
      </div> 
    </div>
  </>
}
