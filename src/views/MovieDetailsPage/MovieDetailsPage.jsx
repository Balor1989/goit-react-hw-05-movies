// import s from './MovieDetailsPage.module.css';
import {
  useParams,
  Link,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieDetails } from '../../services/fetchMovies';
import { GoArrowLeft } from 'react-icons/go';
import HTag from '../../components/HTag';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    fetchMovieDetails(id).then(setMovieDetails);
  }, [id]);

  const onClickGoBackButon = () => {
    navigate(location?.state?.from || '/');
  };

  return (
    movieDetails && (
      <>
        <button type="butoon" onClick={onClickGoBackButon}>
          <GoArrowLeft />
          Go Back
        </button>
        <img
          src={
            movieDetails.poster_path
              ? `https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`
              : `https://cdn.pixabay.com/photo/2016/03/31/18/36/cinema-1294496_1280.png`
          }
          alt={movieDetails.original_title}
        />
        <div>
          <div>
            <HTag title={movieDetails.original_title} />
            <p>{`User Score: ${movieDetails.vote_average * 10}%`}</p>
            <HTag title="Overview" />
            <p>{movieDetails.overview}</p>
            <h3>Genres</h3>
            <p>
              {movieDetails.genres.map(genre => (
                <span key={genre.id}>{genre.name}</span>
              ))}
            </p>
          </div>
          <div>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
            <Outlet />
          </div>
        </div>
      </>
    )
  );
};

export default MovieDetailsPage;
