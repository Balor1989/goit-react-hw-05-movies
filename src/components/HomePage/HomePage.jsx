// import s from './HomePage.module.css';
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
    <>
      <HTag title="Trending Today" />
      <ul>
        {popularMovies &&
          popularMovies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt="{movie.title}"
                />
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default HomePage;
