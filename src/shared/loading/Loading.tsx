import LoadingLottie from "@/assets/icons/LoadingLottie";
import styles from "@/shared/loading/Loading.module.scss";

export default function Loading() {
  return (
    <div className={styles.loading}>
      <LoadingLottie />
    </div>
  );
}
