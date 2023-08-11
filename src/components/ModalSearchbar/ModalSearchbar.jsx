import PropTypes from 'prop-types';

import { Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react';
import Searchbar from 'components/Searchbar/Searchbar';

export const ModalSearchbar = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody border="1px solid orange" borderRadius="4px">
          <Searchbar onClose={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

ModalSearchbar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
