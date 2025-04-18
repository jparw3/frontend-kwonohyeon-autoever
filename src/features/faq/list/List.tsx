import { useState } from "react";
import { FaqResponse } from "@/mocks/data/faq";
import LoadMoreButton from "@/shared/buttons/LoadMoreButton";
import NoResult from "@/shared/no-result/NoResult";
import { MainTabType } from "@/features/faq/tab/MainTab";
import styles from "@/features/faq/list/List.module.scss";
import { incrementFaqViewCount } from "@/api/faq";
import Loading from "@/shared/loading/Loading";
import FaqItem from "./FaqItem";
interface ListProps {
  faqs: FaqResponse | null;
  activeTab: MainTabType;
  onLoadMore: () => void;
  isLoading: boolean;
  isEmpty: boolean;
}

export default function List({
  faqs,
  activeTab,
  onLoadMore,
  isLoading,
  isEmpty,
}: ListProps) {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleClick = async (id: number) => {
    const isOpening = openId !== id;
    setOpenId(isOpening ? id : null);

    if (isOpening) {
      try {
        await incrementFaqViewCount(id);
      } catch (error) {
        console.error("Failed to increment view count:", error);
      }
    }
  };

  if (!faqs || isEmpty) {
    return <NoResult />;
  }

  const hasMoreData = faqs.items.length < faqs.pageInfo.totalRecord;

  return (
    <div className={styles.wrapper}>
      <ul className={styles.faqs}>
        {faqs.items.map((item) => (
          <FaqItem
            key={item.id}
            item={item}
            activeTab={activeTab}
            isOpen={openId === item.id}
            onClick={() => handleClick(item.id)}
          />
        ))}
      </ul>

      {hasMoreData && (
        <div className={styles.loadMoreArea}>
          {isLoading ? <Loading /> : <LoadMoreButton onClick={onLoadMore} />}
        </div>
      )}
    </div>
  );
}
