import { useState, useEffect } from "react";
import styles from "@/pages/faq/FaqPage.module.scss";
import Title from "@/features/faq/title/Title";
import MainTab, { MainTab as MainTabType } from "@/features/faq/tab/MainTab";
import Search from "@/features/faq/search/Search";
import { FaqResponse, FaqItem } from "@/mocks/data/faq";
import { consultCategoryData, usageCategoryData } from "@/mocks/data/category";

export default function FaqPage() {
  const [activeTab, setActiveTab] = useState<MainTabType>("CONSULT");
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [pageInfo, setPageInfo] = useState<FaqResponse["pageInfo"] | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);

  const categories =
    activeTab === "CONSULT" ? consultCategoryData : usageCategoryData;

  const fetchFaqs = async (categoryID?: string, offset = 0, append = false) => {
    setIsLoading(true);

    try {
      const params = new URLSearchParams({
        tab: activeTab,
        limit: "10",
        offset: offset.toString(),
        question: searchInput,
      });

      if (categoryID) {
        params.append("faqCategoryID", categoryID);
      }

      const response = await fetch(`/faq?${params.toString()}`);
      const data: FaqResponse = await response.json();

      setFaqs((prev) => (append ? [...prev, ...data.items] : data.items));
      setPageInfo(data.pageInfo);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (value: string) => {
    setSearchInput(value);
    resetFaqState();
    fetchFaqs(selectedCategory ?? undefined);
  };

  const handleReset = () => {
    setSearchInput("");
    resetFaqState();
    fetchFaqs(selectedCategory ?? undefined);
  };

  const resetFaqState = () => {
    setFaqs([]);
    setPageInfo(null);
  };

  useEffect(() => {
    resetFaqState();
    fetchFaqs(selectedCategory ?? undefined);
  }, [activeTab, selectedCategory]);

  const renderLoading = () => <div className={styles.loading}>로딩 중...</div>;

  const renderFaqs = () => (
    <div className={styles.faqs}>
      {faqs.map((faq) => (
        <div key={faq.id}>{faq.question}</div>
      ))}
    </div>
  );

  const renderCategories = () =>
    categories.map((category) => (
      <div key={category.categoryID}>{category.name}</div>
    ));

  return (
    <div className={styles.wrapper}>
      <Title />
      <MainTab activeTab={activeTab} onTabChange={setActiveTab} />
      <Search
        onSearch={handleSearch}
        onReset={handleReset}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        searchResultCount={pageInfo?.totalRecord ?? 0}
      />
      {renderCategories()}
      {isLoading ? renderLoading() : renderFaqs()}
    </div>
  );
}
