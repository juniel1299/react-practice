import './list.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getKoreanMovies } from "../api/tmdb";
function KoreanList({ searchTerm, setTotalCount }){
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getKoreanMovies();
      setMovies(data);
    };
    fetchMovies();
  }, []);

  // 검색어 필터링
  const filteredMovies = movies.filter((movie) =>
    movie.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 필터링된 영화 개수 업데이트
  useEffect(() => {
    setTotalCount(filteredMovies.length);
  }, [filteredMovies, setTotalCount]);

  // 네이버 검색
  const onClickNaver = (movieTitle) => {
    const query = encodeURIComponent(movieTitle);
    window.open(`https://search.naver.com/search.naver?query=${query}`, '_blank');
  };

  return (
    <div className="Movie-block">
      {filteredMovies.length > 0 ? (
        filteredMovies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <img
              src={movie.poster_path 
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
                : 'https://via.placeholder.com/500x750?text=No+Image'}
              alt={movie.title || '제목 없음'}
              style={{ width: "100%", borderRadius: "10px" }}
              onClick={() => navigate(`/movie/${movie.id}`)}
            />
            <h3>
              {movie.title || '제목 없음'}
              <button 
                className="searchNaver" 
                onClick={() => onClickNaver(movie.title)}
              >
                검색
              </button>
            </h3>
            <p>평점: {movie.vote_average ?? 'N/A'}</p>
          </div>
        ))
      ) : (
        <p>영화가 없습니다..</p>
      )}
    </div>
  );
}



export default KoreanList;