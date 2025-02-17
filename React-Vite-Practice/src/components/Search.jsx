import { useState } from 'react';
import './search.css';

const Search = ({ setSearchTerm, totalCount }) => {
    const [inputValue, setInputValue] = useState("");

    // 검색어 제출 함수
    const onClickSubmit = () => {
        setSearchTerm(inputValue);
    };

    return (
        <div className="Search">
            <input 
                type="text" 
                placeholder="검색할 영화를 입력하세요"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} 
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        onClickSubmit();
                    }
                }}
            />
            <button onClick={onClickSubmit}>확인</button>

            <div className="result-count">
                총 {totalCount}개의 작품이 존재합니다.
            </div>
        </div>
    );
};

export default Search;