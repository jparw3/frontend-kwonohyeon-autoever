import styles from "@/features/faq/filter/FilterCategory.module.scss";

interface Category {
  categoryID: string;
  name: string;
}

interface FilterCategoryProps {
  categories: Category[];
  selectedCategory: string | null;
  onCategoryChange: (categoryID: string | null) => void;
}

export default function FilterCategory({
  categories,
  selectedCategory,
  onCategoryChange,
}: FilterCategoryProps) {
  
  const renderRadioButton = (
    value: string | "ALL",
    label: string,
    isChecked: boolean
  ) => (
    <label className={styles.filter_label}>
      <input
        type="radio"
        name="filterCategory"
        className={styles.filter_radio}
        value={value}
        checked={isChecked}
        onChange={() => onCategoryChange(value === "ALL" ? null : value)}
      />
      <i className={styles.filter_text}>{label}</i>
    </label>
  );

  const renderAllCategoryButton = () =>
    renderRadioButton("ALL", "전체", selectedCategory === null);

  const renderCategoryButtons = () =>
    categories.map((category) =>
      renderRadioButton(
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
