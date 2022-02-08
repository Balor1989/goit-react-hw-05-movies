import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import HTag from './components/HTag';
import MovieDetailsPage from './components/MovieDetailsPage';
import Cast from './components/Cast/Cast';

function App() {
  return (
    <section>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/movies" element={<HTag title="Search movies" />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />}>
          <Route path="/movies/:id/cast" element={<Cast />} />
          <Route
            path="/movies/:id/reviews"
            element={<HTag title="Reviews" />}
          />
        </Route>
      </Routes>
    </section>
  );
}

export default App;
