import { createContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const searchParamsContext = createContext();

export const ContextProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const handleRequest = query => {
    if (query) {
      setSearchParams({ query: query });
      navigate(`/movies?query=${query}`);
    }
  };

  return (
    <searchParamsContext.Provider
      value={{
        searchParams,
        setSearchParams,
        handleRequest,
      }}
    >
      {children}
    </searchParamsContext.Provider>
  );
};
