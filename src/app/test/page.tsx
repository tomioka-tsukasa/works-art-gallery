import { zenKakuGothicNew_w400 } from "@/lib/fonts";
import styles from "./_index.module.scss"
import Component from "./component";

export default function Test() {
  return <>
    <div className={`${styles.root} ${zenKakuGothicNew_w400.className}`}>
      <Component model={{
        visual: {
          src: '',
          altText: '',
          width: 0,
          height: 0
        },
        title: 'Title',
        slug: 'test',
        author: '',
      }} />
    </div>
  </>
}
