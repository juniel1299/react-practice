import { useEffect, useState } from "react";
import { getCurrentWeather } from "../api/weather";

interface WeatherProps {
  search: string;
}

const Weather: React.FC<WeatherProps> = ({ search }) => {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      if (!search) return; 

      setLoading(true);
      setError(null);

      try {
        const data = await getCurrentWeather(search);
        setWeather(data);
      } catch (err) {
        setError("날씨 정보를 불러올 수 없습니다. 올바른 도시 이름을 입력하세요.");
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [search]); // 🔹 search 값이 변경될 때마다 실행

  if (loading) return <p>⏳ 날씨 정보를 불러오는 중...</p>;
  if (error) return <p>{error}</p>;
  if (!weather) return <p>🔍 도시 이름을 입력해 주세요.</p>;

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