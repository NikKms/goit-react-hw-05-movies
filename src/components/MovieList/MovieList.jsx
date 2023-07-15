import PropTypes from 'prop-types';

import MovieItem from 'components/MovieItem';
import { List } from './MovieList.styled';

const MovieList = ({ movies = [] }) => {
  const showMovies = movies?.length > 0;

  return (
    <List>
      {showMovies &&
        movies.map(movie => <MovieItem key={movie.id} movie={movie} />)}
    </List>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default MovieList;
