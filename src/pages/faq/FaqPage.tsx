import { useState, useEffect } from "react";
import styles from "@/pages/faq/FaqPage.module.scss";
import Title from "@/shared/title/Title";
import MainTab, { MainTabType } from "@/features/faq/tab/MainTab";
import Search from "@/features/faq/search/Search";
import FilterCategory from "@/features/faq/filter/FilterCategory";
import List from "@/features/faq/list/List";
import ServiceInquiry from "@/features/faq/service-inquiry/ServiceInquiry";
import ProcessInfo from "@/features/faq/process-info/ProcessInfo";
import AppDownload from "@/features/faq/app-download/AppDownload";
import { useFaqs } from "@/hooks/useFaqs";
import { consultCategoryData, usageCategoryData } from "@/mocks/data/category";
import { FaqResponse } from "@/mocks/data/faq";
import ScrollToTopButton from "@/shared/floating-button/ScrollToTopButton";
import { FaqErrorBoundary } from "@/features/faq/error/FaqErrorBoundary";

export default function FaqPage() {
  const [activeTab, setActiveTab] = useState<MainTabType>("CONSULT");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [offset, setOffset] = useState(0);
  const [accumulatedItems, setAccumulatedItems] = useState<
    FaqResponse["items"]
  >([]);

  const {
    data: faqs,
    isLoading,
    isFetching,
    refetch,
  } = useFaqs({
    tab: activeTab,
    categoryID: selectedCategory ?? undefined,
    ...(searchQuery && { question: searchQuery }),
    offset,
  });

  useEffect(() => {
    if (!faqs) return;

    setAccumulatedItems((prev) => {
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
  }, [faqs, offset]);

  const categories =
    activeTab === "CONSULT" ? consultCategoryData : usageCategoryData;
  const accumulatedFaqs = faqs ? { ...faqs, items: accumulatedItems } : null;

  const resetFilters = () => {
    setOffset(0);
    setAccumulatedItems([]);
  };

  const handleSearch = (searchQuery: string) => {
    setSearchQuery(searchQuery);
    resetFilters();
  };

  const handleReset = () => {
    setSearchQuery("");
    resetFilters();
  };

  const handleTabChange = (tab: MainTabType) => {
    if (activeTab === tab) {
      return;
    }

    setActiveTab(tab);
    setSelectedCategory(null);
    setSearchQuery("");
    resetFilters();
  };

  const handleCategoryChange = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
    resetFilters();
    refetch();
  };

  const handleLoadMore = () => {
    if (!isFetching && faqs?.pageInfo.nextOffset) {
      setOffset(faqs.pageInfo.nextOffset);
    }
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
          <Search
            searchQuery={searchQuery}
            onSearch={handleSearch}
            onReset={handleReset}
            searchResultCount={faqs?.pageInfo.totalRecord ?? 0}
          />
          <FilterCategory
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />

          {accumulatedFaqs && (
            <List
              faqs={accumulatedFaqs}
              activeTab={activeTab}
              onLoadMore={handleLoadMore}
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
