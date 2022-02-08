import { Link, useLocation } from 'react-router-dom';
import s from './MoviesList.module.css';

const MoviesList = ({ response }) => {
  const location = useLocation();
  return (
    <ul className={s.movieList}>
      {response.results.map(movie => (
        <li key={movie.id} className={s.movieCard}>
          <Link
            to={{ pathname: `/movies/${movie.id}`, state: { from: location } }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              width="100px"
            />
            <h3 className={s.movieTitle}>{movie.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default MoviesList;
