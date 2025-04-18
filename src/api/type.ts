import { MainTabType } from "@/features/faq/tab/MainTab";
import { AxiosRequestConfig } from "axios";

export interface FaqItem {
  id: number;
  categoryName: string;
  subCategoryName: string;
  question: string;
  answer: string;
}

export interface PageInfo {
  totalRecord: number;
  offset: number;
  limit: number;
  prevOffset: number;
  nextOffset: number;
}

export interface FaqResponseData {
  pageInfo: PageInfo;
  items: FaqItem[];
}

export interface FaqApiResponse {
  data: FaqResponseData;
  status: number;
  statusText: string;
  headers: Record<string, string>;
  config: AxiosRequestConfig;
  request?: any;
}

export interface FetchFaqsParams {
  tab: MainTabType;
  categoryID?: string;
  offset?: number;
  limit?: number;
  question?: string;
}
export interface Category {
  categoryID: string;
  name: string;
}

export interface CategoriesApiResponse {
  data: Category[];
}