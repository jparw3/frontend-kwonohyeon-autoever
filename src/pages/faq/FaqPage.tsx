import { useState } from "react";
import styles from "@/pages/faq/FaqPage.module.scss";
import Title from "@/features/faq/title/Title";
import MainTab, { MainTab as MainTabType } from "@/features/faq/tab/MainTab";

export default function FaqPage() {
  const [activeTab, setActiveTab] = useState<MainTabType>("CONSULT");

  return (
    <div className={styles.wrapper}>
      <Title />
      <MainTab activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
