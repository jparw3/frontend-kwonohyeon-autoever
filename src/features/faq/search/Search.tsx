import styles from "@/features/faq/search/Search.module.scss";
import SearchIcon from "@/assets/icons/SearchIcon";
import ClearIcon from "@/assets/icons/ClearIcon";
import InitIcon from "@/assets/icons/InitIcon";

interface SearchProps {
  onSearch: (value: string) => void;
  onReset: () => void;
  searchInput: string;
  setSearchInput: (value: string) => void;
  searchResultCount: number;
}

export default function Search({
  onSearch,
  onReset,
  searchInput,
  setSearchInput,
  searchResultCount,
}: SearchProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleClear = () => {
    setSearchInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchInput);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.input_container}>
        <div className={styles.input_box}>
          <input
            type="text"
            className={styles.input}
            placeholder="찾으시는 내용을 입력해 주세요"
            value={searchInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          {searchInput && (
            <ClearIcon
              width={20}
              height={20}
              color="#CDD0D2"
              className={styles.clear_icon}
              onClick={handleClear}
            />
          )}
          <SearchIcon
            width={32}
            height={32}
            className={styles.search_icon}
            onClick={() => onSearch(searchInput)}
          />
        </div>
      </div>

      <div className={styles.search_result_box}>
        <span className={styles.search_result_count}>
          검색결과 총 {searchResultCount}건
        </span>
        <div className={styles.search_result_reset_box} onClick={onReset}>
          <InitIcon width={24} height={24} className={styles.init_icon} />
          <span>검색초기화</span>
        </div>
      </div>
    </div>
  );
}
