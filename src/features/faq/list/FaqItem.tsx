import { FaqResponse } from "@/mocks/data/faq";
import ArrowDownIcon from "@/assets/icons/ArrowDownIcon";
import ArrowRightIcon from "@/assets/icons/ArrowRightIcon";
import { MainTabType } from "@/features/faq/tab/MainTab";
import styles from "@/features/faq/list/FaqItem.module.scss";

interface FaqItemProps {
  item: FaqResponse["items"][0];
  activeTab: MainTabType;
  isOpen: boolean;
  onClick: () => void;
}

export default function FaqItem({
  item,
  activeTab,
  isOpen,
  onClick,
}: FaqItemProps) {
  const getCategoryName = (faq: FaqResponse["items"][0]) => {
    return activeTab === "CONSULT" ? faq.subCategoryName : faq.categoryName;
  };

  const renderCategoryBox = (faq: FaqResponse["items"][0]) => (
    <div className={styles.category_box}>
      <div className={styles.category}>{getCategoryName(faq)}</div>

      {activeTab === "USAGE" && (
        <>
          <ArrowRightIcon
            className={styles.category_arrow}
            width={16}
            height={16}
            color="#b4b9bc"
          />
          <div className={styles.sub_category}>{faq.subCategoryName}</div>
        </>
      )}
    </div>
  );

  return (
    <li className={styles.faq_container} aria-expanded={isOpen}>
      <div className={styles.faq_item} onClick={onClick}>
        {renderCategoryBox(item)}
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
}
