import styles from "@/features/faq/filter/FilterCategory.module.scss";

interface Category {
  categoryID: string;
  name: string;
}

interface FilterCategoryProps {
  categories: Category[];
  selectedCategory: string | null;
  setSelectedCategory: (categoryID: string | null) => void;
}

export default function FilterCategory({
  categories,
  selectedCategory,
  setSelectedCategory,
}: FilterCategoryProps) {
  const handleCategoryChange = (categoryID: string | null) => {
    setSelectedCategory(categoryID);
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.filter_label}>
        <input
          type="radio"
          name="filterCategory"
          className={styles.filter_radio}
          value="ALL"
          checked={selectedCategory === null}
          onChange={() => handleCategoryChange(null)}
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
            onChange={() => handleCategoryChange(category.categoryID)}
          />
          <i className={styles.filter_text}>{category.name}</i>
        </label>
      ))}
    </div>
  );
}
