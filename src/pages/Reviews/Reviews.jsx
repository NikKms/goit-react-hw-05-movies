import { getMovieReviews } from 'services/api';
import { StyledReviews } from './Reviews.styled';
import { useMovieData } from 'hooks/useMovieData';

const Reviews = () => {
  const { data, error } = useMovieData(getMovieReviews);
  const reviews = data.results || [];

  return (
    <section>
      <StyledReviews>
        {error && <p className="error">{error}</p>}
        {!error && reviews.length > 0 ? (
          <div>
            {reviews.map(({ id, author, content }) => (
              <div className="review" key={id}>
                <p className="author">{author}</p>
                <p>{content}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No reviews available.</p>
        )}
      </StyledReviews>
    </section>
  );
};

export default Reviews;
