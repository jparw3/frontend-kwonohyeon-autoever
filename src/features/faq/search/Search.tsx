import { useState } from "react";
import styles from "@/features/faq/search/Search.module.scss";
import SearchIcon from "@/assets/icons/SearchIcon";
import ClearIcon from "@/assets/icons/ClearIcon";
import InitIcon from "@/assets/icons/InitIcon";

// TODO 키보드 엔터 이벤트 추가

export default function Search() {
  const [inputValue, setInputValue] = useState("");

  const inputValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const clearInputHandler = () => {
    setInputValue("");
  };

  const searchResetHandler = () => {
    setInputValue("");
    // TODO 여기서는 인풋만 클리어 하는게 아니라 검색도 초기화 해야함
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.input_container}>
        <div className={styles.input_box}>
          <input
            className={styles.input}
            type="text"
            placeholder="찾으시는 내용을 입력해 주세요"
            value={inputValue}
            onChange={inputValueHandler}
          />
          {inputValue && (
            <ClearIcon
              width={20}
              height={20}
              color="#CDD0D2"
              className={styles.clear_icon}
              onClick={clearInputHandler}
            />
          )}
          <SearchIcon width={32} height={32} className={styles.search_icon} />
        </div>
      </div>
      <div className={styles.search_result_box}>
        <span className={styles.search_result_count}>검색결과 총 00건</span>
        <div
          onClick={searchResetHandler}
          className={styles.search_result_reset_box}
        >
          <InitIcon width={24} height={24} className={styles.init_icon} />
          <span>검색초기화</span>
        </div>
      </div>
    </div>
  );
}
