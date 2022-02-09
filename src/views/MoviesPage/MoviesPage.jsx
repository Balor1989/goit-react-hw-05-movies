import MoviesList from '../../components/MoviesList';
import s from './MoviesPage.module.css';
import { GoSearch } from 'react-icons/go';
import { useState } from 'react';
import { fetchSearchMovies } from '../../services/fetchMovies';
import { toast } from 'react-toastify';
import { IconContext } from 'react-icons';
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
        <form onSubmit={onQuerySubmit} className={s.searchForm}>
          <input
            className={s.inputQuery}
            type="text"
            placeholder="Search..."
            value={query}
            onChange={onHandleChange}
          />
          <button type="submit" className={s.searchButton}>
            <IconContext.Provider value={{ className: `${s.searchIcon}` }}>
              <GoSearch />
            </IconContext.Provider>
          </button>
        </form>
      </section>
      <section>
        {searchMovies && <MoviesList response={searchMovies} />}
      </section>
    </>
  );
};

export default MoviesPage;
