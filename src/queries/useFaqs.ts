import { useQuery } from "@tanstack/react-query";
import { fetchFaqs } from "@/api/faq";
import { MainTabType } from "@/features/faq/tab/MainTab";

interface UseFaqsParams {
  tab: MainTabType;
  categoryID?: string;
  question?: string;
  offset?: number;
}

export function useFaqs({
  tab,
  categoryID,
  question,
  offset = 0,
}: UseFaqsParams) {
  return useQuery({
    queryKey: ["faqs", tab, categoryID, question, offset],
    queryFn: () => fetchFaqs({ tab, categoryID, offset, question }),
    placeholderData: (previousData) => {
      if (!previousData) return undefined;
      return previousData;
    },
  });
}
