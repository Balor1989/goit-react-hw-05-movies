import HTag from '../../components/HTag';
import MoviesList from '../../components/MoviesList';
import s from './MoviesPage.module.css';
import { GoSearch } from 'react-icons/go';
import { useState } from 'react';
import { fetchSearchMovies } from '../../services/fetchMovies';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MoviesPage = () => {
  const [searchMovies, setSearchMovies] = useState(null);
  const [query, setQuery] = useState('');

  const onHandleChange = e => {
    setQuery(e.currentTarget.value);
  };
  const onQuerySubmit = e => {
    e.preventDefault();
    if (!query) {
      toast.warn('Please, enter movie name');
      return;
    }
    fetchSearchMovies(query).then(setSearchMovies);
    setQuery('');
  };

  return (
    <>
      <section className={s.moviePage}>
        <HTag title="Search movies" />
        <div>
          <form onSubmit={onQuerySubmit}>
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={onHandleChange}
            />
            <button type="submit">
              <GoSearch />
            </button>
          </form>
        </div>
      </section>
      <section>
        {searchMovies && <MoviesList response={searchMovies} />}
      </section>
    </>
  );
};

export default MoviesPage;
