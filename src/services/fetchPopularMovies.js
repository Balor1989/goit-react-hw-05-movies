import axios from 'axios';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

async function fetchPopularMovies() {
  const API_KEY = '7f7f3cc03c05575ccb98184b93174d1e';
  try {
    Loading.pulse();

    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?page=1&api_key=${API_KEY}`,
    );
    const movies = await response.data.results;
    Loading.remove();
    return movies;
  } catch (error) {
    Notify.failure(`${error}`);

    Loading.remove();

    return Promise.reject(error);
  }
}
export default fetchPopularMovies;