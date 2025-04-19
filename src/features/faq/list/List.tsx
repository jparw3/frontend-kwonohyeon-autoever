import { FaqResponse } from "@/mocks/data/faq";
import { incrementFaqViewCount } from "@/api/faq";
import LoadMoreButton from "@/shared/buttons/LoadMoreButton";
import NoResult from "@/shared/no-result/NoResult";
import Loading from "@/shared/loading/Loading";
import FaqItem from "@/features/faq/list/FaqItem";
import { useFaq } from "@/contexts/FaqContext";
import styles from "@/features/faq/list/List.module.scss";

interface ListProps {
  faqs: FaqResponse;
  isLoading: boolean;
  isEmpty: boolean;
}

export default function List({ faqs, isLoading, isEmpty }: ListProps) {
  const { openId, setOpenId, setOffset } = useFaq();

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

  const handleLoadMore = () => {
    if (faqs?.pageInfo.nextOffset) {
      setOffset(faqs.pageInfo.nextOffset);
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
            isOpen={openId === item.id}
            onClick={() => handleClick(item.id)}
          />
        ))}
      </ul>

      {hasMoreData && (
        <div className={styles.loadMoreArea}>
          {isLoading ? (
            <Loading />
          ) : (
            <LoadMoreButton onClick={handleLoadMore} />
          )}
        </div>
      )}
    </div>
  );
}
