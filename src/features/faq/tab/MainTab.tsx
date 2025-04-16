import styles from "@/features/faq/tab/MainTab.module.scss";

export type MainTabType = "CONSULT" | "USAGE";

const MAIN_TAB = {
  CONSULT: {
    id: "CONSULT",
    name: "서비스 도입",
  },
  USAGE: {
    id: "USAGE",
    name: "서비스 이용",
  },
} as const;

interface MainTabProps {
  activeTab: MainTabType;
  onTabChange: (tab: MainTabType) => void;
}

export default function MainTab({ activeTab, onTabChange }: MainTabProps) {
  return (
    <ul className={styles.wrapper}>
      {Object.values(MAIN_TAB).map((tab) => (
        <li
          key={tab.id}
          className={`${styles.tab} ${
            activeTab === tab.id ? styles.active : ""
          }`}
          onClick={() => onTabChange(tab.id as MainTabType)}
        >
          {tab.name}
        </li>
      ))}
    </ul>
  );
}
