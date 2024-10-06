import Loading from "../../molecules/Loading"
import styles from "./_index.module.scss"

type Props = {
}

export default function Opening({
}: Props ) {
  return <>
    <div className={styles.root}>
      <div className={styles.loading}>
        <Loading />
      </div> 
    </div>
  </>
}
