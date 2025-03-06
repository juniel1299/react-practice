import { useEffect, useState } from "react";
import { getCurrentWeather } from "../api/weather";

const Weather = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [weather, setWeather] = useState<any>(null);
  const CITY = "Seoul"; // 기본 도시 설정

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getCurrentWeather(CITY);
      setWeather(data);
    };

    fetchWeather();
  }, []);

  if (!weather) return <p>⏳ 날씨 정보를 불러오는 중...</p>;

  return (
    <div>
      <h2>📍 {weather.name}의 날씨</h2>
      <p>🌡️ 온도: {weather.main.temp}°C</p>
      <p>💧 습도: {weather.main.humidity}%</p>
      <p>🌬️ 풍속: {weather.wind.speed}m/s</p>
      <p>🌤️ 상태: {weather.weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
        alt="날씨 아이콘"
      />
    </div>
  );
};

export default Weather;