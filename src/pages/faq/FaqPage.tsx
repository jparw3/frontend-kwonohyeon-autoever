import { useEffect, useCallback } from "react";
import styles from "@/pages/faq/FaqPage.module.scss";
import Title from "@/shared/title/Title";
import MainTab from "@/features/faq/tab/MainTab";
import Search from "@/features/faq/search/Search";
import FilterCategory from "@/features/faq/filter/FilterCategory";
import List from "@/features/faq/list/List";
import ServiceInquiry from "@/features/faq/service-inquiry/ServiceInquiry";
import ProcessInfo from "@/features/faq/process-info/ProcessInfo";
import AppDownload from "@/features/faq/app-download/AppDownload";
import { useFaqs } from "@/queries/useFaqs";
import { useCategories } from "@/queries/useCategories";
import { FaqResponse } from "@/mocks/data/faq";
import ScrollToTopButton from "@/shared/floating-button/ScrollToTopButton";
import { FaqErrorBoundary } from "@/features/faq/error/FaqErrorBoundary";
import { useFaq } from "@/contexts/FaqContext";
import { useDebounce } from "@/shared/hooks/useDebounce";

export default function FaqPage() {
  const {
    activeTab,
    offset,
    searchQuery,
    selectedCategory,
    accumulatedItems,
    setAccumulatedItems,
    handleTabChange,
  } = useFaq();

  const { data: categories } = useCategories(activeTab);

  const {
    data: faqs,
    isLoading,
    isFetching,
  } = useFaqs({
    tab: activeTab,
    categoryID: selectedCategory ?? undefined,
    ...(searchQuery && { question: searchQuery }),
    offset,
  });

  const debouncedFaqs = useDebounce(faqs, 300);

  const updateAccumulatedItems = useCallback(
    (newFaqs: FaqResponse | undefined) => {
      if (!newFaqs) return;

      setAccumulatedItems((prev: FaqResponse["items"]) => {
        if (offset === 0 || searchQuery || selectedCategory) {
          return newFaqs.items;
        }

        const uniqueItems = Array.from(
          new Map(
            [...prev, ...newFaqs.items].map((item) => [item.id, item])
          ).values()
        );

        return uniqueItems;
      });
    },
    [offset, searchQuery, selectedCategory, setAccumulatedItems]
  );

  useEffect(() => {
    updateAccumulatedItems(debouncedFaqs);
  }, [debouncedFaqs, updateAccumulatedItems]);

  const accumulatedFaqs = {
    items: accumulatedItems,
    pageInfo: faqs?.pageInfo ?? {
      totalRecord: 0,
      nextOffset: null,
    },
  };

  return (
    <main className={styles.wrapper}>
      <Title
        title="자주 묻는 질문"
        subTitle="궁금하신 내용을 빠르게 찾아보세요."
      />
      <section aria-labelledby="faq-main-title">
        <FaqErrorBoundary>
          <MainTab activeTab={activeTab} onTabChange={handleTabChange} />
          <Search searchResultCount={faqs?.pageInfo.totalRecord ?? 0} />
          {categories && <FilterCategory categories={categories} />}
          {accumulatedFaqs && (
            <List
              faqs={accumulatedFaqs as FaqResponse}
              isLoading={isLoading || isFetching}
            />
          )}
        </FaqErrorBoundary>
      </section>
      <ServiceInquiry />
      <ProcessInfo />
      <AppDownload />
      <ScrollToTopButton />
    </main>
  );
}
