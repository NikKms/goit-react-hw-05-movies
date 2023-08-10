import { Suspense, lazy } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import { getMovieById } from 'services/api';

import Loader from 'components/Loader/Loader';
import { Box, Button } from '@chakra-ui/react';
import { ArrowLeftIcon } from '@chakra-ui/icons';
import { DetailsInfo } from 'components/DetailsInfo';
import { DetailsAdditional } from 'components/DetailsAdditional';
import { useMovieData } from 'hooks/useMovieData';

const LazyCast = lazy(() => import('../Cast/Cast'));
const LazyReviews = lazy(() => import('../Reviews/Reviews'));

const MovieDetails = () => {
  const { data: movie, error, loading } = useMovieData(getMovieById);

  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (location.state) {
      navigate(location.state.from);
      return;
    }

    navigate('/');
  };

  return (
    <Box minHeight="100hv">
      <Button type="button" onClick={handleGoBack} _hover={{ color: 'orange' }}>
        <ArrowLeftIcon />
      </Button>
      {loading && <Loader />}
      {error ? (
        <p>{error}</p>
      ) : (
        movie &&
        !loading && (
          <DetailsInfo
            id={movie.id}
            posterPath={
              movie.poster_path &&
              `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            }
            title={movie.original_title || movie.name}
            voteAverage={movie.vote_average}
            overview={movie.overview}
            genres={movie.genres}
          />
        )
      )}
      {!error && <DetailsAdditional location={location} />}
      {!error && (
        <Suspense
          fallback={<div style={{ margin: '0 auto' }}>LOADING.....</div>}
        >
          <Routes>
            <Route path="cast" element={<LazyCast />} />
            <Route path="reviews" element={<LazyReviews />} />
          </Routes>
        </Suspense>
      )}
    </Box>
  );
};

export default MovieDetails;
