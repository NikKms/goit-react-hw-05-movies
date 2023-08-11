import { useDisclosure } from '@chakra-ui/react';
import { AppBar } from 'components/AppBar';
import { Footer } from 'components/Footer';
import { Main } from 'components/Main/Main';
import { ModalSearchbar } from 'components/ModalSearchbar';
import { UpButton } from 'components/UpButton';
import { ContextProvider } from 'context/contextProvider';

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ContextProvider>
      <AppBar onOpen={onOpen} />
      <Main />
      <UpButton />
      <Footer />
      <ModalSearchbar isOpen={isOpen} onClose={onClose} />
    </ContextProvider>
  );
};

export default App;
