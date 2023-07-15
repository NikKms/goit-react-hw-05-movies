import { Suspense, useEffect, useState, lazy } from 'react';
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  useParams,
  Link,
} from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import { getMovieById } from 'services/api';
import {
  MovieInfo,
  MoviePoster,
  StyledLinkWraper,
  StyledMovieDetails,
} from './styled';

import Loader from 'components/Loader/Loader';
import { displayNoResultMessage } from 'ErrorHandling/errorHandling';

const LazyCast = lazy(() => import('./Cast'));
const LazyReviews = lazy(() => import('./Reviews'));

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieDetails = async movieId => {
      try {
        setLoading(true);

        const data = await getMovieById(movieId);
        setMovie(data);
      } catch (error) {
        displayNoResultMessage(setError);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails(movieId);
  }, [movieId]);

  const handleGoBack = () => {
    if (location.state) {
      navigate(location.state.from);
      return;
    }

    navigate('/');
  };

  return (
    <section>
      <button type="button" onClick={handleGoBack}>
        <AiOutlineArrowLeft />
        <b>Go back</b>
      </button>
      {loading && <Loader />}
      {error ? (
        <p>{error}</p>
      ) : (
        movie &&
        !loading && (
          <StyledMovieDetails>
            <MoviePoster>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : 'https://www.ormistonhospital.co.nz/wp-content/uploads/2016/05/No-Image.jpg'
                }
                alt={movieId.title}
              />
            </MoviePoster>
            <MovieInfo>
              <h1>{movie.original_title || movie.name}</h1>
              <p>User score: {(movie.vote_average * 10).toFixed()}%</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              {movie.genres &&
                movie.genres.map((genre, index) => (
                  <span key={index}>{genre.name}</span>
                ))}
            </MovieInfo>
          </StyledMovieDetails>
        )
      )}

      {!error && (
        <StyledLinkWraper>
          <h3> Additional information</h3>
          <ul>
            <li>
              <Link to="cast" state={{ from: location.state?.from }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={{ from: location.state?.from }}>
                Reviews
              </Link>
            </li>
          </ul>
        </StyledLinkWraper>
      )}

      {!error && (
        <Suspense
          fallback={
            <div
              style={{
                fontSize: '24px',
                textAlign: 'center',
                marginTop: '20px',
                backgroundColor: '#f8f8f8',
                color: '#333',
                padding: '20px',
              }}
            >
              Loading...
            </div>
          }
        >
          <Routes>
            <Route path="cast" element={<LazyCast />} />
            <Route path="reviews" element={<LazyReviews />} />
          </Routes>
        </Suspense>
      )}
    </section>
  );
};

export default MovieDetails;
