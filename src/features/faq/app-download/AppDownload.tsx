import styles from "@/features/faq/app-download/AppDownload.module.scss";
import GooglePlayIcon from "@/assets/icons/GooglePlayIcon";
import AppStoreIcon from "@/assets/icons/AppStoreIcon";

export default function AppDownload() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>기아 비즈 App 지금 만나보세요!</h2>
      <div className={styles.buttons_container}>
        <a
          href="https://play.google.com/store/apps/details?id=kor.mop.user.app&pli=1"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.store_button}
        >
          <GooglePlayIcon className={styles.store_icon} />
          <span>Google Play</span>
        </a>
        <a
          href="https://apps.apple.com/kr/app/kia-biz-%EA%B8%B0%EC%95%84-%EB%B9%84%EC%A6%88/id1598065794"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.store_button}
        >
          <AppStoreIcon className={styles.store_icon} />
          <span>App Store</span>
        </a>
      </div>
    </section>
  );
}
