import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "@/api/category";
import { MainTabType } from "@/features/faq/tab/MainTab";

export function useCategories(tab: MainTabType) {
  return useQuery({
    queryKey: ["categories", tab],
    queryFn: () => fetchCategories(tab),
  });
}
