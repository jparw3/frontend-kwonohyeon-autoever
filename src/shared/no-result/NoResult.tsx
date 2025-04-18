import styles from "@/shared/no-result/NoResult.module.scss";
import WarningIcon from "@/assets/icons/WarningIcon";

export default function NoResult() {
  return (
    <div className={styles.wrapper}>
      <WarningIcon color="#B4B9BC" className={styles.warning_icon} />
      <p className={styles.title}>검색결과가 없습니다.</p>
    </div>
  );
}
