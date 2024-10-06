import styles from "./_index.module.scss"
import DisplayGallery from "../components/organisms/DisplayGallery"
import GalleryNav from "../components/organisms/GalleryNav"
import Opening from "../components/templates/Opening"

export default function LabArtGallery() {
  return <>
    {/* <Opening /> */}
    <div className={styles.root}>
      <div className={styles.gallery}>
        <DisplayGallery />
      </div>
    </div>
    <div className={styles.nav}>
      <GalleryNav />
    </div>
  </>
}
