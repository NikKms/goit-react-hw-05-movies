import PropTypes from 'prop-types';

import { NavLink, useLocation } from 'react-router-dom';
import { Item } from './MovieItem.styled';

const MovieItem = ({ movie }) => {
  const location = useLocation();

  const releaseDate = movie.release_date || '';
  const releaseYear = releaseDate.slice(0, 4);

  return (
    <Item>
      <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
        <div>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` || (
                    <p>Loading...</p>
                  )
                : 'https://www.ormistonhospital.co.nz/wp-content/uploads/2016/05/No-Image.jpg'
            }
            alt={movie.title}
          />
        </div>
        <>
          <h4>{movie.original_title || movie.name}</h4>
          <h4>{releaseYear}</h4>
        </>
      </NavLink>
    </Item>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    adult: PropTypes.bool,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    original_title: PropTypes.string,
    name: PropTypes.string,
    release_date: PropTypes.string,
  }).isRequired,
};

export default MovieItem;
