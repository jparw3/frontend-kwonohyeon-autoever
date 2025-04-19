import styles from "@/features/faq/list/CategoryBox.module.scss";
import { FaqResponse } from "@/mocks/data/faq";
import ArrowRightIcon from "@/assets/icons/ArrowRightIcon";

interface CategoryBoxProps {
  activeTab: string;
  item: FaqResponse["items"][0];
}

export default function CategoryBox({ activeTab, item }: CategoryBoxProps) {
  return (
    <div className={styles.category_box}>
      <div className={styles.category}>
        {activeTab === "CONSULT" ? item.subCategoryName : item.categoryName}
      </div>

      {activeTab === "USAGE" && (
        <>
          <ArrowRightIcon
            className={styles.category_arrow}
            width={16}
            height={16}
            color="#b4b9bc"
          />
          <div className={styles.sub_category}>{item.subCategoryName}</div>
        </>
      )}
    </div>
  );
}
