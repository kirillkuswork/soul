import Link from "next/link"
import ContactsPageSvg from "../../shared/svgs/ContactsPageSvg"
import styles from "./Document.module.scss"
import { isTablet, isMobile } from "react-device-detect";

export default function Document({ date, name, fileSize, fileUrl, mimeType }) {    
  return (
    <Link
      target="_blank"
      rel="noreferrer"
      href={`/public/documents/${fileUrl}`}
    >
      <div className={`${styles.container} ${(!isMobile && !isTablet )? styles.container__hover : ""}` }  >
        <div className= {styles.icon}>
        <ContactsPageSvg addClass={styles.icon} id={'doc'} />
        </div>
        <div className={styles.content}>
          <span>{date}</span>
          <h5 className={styles.content__name}> {name}</h5>
          <span>Скачать {`${mimeType} ${fileSize ? `(${fileSize} МБ)` : ""}`} </span>
        </div>
      </div>
    </Link>
  )
}
