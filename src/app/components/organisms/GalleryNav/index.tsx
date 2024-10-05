import ProgressArrow from "../../atoms/ProgressArrow"
import styles from "./_index.module.scss"

type Props = {
}

export default function GalleryNav({
}: Props ) {
  return <>
    <div className={styles.root}>
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
