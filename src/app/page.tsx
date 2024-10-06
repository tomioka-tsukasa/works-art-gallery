import styles from "./_index.module.scss"
import DisplayGallery from "../components/organisms/DisplayGallery"
import GalleryNav from "../components/organisms/GalleryNav"

export default function LabArtGallery() {
  return <>
    <div className={styles.root}>
      <div className={styles.gallery}>
        <DisplayGallery />
      </div>
    </div>
  </>
}
