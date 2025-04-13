import { http, HttpResponse } from "msw";
import { consultCategoryData, usageCategoryData } from "@/mocks/data/category";
import { consultFaqData, usageFaqData } from "@/mocks/data/faq";

export const handlers = [
  http.get("/faq", ({ request }) => {
    const url = new URL(request.url);
    const tab = url.searchParams.get("tab");
    const limit = Number(url.searchParams.get("limit")) || 10;
    const offset = Number(url.searchParams.get("offset")) || 0;
    const faqCategoryID = url.searchParams.get("faqCategoryID");

    const allItems = tab === "CONSULT" ? consultFaqData : usageFaqData;
    const categories =
      tab === "CONSULT" ? consultCategoryData : usageCategoryData;

    if (!allItems) {
      return new HttpResponse(null, { status: 400 });
    }

    const filteredItems = faqCategoryID
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
];