import { AppBar } from 'components/AppBar';
import { Footer } from 'components/Footer';
import { Main } from 'components/Main/Main';
import { ContextProvider } from 'context/contextProvider';

const App = () => {
  return (
    <ContextProvider>
      <AppBar />
      <Main />
      <Footer />
    </ContextProvider>
  );
};

export default App;
