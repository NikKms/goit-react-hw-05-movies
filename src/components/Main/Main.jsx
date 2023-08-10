import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainStyled } from './Main.styled';

const LazyHome = lazy(() => import('../../pages/Home/Home'));
const LazyMovies = lazy(() => import('../../pages/Movies/Movies'));
const LazyMovieDetails = lazy(() =>
  import('../../pages/MovieDetails/MovieDetails')
);
const LazyNotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage')
);

export const Main = () => {
  return (
    <MainStyled>
      <Suspense>
        <Routes>
          <Route path="/" element={<LazyHome />} />
          <Route path="/movies" element={<LazyMovies />} />
          <Route path="/movies/:movieId/*" element={<LazyMovieDetails />} />
          <Route path="*" element={<LazyNotFoundPage />} />
        </Routes>
      </Suspense>
    </MainStyled>
  );
};
