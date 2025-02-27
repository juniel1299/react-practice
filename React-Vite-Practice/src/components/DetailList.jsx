import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../api/tmdb";
import './DetailList.css';
import Header from "./Header";
import Comment from "./Comment";
function DetailList() {
  const { id } = useParams(); // URL에서 영화 ID 가져오기
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getMovieDetails(id);
      setMovie(data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) return <h2>영화 불러오는 중...</h2>;

  return (
    <div className="DetailList">
    <Header/>
      <h1 className="Title">{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>개봉일: {movie.release_date}</p>
      <p>평점: {movie.vote_average} / 10</p>
      <p className="content">줄거리: {movie.overview}</p>
      <Comment/>
    </div>
  );
}

export default DetailList;