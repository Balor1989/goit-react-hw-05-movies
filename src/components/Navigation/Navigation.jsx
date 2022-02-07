import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <header className={s.header}>
      <nav>
        <NavLink exact to="/" className={s.link}>
          Home
        </NavLink>
        <NavLink to="/movies" className={s.link}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
