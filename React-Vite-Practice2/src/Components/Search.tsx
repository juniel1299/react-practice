import { useState } from "react";
import './search.css';

const Search = () =>{
    const [search, setSearch] = useState<string>("");
    const onChangeSearch = (search: string) => {
        setSearch(search);
    }
    const onClickSearch = () => {
        console.log(search);
    }

    return (
        <>
            <div className="search-bar">
                <input 
                    type="text" 
                    onChange={(e) => onChangeSearch(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            onClickSearch();
                        }
                    }}
                    value={search}
                 />
                <button onClick={onClickSearch}>검색</button>
            </div>
        </>
    )
}
export default Search;