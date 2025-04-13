import { useEffect, useState } from "react";
import { FaqResponse, FaqItem } from "@/mocks/data/faq";
import { consultCategoryData, usageCategoryData } from "@/mocks/data/category";

function App() {
  const [activeTab, setActiveTab] = useState<"CONSULT" | "USAGE">("CONSULT");
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

  useEffect(() => {
    setFaqs([]);
    setPageInfo(null);
    fetchFaqs(selectedCategory ?? undefined, 0, false);
  }, [activeTab, selectedCategory]);

  const handleLoadMore = () => {
    if (pageInfo && pageInfo.nextOffset !== pageInfo.offset) {
      fetchFaqs(selectedCategory ?? undefined, pageInfo.nextOffset, true);
    }
  };

  // 조회수 증가 함수 추가
  const incrementViewCount = async (faqId: number) => {
    try {
      await fetch(`/faq/${faqId}/viewCount`, {
        method: "POST",
      });
    } catch (error) {
      console.error("Failed to increment view count:", error);
    }
  };

  // FAQ 항목 클릭 핸들러
  const handleFaqClick = (faqId: number) => {
    incrementViewCount(faqId);
  };

  return (
    <div className="p-4">
      {/* 탭 선택 */}
      <div className="mb-4">
        <button
          className={`mr-2 p-2 ${
            activeTab === "CONSULT" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => {
            setFaqs([]); // 탭 변경 시 즉시 초기화
            setPageInfo(null);
            setActiveTab("CONSULT");
            setSelectedCategory(null);
          }}
        >
          상담
        </button>
        <button
          className={`p-2 ${
            activeTab === "USAGE" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => {
            setFaqs([]); // 탭 변경 시 즉시 초기화
            setPageInfo(null);
            setActiveTab("USAGE");
            setSelectedCategory(null);
          }}
        >
          이용
        </button>
      </div>

      {/* 카테고리 선택 */}
      <div className="mb-4">
        <button
          className={`mr-2 p-2 ${
            !selectedCategory ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => {
            setFaqs([]); // 카테고리 변경 시 즉시 초기화
            setPageInfo(null);
            setSelectedCategory(null);
          }}
        >
          전체
        </button>
        {categories.map((category) => (
          <button
            key={category.categoryID}
            className={`mr-2 p-2 ${
              selectedCategory === category.categoryID
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => {
              setFaqs([]); // 카테고리 변경 시 즉시 초기화
              setPageInfo(null);
              setSelectedCategory(category.categoryID);
            }}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* FAQ 목록 */}
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="border p-4 rounded cursor-pointer hover:bg-gray-50"
            onClick={() => handleFaqClick(faq.id)}
          >
            <p className="font-bold mb-2">{faq.question}</p>
            <p className="text-gray-600">{faq.answer}</p>
            <p className="text-sm text-gray-500 mt-2">
              카테고리: {faq.categoryName} / {faq.subCategoryName}
            </p>
          </div>
        ))}
      </div>

      {/* 페이지 정보 및 더보기 버튼 */}
      {pageInfo && (
        <div className="mt-4">
          <p className="text-sm text-gray-600">
            전체 {pageInfo.totalRecord}개 중 {faqs.length}개 표시
          </p>

          {faqs.length < pageInfo.totalRecord && (
            <button
              className="mt-4 p-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
              onClick={handleLoadMore}
              disabled={isLoading}
            >
              {isLoading ? "로딩 중..." : "더보기"}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
