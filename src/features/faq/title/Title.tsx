import styles from "@/features/faq/title/Title.module.scss";

export default function Title() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>자주 묻는 질문</h1>
      <em className={styles.sub_title}>궁금하신 내용을 빠르게 찾아보세요.</em>
    </div>
  );
}
