import { Suspense, lazy } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { HeaderStyled, MainStyled } from './App.styled';

const LazyHome = lazy(() => import('../../pages/Home'));
const LazyMovies = lazy(() => import('../../pages/Movies'));
const LazyMovieDetails = lazy(() => import('../../pages/MovieDetails'));

const App = () => {
  return (
    <div>
      <HeaderStyled>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </nav>
      </HeaderStyled>
      <MainStyled>
        <Suspense>
          <Routes>
            <Route path="/" element={<LazyHome />} />
            <Route path="/movies" element={<LazyMovies />} />
            <Route path="/movies/:movieId/*" element={<LazyMovieDetails />} />
          </Routes>
        </Suspense>
      </MainStyled>
    </div>
  );
};

export default App;
