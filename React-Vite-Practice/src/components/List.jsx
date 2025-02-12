import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // 페이지 이동(useNavigate)
import { getPopularMovies } from "../api/tmdb"; // TMDB API 호출 
import './list.css';
function List() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate(); //  페이지 이동을 위한 Hook

  useEffect(() => {
    // 인기 영화 가져오기
    const fetchMovies = async () => {
      const data = await getPopularMovies();
      setMovies(data);
    };
    fetchMovies();
  }, []);

  return (
    <div className="List">
      <h1 className="Title">🎬 인기 영화</h1>
      <div className="Movie-block">
        {movies.map((movie) => (
          <div key={movie.id} style={{ cursor: "pointer" }}> 
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "100%", borderRadius: "10px" }}
              onClick={() => navigate(`/movie/${movie.id}`)} // 클릭 이벤트 상세 페이지 이동
            />
            <h3>{movie.title}</h3>
            <p>{movie.vote_average} / 10</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;