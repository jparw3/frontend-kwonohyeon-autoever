import { FetchFaqsParams, FaqApiResponse } from "@/api/type";
import { FaqResponse } from "@/mocks/data/faq";
import { get, post } from "@/api/axios";

export const fetchFaqs = async ({
  tab,
  categoryID,
  offset = 0,
  limit = 10,
  question,
}: FetchFaqsParams): Promise<FaqResponse> => {
  const params = new URLSearchParams({
    tab,
    limit: limit.toString(),
    offset: offset.toString(),
    ...(question && { question }),
  });

  if (categoryID) {
    params.append("faqCategoryID", categoryID);
  }

  const response = await get<FaqApiResponse>(`/faq?${params.toString()}`);
  return response.data;
};

export const incrementFaqViewCount = async (id: number) => {
  const response = await post(`/faq/${id}/viewCount`);
  return response;
};
