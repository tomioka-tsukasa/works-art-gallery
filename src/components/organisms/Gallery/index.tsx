'use client'

import { ArtSampleModels } from "@/app/data/art-sample-models"
import ArtModel from "../../molecules/ArtModel"
import styles from "./_index.module.scss"
import { useEffect } from "react"

type Props = {
  active?: boolean
}

export default function Gallery({
  active = true
}: Props ) {
  useEffect(() => {
  }, [active])
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
