import { Link } from "react-router-dom";

const MovieCard = ({ movieProp }) => {
  return (
    <div className="MovieCard">
      <div className="movie-image">
        <img src={`https://image.tmdb.org/t/p/w1280${movieProp.poster_path}`} alt={""} />
        <div className="movie-description">
          <h3>{""}</h3>
          <Link to={`/movie/${movieProp.id}`} className="btn-details">Ver Detalhes</Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
