import { useState } from 'react';
import './search.css';
const Search = ({setSearchTerm}) => {

    const [inputValue, setInputValue] = useState("");

    const onClickSubmit = () => {
        setSearchTerm(inputValue);
    }
    return (
        <div className="Search">
            <input 
                type="text" 
                placeholder="검색 할 영화를 적어주세요"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} 
                onKeyDown={(e) => {
                    if(e.key === 'Enter'){
                        onClickSubmit();
                    }
                }}
            />
            <button onClick={onClickSubmit}>확인</button>
        </div>
    )
};

export default Search;