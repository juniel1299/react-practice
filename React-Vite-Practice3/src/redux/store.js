import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice"; // 검색어 관리 리듀서 추가

export const store = configureStore({
  reducer: {
    search: searchReducer, // 여러 개의 slice 추가 가능
  },
});
