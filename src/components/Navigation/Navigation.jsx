import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <header className={s.header}>
      <nav>
        <NavLink exact to="/" className={s.link}>
          Main page
        </NavLink>
        <NavLink to="/second" className={s.link}>
          Second page
        </NavLink>
        <NavLink to="/third" className={s.link}>
          Third page
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
