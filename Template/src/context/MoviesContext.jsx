import { createContext, useContext, useState } from "react";

const MoviesContext = createContext();

export function MoviesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [watchLater, setWatchLater] = useState([]);

  const addToFavorites = (movie) => {
    const exists = favorites.find((item) => item.id === movie.id);
    if (!exists) {
      setFavorites([...favorites, movie]);
    }
  };

  const addToWatchLater = (movie) => {
    const exists = watchLater.find((item) => item.id === movie.id);
    if (!exists) {
      setWatchLater([...watchLater, movie]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((movie) => movie.id !== id));
  };

  const removeFromWatchLater = (id) => {
    setWatchLater(watchLater.filter((movie) => movie.id !== id));
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        watchLater,
        addToFavorites,
        addToWatchLater,
        removeFromFavorites,
        removeFromWatchLater,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

export function useMovies() {
  return useContext(MoviesContext);
}