import styles from "@/features/faq/filter/FilterCategory.module.scss";
import { useFaq } from "@/contexts/FaqContext";

interface Category {
  categoryID: string;
  name: string;
}

interface FilterCategoryProps {
  categories: Category[];
}

export default function FilterCategory({ categories }: FilterCategoryProps) {
  const { selectedCategory, setSelectedCategory } = useFaq();

  const renderRadioButton = (
    key: string,
    value: string | "ALL",
    label: string,
    isChecked: boolean
  ) => (
    <label key={key} className={styles.filter_label}>
      <input
        type="radio"
        name="filterCategory"
        className={styles.filter_radio}
        value={value}
        checked={isChecked}
        onChange={() => setSelectedCategory(value === "ALL" ? "" : value)}
      />
      <i className={styles.filter_text}>{label}</i>
    </label>
  );

  const renderAllCategoryButton = () =>
    renderRadioButton("ALL-key", "ALL", "전체", selectedCategory === "");

  const renderCategoryButtons = () =>
    categories.map((category) =>
      renderRadioButton(
        category.categoryID,
        category.categoryID,
        category.name,
        selectedCategory === category.categoryID
      )
    );

  return (
    <div className={styles.wrapper}>
      {renderAllCategoryButton()}
      {renderCategoryButtons()}
    </div>
  );
}
