import styles from "@/features/faq/service-inquiry/ServiceInquiry.module.scss";
import DownloadIcon from "@/assets/icons/DownloadIcon";
import EditIcon from "@/assets/icons/EditIcon";
import ChatIcon from "@/assets/icons/ChatIcon";

export default function ServiceInquiry() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>서비스 문의</h2>
      <div className={styles.inquiry_boxes}>
        <a
          href="/files/기아_비즈_서비스_제안서.pdf"
          className={styles.box}
          download="기아 비즈 서비스 제안서.pdf"
        >
          <DownloadIcon className={styles.icon} />
          <span className={styles.text}>서비스 제안서 다운로드</span>
        </a>
        <a href="https://wiblebiz.kia.com/Counsel" className={styles.box}>
          <EditIcon className={styles.icon} />
          <span className={styles.text}>상담문의 등록하기</span>
        </a>
        <a href="https://pf.kakao.com/_xfLxjdb" className={styles.box}>
          <ChatIcon className={styles.icon} />
          <span className={styles.text}>
            카톡으로 문의하기
            <span className={styles.sub_text}>ID : 기아 비즈</span>
          </span>
        </a>
      </div>
    </div>
  );
}
