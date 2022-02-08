import HTag from '../../components/HTag';
import s from './MoviesPage.module.css';

const MoviesPage = () => {
  return (
    <section className={s.moviePage}>
      <HTag title="Search movies" />
      <div>
        <form>
          <input type="text" placeholder="Search..." />
          <button type="submit"></button>
        </form>
      </div>
    </section>
  );
};

export default MoviesPage;
