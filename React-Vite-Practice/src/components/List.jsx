import { useState } from "react";
import PopularList from "./PopularList";
import NewList from "./NewList";
import KoreanList from "./KoreanList";
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
        <button
          className={viewType === "korean" ? "active" : ""}
          onClick={() => setViewType("korean")}
        >
          한국 영화
        </button>
      </div>

      {(() => {
        switch (viewType) {
          case "popular":
            return <PopularList searchTerm={searchTerm} setTotalCount={setTotalCount} />;
          case "new":
            return <NewList searchTerm={searchTerm} setTotalCount={setTotalCount} />;
          case "korean":
            return <KoreanList searchTerm={searchTerm} setTotalCount={setTotalCount} />;
          default:
            return <PopularList searchTerm={searchTerm} setTotalCount={setTotalCount} />;
        }
      })()}
    </div>
  );
}

export default List;