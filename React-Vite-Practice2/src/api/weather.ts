import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY; 
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getCurrentWeather = async (city: string) => {
  // 테스트
  //console.log(API_KEY,'키'); 
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY, 
        units: "metric", 
        lang: "kr", 
      },
    });
    return response.data;
  } catch (error) {
    console.error("현재 날씨 데이터를 가져오는 중 오류 발생:", error);
    alert('존재하지 않는 도시입니다.')
    return null;
  }
};

// 5일간의 날씨 예보 가져오기
export const getWeatherForecast = async (city: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
        lang: "kr",
      },
    });
    return response.data;
  } catch (error) {
    console.error("날씨 예보 데이터를 가져오는 중 오류 발생:", error);
    return null;
  }
};

// 위도, 경도로 현재 날씨 가져오기 (GPS 기반)
export const getWeatherByCoords = async (lat: number, lon: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: "metric",
        lang: "kr",
      },
    });
    return response.data;
  } catch (error) {
    console.error("현재 위치 기반 날씨 데이터를 가져오는 중 오류 발생:", error);
    return null;
  }
};