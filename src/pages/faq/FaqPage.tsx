import { useEffect } from "react";
import styles from "@/pages/faq/FaqPage.module.scss";
import Title from "@/shared/title/Title";
import MainTab from "@/features/faq/tab/MainTab";
import Search from "@/features/faq/search/Search";
import FilterCategory from "@/features/faq/filter/FilterCategory";
import List from "@/features/faq/list/List";
import ServiceInquiry from "@/features/faq/service-inquiry/ServiceInquiry";
import ProcessInfo from "@/features/faq/process-info/ProcessInfo";
import AppDownload from "@/features/faq/app-download/AppDownload";
import { useFaqs } from "@/hooks/useFaqs";
import { useCategories } from "@/hooks/useCategories";
import { FaqResponse } from "@/mocks/data/faq";
import ScrollToTopButton from "@/shared/floating-button/ScrollToTopButton";
import { FaqErrorBoundary } from "@/features/faq/error/FaqErrorBoundary";
import { useFaq } from "@/contexts/FaqContext";

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

  useEffect(() => {
    if (!faqs) return;

    setAccumulatedItems((prev: FaqResponse["items"]) => {
      if (offset === 0) {
        return faqs.items;
      }

      const uniqueItems = Array.from(
        new Map(
          [...prev, ...faqs.items].map((item) => [item.id, item])
        ).values()
      );

      return uniqueItems;
    });
  }, [faqs, offset, setAccumulatedItems]);

  const accumulatedFaqs = { ...faqs, items: accumulatedItems };

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
          {accumulatedFaqs.items.length > 0 && accumulatedFaqs.pageInfo && (
            <List
              faqs={accumulatedFaqs as FaqResponse}
              isLoading={isLoading || isFetching}
              isEmpty={faqs?.items.length === 0 && searchQuery !== ""}
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
