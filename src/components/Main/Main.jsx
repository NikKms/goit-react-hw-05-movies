import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from '@chakra-ui/react';

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
    <Container mt="75px" px="28px" maxW="1240px">
      <Suspense>
        <Routes>
          <Route path="/" element={<LazyHome />} />
          <Route path="/movies" element={<LazyMovies />} />
          <Route path="/movies/:movieId/*" element={<LazyMovieDetails />} />
          <Route path="*" element={<LazyNotFoundPage />} />
        </Routes>
      </Suspense>
    </Container>
  );
};
