import { get } from "@/api/axios";
import { MainTabType } from "@/features/faq/tab/MainTab";
import { Category, CategoriesApiResponse } from "@/api/type";

export const fetchCategories = async (
  tab: MainTabType
): Promise<Category[]> => {
  const response = await get<CategoriesApiResponse>(
    `/faq/categories?tab=${tab}`
  );
  return response.data;
};
