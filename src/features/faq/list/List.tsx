import styles from "@/features/faq/list/List.module.scss";
import { FaqResponse } from "@/mocks/data/faq";
import { useState } from "react";
import ArrowDownIcon from "@/assets/icons/ArrowDownIcon";
import LoadMoreButton from "@/shared/buttons/LoadMoreButton";
import { MainTabType } from "@/features/faq/tab/MainTab";
import ArrowRightIcon from "@/assets/icons/ArrowRightIcon";
import { incrementFaqViewCount } from "@/api/faq";

interface ListProps {
  faqs: FaqResponse;
  activeTab: MainTabType;
  onLoadMore: () => void;
}

export default function List({ faqs, activeTab, onLoadMore }: ListProps) {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleClick = async (id: number) => {
    try {
      if (openId === id) {
        setOpenId(null);
      } else {
        if (openId !== id) {
          await incrementFaqViewCount(id);
        }
        setOpenId(id);
      }
    } catch (error) {
      console.error("Failed to increment view count:", error);
      setOpenId(openId === id ? null : id);
    }
  };

  const getCategoryName = (faq: FaqResponse["items"][0]) => {
    return activeTab === "CONSULT" ? faq.subCategoryName : faq.categoryName;
  };

  const renderCategoryBox = (faq: FaqResponse["items"][0]) => (
    <div className={styles.category_box}>
      <div className={styles.category}>{getCategoryName(faq)}</div>
      <ArrowRightIcon
        className={styles.category_arrow}
        width={16}
        height={16}
        color="#b4b9bc"
      />
      <div className={styles.sub_category}>{faq.subCategoryName}</div>
    </div>
  );

  const renderFaqItem = (faq: FaqResponse["items"][0]) => (
    <li
      key={faq.id}
      className={styles.faq_container}
      aria-expanded={openId === faq.id}
    >
      <div className={styles.faq_item} onClick={() => handleClick(faq.id)}>
        {renderCategoryBox(faq)}
        <div className={styles.question}>{faq.question}</div>
        <ArrowDownIcon className={styles.arrow_icon} />
      </div>
      <div
        className={styles.answer}
        dangerouslySetInnerHTML={{ __html: faq.answer }}
        data-open={openId === faq.id}
      />
    </li>
  );

  const hasMoreData = faqs.items.length < faqs.pageInfo.totalRecord;

  return (
    <div className={styles.wrapper}>
      <div className={styles.faqs}>{faqs.items.map(renderFaqItem)}</div>
      {hasMoreData && <LoadMoreButton onClick={onLoadMore} />}
    </div>
  );
}
