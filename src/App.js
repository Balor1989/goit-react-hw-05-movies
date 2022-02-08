import './App.css';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import HTag from './components/HTag';

const HomePage = lazy(() =>
  import(
    './components/HomePage/HomePage.jsx' /* webpackChunkName: "home-page" */
  ),
);
const MovieDetailsPage = lazy(() =>
  import(
    './components/MovieDetailsPage/MovieDetailsPage.jsx' /* webpackChunkName: "movies-detail" */
  ),
);
const Cast = lazy(() =>
  import('./components/Cast/Cast.jsx' /* webpackChunkName: "cast" */),
);
const MoviesPage = lazy(() =>
  import(
    './components/MoviesPage/MoviesPage.jsx' /* webpackChunkName: "movies-page" */
  ),
);

function App() {
  return (
    <section>
      <Navigation />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MovieDetailsPage />}>
            <Route path="/movies/:id/cast" element={<Cast />} />
            <Route
              path="/movies/:id/reviews"
              element={<HTag title="Reviews" />}
            />
          </Route>
        </Routes>
      </Suspense>
    </section>
  );
}

export default App;
