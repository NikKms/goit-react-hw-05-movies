import { Box } from '@chakra-ui/react';
import { RotatingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </Box>
  );
};

export default Loader;
