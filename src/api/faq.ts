import { MainTabType } from "@/features/faq/tab/MainTab";
import { FaqResponse } from "@/mocks/data/faq";

interface FetchFaqsParams {
  tab: MainTabType;
  categoryID?: string;
  offset?: number;
  limit?: number;
  question?: string;
}

export const fetchFaqs = async ({
  tab,
  categoryID,
  offset = 0,
  limit = 10,
  question = "",
}: FetchFaqsParams): Promise<FaqResponse> => {
  const params = new URLSearchParams({
    tab,
    limit: limit.toString(),
    offset: offset.toString(),
    question,
  });

  if (categoryID) {
    params.append("faqCategoryID", categoryID);
  }

  const response = await fetch(`/faq?${params.toString()}`);
  return response.json();
};
