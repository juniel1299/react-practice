import { useState } from "react";
import PopularList from "./popularList";
import NewList from "./NewList";
import "./list.css";

function List({ searchTerm, setTotalCount }) {
  const [viewType, setViewType] = useState("popular");

  return (
    <div className="List">
      <h1 className="Title">영화 리스트</h1>

      <div className="button-group">
        <button
          className={viewType === "popular" ? "active" : ""}
          onClick={() => setViewType("popular")}
        >
          인기 영화
        </button>
        <button
          className={viewType === "new" ? "active" : ""}
          onClick={() => setViewType("new")}
        >
          최신 영화
        </button>
      </div>

      {viewType === "popular" ? (
        <PopularList searchTerm={searchTerm} setTotalCount={setTotalCount} />
      ) : (
        <NewList searchTerm={searchTerm} setTotalCount={setTotalCount} />
      )}
    </div>
  );
}

export default List;