import ProgressArrow from "../../atoms/ProgressArrow"
import styles from "./_index.module.scss"

type Props = {
  active?: boolean
}

export default function GalleryNav({
  active = true
}: Props ) {
  return <>
    <div className={`${styles.root} ${active ? styles.isActive: ''}`}>
      <div className={styles.buttons}>
        <button id='scroll-left'>
          <ProgressArrow />
        </button>
        <button id='scroll-right'>
          <ProgressArrow />
        </button>
      </div>
    </div>
  </>
}
