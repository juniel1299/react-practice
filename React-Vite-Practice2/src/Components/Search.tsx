import React, { useState } from "react";

interface SearchProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Search: React.FC<SearchProps> = ({ setSearch }) => {
  const [input, setInput] = useState<string>(""); 

  const onClickSubmit = () => {
    setSearch(input); 
  };

  return (
    <>
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
    </>
  );
};

export default Search;