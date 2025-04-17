import { useState, useEffect } from "react";
import styles from "@/pages/faq/FaqPage.module.scss";
import Title from "@/features/faq/title/Title";
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

export default function FaqPage() {
  const [activeTab, setActiveTab] = useState<MainTabType>("CONSULT");
  const [searchInput, setSearchInput] = useState("");
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
    question: searchInput,
    offset,
  });

  useEffect(() => {
    if (!faqs) return;

    setAccumulatedItems((prev) =>
      offset === 0 ? faqs.items : [...prev, ...faqs.items]
    );
  }, [faqs, offset]);

  const categories =
    activeTab === "CONSULT" ? consultCategoryData : usageCategoryData;
  const accumulatedFaqs = faqs ? { ...faqs, items: accumulatedItems } : null;

  const resetFilters = () => {
    setOffset(0);
    setAccumulatedItems([]);
  };

  const handleSearch = () => {
    resetFilters();
    refetch();
  };

  const handleReset = () => {
    setSearchInput("");
    resetFilters();
    refetch();
  };

  const handleTabChange = (tab: MainTabType) => {
    setActiveTab(tab);
    setSelectedCategory(null);
    setSearchInput("");
    resetFilters();
    refetch();
  };

  const handleCategoryChange = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
    resetFilters();
    refetch();
  };

  const handleLoadMore = () => {
    if (faqs?.pageInfo.nextOffset) {
      setOffset(faqs.pageInfo.nextOffset);
    }
  };

  const renderLoading = () => <div className={styles.loading}>로딩 중...</div>;

  return (
    <div className={styles.wrapper}>
      <Title />
      <MainTab activeTab={activeTab} onTabChange={handleTabChange} />
      <Search
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        onSearch={handleSearch}
        onReset={handleReset}
        searchResultCount={faqs?.pageInfo.totalRecord ?? 0}
      />
      <FilterCategory
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      {(isLoading || isFetching) && renderLoading()}
      {accumulatedFaqs && (
        <List
          faqs={accumulatedFaqs}
          activeTab={activeTab}
          onLoadMore={handleLoadMore}
        />
      )}
      <ServiceInquiry />
      <ProcessInfo />
      <AppDownload />
      <ScrollToTopButton />
    </div>
  );
}
