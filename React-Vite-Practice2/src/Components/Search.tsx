import React, { useState } from "react";
import './search.css';

interface SearchProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Search: React.FC<SearchProps> = ({ setSearch }) => {
  const [input, setInput] = useState<string>(""); 

  const onClickSubmit = () => {
    setSearch(input); 
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="도시 이름을 입력하세요"
        value={input}
        onChange={(e) => setInput(e.target.value)} 
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onClickSubmit();
          }
        }}
      />
      <button onClick={onClickSubmit}>검색</button>
    </div>
  );
};

export default Search;