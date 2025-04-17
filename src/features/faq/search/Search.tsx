import styles from "@/features/faq/search/Search.module.scss";
import SearchIcon from "@/assets/icons/SearchIcon";
import ClearIcon from "@/assets/icons/ClearIcon";
import InitIcon from "@/assets/icons/InitIcon";

interface SearchProps {
  searchInput: string;
  setSearchInput: (value: string) => void;
  onSearch: () => void;
  onReset: () => void;
  searchResultCount: number;
}

export default function Search({
  searchInput,
  setSearchInput,
  onSearch,
  onReset,
  searchResultCount,
}: SearchProps) {
  const handleClear = () => {
    setSearchInput("");
    onSearch();
  };

  const handleSearch = () => {
    onSearch();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const renderSearchInput = () => (
    <div className={styles.input_container}>
      <div className={styles.input_box}>
        <input
          type="text"
          className={styles.input}
          placeholder="찾으시는 내용을 입력해 주세요"
          onKeyDown={handleKeyDown}
          aria-label="검색어 입력"
          value={searchInput}
          onChange={handleChange}
        />
        <button
          type="button"
          className={`${styles.clear_icon} ${
            !searchInput ? styles.hidden : ""
          }`}
          onClick={handleClear}
          aria-label="검색어 지우기"
        >
          <ClearIcon width={20} height={20} color="#CDD0D2" />
        </button>
        <button
          type="button"
          className={styles.search_icon}
          onClick={handleSearch}
          aria-label="검색"
        >
          <SearchIcon width={32} height={32} />
        </button>
      </div>
    </div>
  );

  const renderSearchResult = () => (
    <div className={styles.search_result_box}>
      <span className={styles.search_result_count}>
        검색결과 총 {searchResultCount}건
      </span>
      <button
        type="button"
        className={styles.search_result_reset_box}
        onClick={onReset}
        aria-label="검색 초기화"
      >
        <InitIcon width={24} height={24} className={styles.init_icon} />
        <span>검색초기화</span>
      </button>
    </div>
  );

  return (
    <div className={styles.wrapper}>
      {renderSearchInput()}
      {searchInput && renderSearchResult()}
    </div>
  );
}
