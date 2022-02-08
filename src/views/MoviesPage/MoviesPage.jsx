import HTag from '../../components/HTag';
import s from './MoviesPage.module.css';
import { GoSearch } from 'react-icons/go';
import { IconContext } from 'react-icons';

const MoviesPage = () => {
  return (
    <section className={s.moviePage}>
      <HTag title="Search movies" />
      <div>
        <form>
          <input type="text" placeholder="Search..." />
          <button type="submit">
            <IconContext.Provider value={`${s.searchIcon}`}>
              <GoSearch />
            </IconContext.Provider>
          </button>
        </form>
      </div>
    </section>
  );
};

export default MoviesPage;
