import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import {
  StyledAdditionals,
  StyledHeading,
  StyledList,
  StyledListItem,
} from './DetailsAdditional.styled';

export const DetailsAdditional = ({ location }) => {
  return (
    <StyledAdditionals>
      <StyledHeading> Additional information</StyledHeading>
      <StyledList>
        <StyledListItem>
          <Button
            as={Link}
            to="cast"
            boxShadow="md"
            state={{ from: location.state?.from }}
          >
            Cast
          </Button>
        </StyledListItem>
        <li>
          <Button
            as={Link}
            to="reviews"
            boxShadow="md"
            state={{ from: location.state?.from }}
          >
            Reviews
          </Button>
        </li>
      </StyledList>
    </StyledAdditionals>
  );
};

DetailsAdditional.propTypes = {
  location: PropTypes.object.isRequired,
};
