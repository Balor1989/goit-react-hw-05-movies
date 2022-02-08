import HTag from '../HTag';
import s from './MoviesPage.module.css';

const MoviesPage = () => {
  return (
    <section className={s.moviePage}>
      <HTag title="Search movies" />;
    </section>
  );
};

export default MoviesPage;
