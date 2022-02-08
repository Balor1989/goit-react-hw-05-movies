import s from './HomePage.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPopularMovies } from '../../services/fetchMovies';
import HTag from '../HTag';

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState(null);

  useEffect(() => {
    fetchPopularMovies().then(setPopularMovies);
  }, []);
  return (
    <section className={s.homePage}>
      <HTag title="Trending Today" />
      <ul className={s.movieList}>
        {popularMovies &&
          popularMovies.results.map(movie => (
            <li key={movie.id} className={s.movieCard}>
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt="{movie.title}"
                  width="100px"
                />
                <h3 className={s.movieTitle}>{movie.title}</h3>
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default HomePage;
