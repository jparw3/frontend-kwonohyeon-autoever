import { useState } from "react";
import styles from "@/pages/faq/FaqPage.module.scss";
import Title from "@/features/faq/title/Title";
import MainTab, { MainTabType } from "@/features/faq/tab/MainTab";
import Search from "@/features/faq/search/Search";
import { useFaqs } from "@/hooks/useFaqs";
import { consultCategoryData, usageCategoryData } from "@/mocks/data/category";

export default function FaqPage() {
  const [activeTab, setActiveTab] = useState<MainTabType>("CONSULT");
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [offset, setOffset] = useState(0);

  const { data, isLoading, isFetching, refetch } = useFaqs({
    tab: activeTab,
    categoryID: selectedCategory ?? undefined,
    question: searchInput,
    offset,
  });

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

  return (
    <div className={styles.wrapper}>
      <Title />
      <MainTab activeTab={activeTab} onTabChange={handleTabChange} />
      <Search
        onSearch={handleSearch}
        onReset={handleReset}
        searchResultCount={data?.pageInfo.totalRecord ?? 0}
      />
      <div className={styles.categories}>
        {categories.map((category) => (
          <button
            key={category.categoryID}
            className={`${styles.category} ${
              selectedCategory === category.categoryID ? styles.active : ""
            }`}
            onClick={() => setSelectedCategory(category.categoryID)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {(isLoading || isFetching) && (
        <div className={styles.loading}>로딩 중...</div>
      )}

      <div className={styles.faqs}>
        {data?.items.map((faq) => (
          <div key={faq.id} className={styles.faq_item}>
            {faq.question}
          </div>
        ))}
      </div>

      {data?.pageInfo.nextOffset && (
        <button className={styles.load_more}>더보기</button>
      )}
    </div>
  );
}
