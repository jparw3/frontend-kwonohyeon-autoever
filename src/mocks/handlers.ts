import { http, HttpResponse } from "msw";
import { consultCategoryData, usageCategoryData } from "@/mocks/data/category";
import { consultFaqData, usageFaqData } from "@/mocks/data/faq";

const viewCountMap = new Map<number, number>();

export const handlers = [
  http.get("/faq/categories", ({ request }) => {
    const url = new URL(request.url);
    const tab = url.searchParams.get("tab");

    const categories =
      tab === "CONSULT" ? consultCategoryData : usageCategoryData;

    return HttpResponse.json(categories);
  }),

  http.get("/faq", ({ request }) => {
    const url = new URL(request.url);
    const tab = url.searchParams.get("tab");
    const limit = Number(url.searchParams.get("limit")) || 10;
    const offset = Number(url.searchParams.get("offset")) || 0;
    const faqCategoryID = url.searchParams.get("faqCategoryID");
    const questionQuery = url.searchParams.get("question");

    const allItems = tab === "CONSULT" ? consultFaqData : usageFaqData;
    const categories =
      tab === "CONSULT" ? consultCategoryData : usageCategoryData;

    if (!allItems) {
      return new HttpResponse(null, { status: 400 });
    }

    let filteredItems = faqCategoryID
      ? allItems.filter((item) => {
          const category = categories.find(
            (cat) => cat.categoryID === faqCategoryID
          );
          if (!category) return false;

          return tab === "CONSULT"
            ? item.subCategoryName === category.name
            : item.categoryName === category.name;
        })
      : allItems;

    if (questionQuery) {
      const searchTerm = questionQuery.toLowerCase();
      filteredItems = filteredItems.filter(
        (item) =>
          item.question.toLowerCase().includes(searchTerm) ||
          item.categoryName?.toLowerCase().includes(searchTerm) ||
          item.subCategoryName?.toLowerCase().includes(searchTerm) ||
          item.answer.toLowerCase().includes(searchTerm)
      );
    }

    const totalRecord = filteredItems.length;
    const paginatedItems = filteredItems.slice(offset, offset + limit);

    return HttpResponse.json({
      pageInfo: {
        totalRecord,
        offset,
        limit,
        prevOffset: Math.max(0, offset - limit),
        nextOffset: offset + limit < totalRecord ? offset + limit : offset,
      },
      items: paginatedItems,
    });
  }),

  http.post("/faq/:id/viewCount", async ({ params }) => {
    // 조회수는 브라우저 메모리에 임시로 저장 (viewCountMap)
    // 페이지를 새로고침하면 초기화됨
    const faqId = Number(params.id);

    const currentCount = viewCountMap.get(faqId) || 0;

    viewCountMap.set(faqId, currentCount + 1);

    return HttpResponse.json({
      faqId,
      viewCount: currentCount + 1,
    });
  }),
];