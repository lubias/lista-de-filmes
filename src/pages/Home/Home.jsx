import { useEffect, useState } from "react";
import { MovieService } from "../../api/MovieService";
import MovieCard from "../../componentes/MovieCard/MovieCard";

const Home = ({ searchValueProp }) => {
  const [movies, setMovie] = useState([]);

  async function getMovies() {
    const {
      data: { results },
    } = await MovieService.getMovies();

    setMovie(results);
  }

  async function getMoviesSearch(movieString) {
    const {
      data: { results },
    } = await MovieService.searchMovies(movieString);

    setMovie(results);
  }

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    console.log(movies);
  });

  useEffect(() => {
    if(searchValueProp){
      getMoviesSearch(searchValueProp);
    }

    if(searchValueProp === ""){
      getMovies();
    }
  });

  return (
    <section className="Home">
      {movies.map((movie) => (
        <MovieCard movieProp={movie} key={movie.id} />
      ))}
    </section>
  );
};

export default Home;
