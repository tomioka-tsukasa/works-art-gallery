'use client'

import { ArtSampleModels } from "@/app/data/art-sample-models"
import ArtModel from "../../molecules/ArtModel"
import styles from "./_index.module.scss"
import { useSmoothScroll } from "@/lib/customHooks/useSmoothScroll"

export default function DisplayGallery() {
  useSmoothScroll()
  return <>
    <div className={`${styles.root}`} id='scroll-container'>
      <div className={`${styles.content}`} id='scroll-content'>
        {ArtSampleModels.map( artModel => <div 
          id={artModel.slug}
          key={artModel.slug}
          className={styles.artModel}
        >
          <ArtModel artModel={artModel} />
        </div>)}
      </div>
    </div>
  </>
}
