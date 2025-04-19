import { memo } from "react";
import { FaqResponse } from "@/mocks/data/faq";
import ArrowDownIcon from "@/assets/icons/ArrowDownIcon";
import styles from "@/features/faq/list/FaqItem.module.scss";
import CategoryBox from "@/features/faq/list/CategoryBox";
import { useFaq } from "@/contexts/FaqContext";

interface FaqItemProps {
  item: FaqResponse["items"][0];
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem = memo(function FaqItem({ item, isOpen, onClick }: FaqItemProps) {
  const { activeTab } = useFaq();

  return (
    <li className={styles.faq_container} aria-expanded={isOpen}>
      <div className={styles.faq_item} aria-expanded={isOpen} onClick={onClick}>
        <CategoryBox item={item} activeTab={activeTab} />
        <div className={styles.question}>{item.question}</div>
        <ArrowDownIcon className={styles.arrow_icon} />
      </div>
      <div
        className={styles.answer}
        dangerouslySetInnerHTML={{ __html: item.answer }}
        data-open={isOpen}
      />
    </li>
  );
});

export default FaqItem;
