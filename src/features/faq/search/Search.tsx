import { useRef } from "react";
import styles from "@/features/faq/search/Search.module.scss";
import SearchIcon from "@/assets/icons/SearchIcon";
import ClearIcon from "@/assets/icons/ClearIcon";
import InitIcon from "@/assets/icons/InitIcon";

interface SearchProps {
  searchInput: string;
  onSearch: (value: string) => void;
  onReset: () => void;
  searchResultCount: number;
}

export default function Search({
  searchInput,
  onSearch,
  onReset,
  searchResultCount,
}: SearchProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const triggerSearch = () => {
    if (inputRef.current) {
      onSearch(inputRef.current.value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      triggerSearch();
    }
  };

  const renderSearchInput = () => (
    <div className={styles.input_container}>
      <div className={styles.input_box}>
        <input
          ref={inputRef}
          type="text"
          className={styles.input}
          placeholder="찾으시는 내용을 입력해 주세요"
          onKeyDown={handleKeyDown}
        />
        <ClearIcon
          width={20}
          height={20}
          color="#CDD0D2"
          className={styles.clear_icon}
          onClick={handleClear}
          style={{
            visibility: inputRef.current?.value ? "visible" : "hidden",
          }}
        />
        <SearchIcon
          width={32}
          height={32}
          className={styles.search_icon}
          onClick={triggerSearch}
        />
      </div>
    </div>
  );

  const renderSearchResult = () => (
    <div className={styles.search_result_box}>
      <span className={styles.search_result_count}>
        검색결과 총 {searchResultCount}건
      </span>
      <div className={styles.search_result_reset_box} onClick={onReset}>
        <InitIcon width={24} height={24} className={styles.init_icon} />
        <span>검색초기화</span>
      </div>
    </div>
  );

  return (
    <div className={styles.wrapper}>
      {renderSearchInput()}
      {searchInput && renderSearchResult()}
    </div>
  );
}
