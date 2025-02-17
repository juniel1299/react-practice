import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPopularMovies } from "../api/tmdb"; // TMDB API 호출 
import './list.css';

function List({ searchTerm , setTotalCount}) {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  // 🎯 영화 데이터 가져오기
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getPopularMovies();
        if (data && Array.isArray(data)) {
          setMovies(data);
        } else {
          console.error('데이터 형식이 올바르지 않습니다.');
          setMovies([]);
        }
      } catch (error) {
        console.error('영화 데이터를 가져오는 중 오류 발생:', error);
        setMovies([]);
      }
    };
    fetchMovies();
  }, []);

  // 검색어 필터링
  const filteredMovies = Array.isArray(movies) ? movies.filter((movie) =>
        movie.title?.toLowerCase().includes((searchTerm || "").toLowerCase())
  )
  : [];

    useEffect(() => {
      setTotalCount(filteredMovies.length);
    }, [filteredMovies, setTotalCount]);

    const onClickNaver = (movieTitle) => {
      const query = encodeURIComponent(movieTitle);
      window.open(`https://search.naver.com/search.naver?query=${query}`, '_blank');
    };
  
  // UI 
  return (
    <div className="List">
      <h1 className="Title">인기 영화</h1>
      <div className="Movie-block">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div key={movie.id} style={{ cursor: "pointer" }}>
              <img
                src={movie.poster_path 
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
                  : 'https://via.placeholder.com/500x750?text=No+Image'} // 대체 이미지 제공
                alt={movie.title || '제목 없음'}
                style={{ width: "100%", borderRadius: "10px" }}
                onClick={() => navigate(`/movie/${movie.id}`)}
              />
              <h3>
                {movie.title || '제목 없음'} 
                <button className="searchNaver" onClick={() => onClickNaver(movie.title)}>검색</button>
              </h3>
              <p>{movie.vote_average ?? '평점 없음'} / 10</p>
            </div>
          ))
        ) : (
          <p>검색 결과가 없습니다.</p>
        )}
      </div>
    </div>
  );
}

export default List;