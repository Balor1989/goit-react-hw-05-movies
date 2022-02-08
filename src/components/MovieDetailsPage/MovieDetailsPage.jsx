import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieDetails } from '../../services/fetchMovies';
import HTag from '../HTag';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    fetchMovieDetails(id).then(setMovieDetails);
  }, [id]);

  console.log(movieDetails);
  const { poster_path } = movieDetails;

  return (
    movieDetails && (
      <>
        {' '}
        <button>button</button>
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
      </>
    )
  );
};

export default MovieDetailsPage;
