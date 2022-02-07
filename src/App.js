import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import HTag from './components/HTag';

function App() {
  return (
    <section>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<HTag title="Search movies" />} />
      </Routes>
    </section>
  );
}

export default App;
