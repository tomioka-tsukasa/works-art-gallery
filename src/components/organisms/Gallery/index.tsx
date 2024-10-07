'use client'

import styles from "./_index.module.scss"
import { ArtSampleModels } from "@/data/art-samples"
import ArtModel from "../../molecules/ArtModel"

type Props = {
  active?: boolean
}

export default function Gallery({
  active = true
}: Props ) {
  return <>
    <div className={`${styles.root}`} id='scroll-container'>
      <div className={`${styles.content} ${active ? styles.isActive: ''}`} id='scroll-content'>
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
