import styles from "@/shared/title/Title.module.scss";

interface TitleProps {
  title: string;
  subTitle: string;
}

export default function Title({ title, subTitle }: TitleProps) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <em className={styles.sub_title}>{subTitle}</em>
    </div>
  );
}
