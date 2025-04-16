import { useState } from "react";
import styles from "@/pages/faq/FaqPage.module.scss";
import Title from "@/features/faq/title/Title";
import MainTab, { MainTab as MainTabType } from "@/features/faq/tab/MainTab";
import Search from "@/features/faq/search/Search";

// TODO 메인 탭 눌렀을 때 아래 카테고리 불러오기

export default function FaqPage() {
  const [activeTab, setActiveTab] = useState<MainTabType>("CONSULT");

  return (
    <div className={styles.wrapper}>
      <Title />
      <MainTab activeTab={activeTab} onTabChange={setActiveTab} />
      <Search />
    </div>
  );
}
