import { useMovieData } from 'hooks/useMovieData';
import { getMovieCast } from 'services/api';
import { StyledCast } from './Cast.styled';

const Cast = () => {
  const { data, error } = useMovieData(getMovieCast);
  const cast = data.cast || [];

  return (
    <section>
      {error && <p>{error}</p>}
      {!error && cast.length > 0 ? (
        (
          <StyledCast>
            {cast.map(({ id, name, character, profile_path }) => (
              <div key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}` || (
                          <p>Loading...</p>
                        )
                      : 'https://www.ormistonhospital.co.nz/wp-content/uploads/2016/05/No-Image.jpg'
                  }
                  alt={name}
                />
                <p>{name}</p>
                <p>{character}</p>
              </div>
            ))}
          </StyledCast>
        ) || <p>Loading...</p>
      ) : (
        <p>
          Sorry, we are currently gathering all the actors who appeared in this
          movie. They will be added to the list soon.
        </p>
      )}
    </section>
  );
};

export default Cast;
