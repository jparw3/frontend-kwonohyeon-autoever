import PlusIcon from "@/assets/icons/PlusIcon";
import styles from "@/shared/buttons/LoadMoreButton.module.scss";

interface LoadMoreButtonProps {
  onClick: () => void;
}

export default function LoadMoreButton({ onClick }: LoadMoreButtonProps) {
  return (
    <button type="button" className={styles.load_more} onClick={onClick}>
      <PlusIcon className={styles.plus_icon} />
      더보기
    </button>
  );
}
