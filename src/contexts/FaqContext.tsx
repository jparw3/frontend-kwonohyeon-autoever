import { createContext, useContext, useState, ReactNode } from "react";
import { MainTabType } from "@/features/faq/tab/MainTab";
import { FaqResponse } from "@/mocks/data/faq";

interface FaqContextType {
  openId: number | null;
  setOpenId: (id: number | null) => void;
  activeTab: MainTabType;
  setActiveTab: (tab: MainTabType) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  offset: number;
  setOffset: (offset: number) => void;
  accumulatedItems: FaqResponse["items"];
  setAccumulatedItems: (
    items:
      | FaqResponse["items"]
      | ((prev: FaqResponse["items"]) => FaqResponse["items"])
  ) => void;
  handleTabChange: (tab: MainTabType) => void;
}

const FaqContext = createContext<FaqContextType | null>(null);

interface FaqProviderProps {
  children: ReactNode;
}

export function FaqProvider({ children }: FaqProviderProps) {
  const [openId, setOpenId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<MainTabType>("CONSULT");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [offset, setOffset] = useState(0);
  const [accumulatedItems, setAccumulatedItems] = useState<
    FaqResponse["items"]
  >([]);

  const handleSetOpenId = (id: number | null) => {
    setOpenId(id);
  };

  const handleSetActiveTab = (tab: MainTabType) => {
    setActiveTab(tab);
    setOpenId(null);
    setSelectedCategory("");
    setSearchQuery("");
    setOffset(0);
    setAccumulatedItems([]);
  };

  const handleSetSearchQuery = (query: string) => {
    setSearchQuery(query);
    setOpenId(null);
  };

  const handleSetSelectedCategory = (category: string) => {
    setSelectedCategory(category);
    setOpenId(null);
    setOffset(0);
    setAccumulatedItems([]);
  };

  const handleTabChange = (tab: MainTabType) => {
    if (activeTab === tab) {
      return;
    }
    handleSetActiveTab(tab);
  };

  return (
    <FaqContext.Provider
      value={{
        openId,
        setOpenId: handleSetOpenId,
        activeTab,
        setActiveTab: handleSetActiveTab,
        searchQuery,
        setSearchQuery: handleSetSearchQuery,
        selectedCategory,
        setSelectedCategory: handleSetSelectedCategory,
        offset,
        setOffset,
        accumulatedItems,
        setAccumulatedItems,
        handleTabChange,
      }}
    >
      {children}
    </FaqContext.Provider>
  );
}

export function useFaq() {
  const context = useContext(FaqContext);
  if (!context) {
    throw new Error("useFaq must be used within a FaqProvider");
  }
  return context;
}
