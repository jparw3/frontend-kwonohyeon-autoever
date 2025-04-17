import { useState, useEffect } from "react";
import styles from "@/pages/faq/FaqPage.module.scss";
import Title from "@/features/faq/title/Title";
import MainTab, { MainTabType } from "@/features/faq/tab/MainTab";
import Search from "@/features/faq/search/Search";
import FilterCategory from "@/features/faq/filter/FilterCategory";
import List from "@/features/faq/list/List";
import { useFaqs } from "@/hooks/useFaqs";
import { consultCategoryData, usageCategoryData } from "@/mocks/data/category";
import { FaqResponse } from "@/mocks/data/faq";

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
    if (faqs) {
      if (offset === 0) {
        setAccumulatedItems(faqs.items);
      } else {
        setAccumulatedItems((prev) => [...prev, ...faqs.items]);
      }
    }
  }, [faqs, offset]);

  const categories =
    activeTab === "CONSULT" ? consultCategoryData : usageCategoryData;

  const handleSearch = (value: string) => {
    setSearchInput(value);
    setOffset(0);
    refetch();
  };

  const handleReset = () => {
    setSearchInput("");
    setOffset(0);
    refetch();
  };

  const handleTabChange = (tab: MainTabType) => {
    setActiveTab(tab);
    setOffset(0);
    setSelectedCategory(null);
    setSearchInput("");
    refetch();
  };

  const handleLoadMore = () => {
    if (faqs?.pageInfo.nextOffset) {
      setOffset(faqs.pageInfo.nextOffset);
    }
  };

  const handleCategoryChange = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
    setOffset(0);
    setAccumulatedItems([]);
    refetch();
  };

  const accumulatedFaqs = faqs
    ? {
        ...faqs,
        items: accumulatedItems,
      }
    : null;

  return (
    <div className={styles.wrapper}>
      <Title />
      <MainTab activeTab={activeTab} onTabChange={handleTabChange} />
      <Search
        onSearch={handleSearch}
        onReset={handleReset}
        searchResultCount={faqs?.pageInfo.totalRecord ?? 0}
      />
      <FilterCategory
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      {(isLoading || isFetching) && (
        <div className={styles.loading}>로딩 중...</div>
      )}

      {accumulatedFaqs && (
        <List
          faqs={accumulatedFaqs}
          activeTab={activeTab}
          onLoadMore={handleLoadMore}
        />
      )}
    </div>
  );
}
