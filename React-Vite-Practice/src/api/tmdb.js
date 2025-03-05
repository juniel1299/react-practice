import axios from "axios";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY; // 환경 변수에서 API 키 가져오기
const BASE_URL = "https://api.themoviedb.org/3";

// API 키 확인
//console.log("현재 API_KEY:", API_KEY);

// List 화면 (인기)
export const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
        language: "ko-KR",
        page: 1,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error(" 인기 영화 데이터를 가져오는 중 오류:", error);
    return [];
  }
};

//최신
export const getNowPlayingMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/now_playing`, {
      params: {
        api_key: API_KEY,
        language: "ko-KR",
        page: 1,
        region: "KR",
      },
    });
    return response.data.results;
  } catch (error) {
    console.error(" 최신 영화 데이터를 가져오는 중 오류:", error);
    return [];
  }
};
//상세페이지 화면 데이터
export const getMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: API_KEY, // API 키 포함 확인
        language: "ko-KR",
      },
    });
    return response.data;
  } catch (error) {
    console.error("영화 상세 정보를 가져오는 중 오류 발생:", error);
    return null;
  }
};

export const getKoreanMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        language: "ko-KR", // 한국어 제목 가져오기
        page: 1,
        with_origin_country: "KR", //  제작 국가가 한국(KR)인 영화만 가져오기
        include_adult : false,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("한국 영화 데이터를 가져오는 중 오류 발생:", error);
    return [];
  }
};