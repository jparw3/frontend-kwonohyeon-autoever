import styles from "@/shared/footer/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.company_info}>
          <img className={styles.logo} src={"/logos/kn.svg"} alt="KN" />
          <p className={styles.copyright}>
            © 2023 KIA CORP.{" "}
            <span className={styles.copyright_break}>All Rights Reserved.</span>
          </p>
        </div>
        <div className={styles.company_detail}>
          <div className={styles.policy}>
            <a
              href="https://privacy.kia.com/overview/full-policy"
              target="_blank"
              className={styles.privacy_link}
              >
              <b>개인정보 처리방침</b>
            </a>
            <span>이용약관</span>
          </div>

          <address className={styles.address}>
            <div className={styles.address_row}>
              <span className={styles.address_item}>
                서울특별시 서초구 헌릉로 12 기아㈜
              </span>
              <span className={styles.address_item}>대표: 송호성, 최준영</span>
              <span className={styles.address_item}>
                사업자등록번호: 119-81-02316
              </span>
              <span className={styles.address_item}>
                통신판매번호: 2006-07935
              </span>
              <span className={styles.address_item}>고객센터: 1833-4964</span>
              <span className={styles.address_item}>
                제휴문의: <a href="mailto:kiabiz@kia.com">kiabiz@kia.com</a>
              </span>
            </div>
          </address>
        </div>
      </div>
    </footer>
  );
}
