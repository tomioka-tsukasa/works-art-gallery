import styles from "./_index.module.scss"

export default function MoreArrow() {
  return <>
    <div className={styles.root}>
      <div className={styles.inner}>
        <div className={`${styles.arrow}`}>
          <span></span>
          <span></span>
        </div> 
        <div className={`${styles.circle}`}></div> 
      </div>
    </div>
  </>
}
