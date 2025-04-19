import { createContext, useContext, useState, ReactNode } from "react";
import { MainTabType } from "@/features/faq/tab/MainTab";

interface FaqContextType {
  openId: number | null;
  setOpenId: (id: number | null) => void;
  activeTab: MainTabType;
  setActiveTab: (tab: MainTabType) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
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

  const handleSetOpenId = (id: number | null) => {
    setOpenId(id);
  };

  const handleSetActiveTab = (tab: MainTabType) => {
    setActiveTab(tab);
    console.log("activeTab", activeTab);
    setOpenId(null);
  };

  const handleSetSearchQuery = (query: string) => {
    setSearchQuery(query);
    console.log("searchQuery", searchQuery);
    setOpenId(null);
  };

  const handleSetSelectedCategory = (category: string) => {
    setSelectedCategory(category);
    console.log("selectedCategory", selectedCategory);
    setOpenId(null);
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
