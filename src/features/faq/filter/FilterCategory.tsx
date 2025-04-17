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
  return (
    <div className={styles.wrapper}>
      <label className={styles.filter_label}>
        <input
          type="radio"
          name="filterCategory"
          className={styles.filter_radio}
          value="ALL"
          checked={selectedCategory === null}
          onChange={() => onCategoryChange(null)}
        />
        <i className={styles.filter_text}>전체</i>
      </label>

      {categories.map((category) => (
        <label key={category.categoryID} className={styles.filter_label}>
          <input
            type="radio"
            name="filterCategory"
            className={styles.filter_radio}
            value={category.categoryID}
            checked={selectedCategory === category.categoryID}
            onChange={() => onCategoryChange(category.categoryID)}
          />
          <i className={styles.filter_text}>{category.name}</i>
        </label>
      ))}
    </div>
  );
}
