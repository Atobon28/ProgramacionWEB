import { useMovies } from "./context/MoviesContext";
import { Link } from "react-router-dom";

function Saved() {
  const {
    favorites,
    watchLater,
    removeFromFavorites,
    removeFromWatchLater,
  } = useMovies();

  return (
    <div className="container">
      <h1>Películas Guardadas</h1>

      <div className="nav">
        <Link to="/catalogue">Volver al catálogo</Link>
      </div>

      <h2>Favoritos</h2>
      {favorites.length === 0 ? (
        <p>No has agregado películas aún.</p>
      ) : (
        <div className="movies-grid">
          {favorites.map((movie) => (
            <div className="card" key={movie.id}>
              <img src={movie.image} alt={movie.title} />
              <h3>{movie.title}</h3>
              <p><strong>Género:</strong> {movie.genre}</p>
              <p><strong>Año:</strong> {movie.year}</p>
              <button onClick={() => removeFromFavorites(movie.id)}>
                Eliminar
              </button>
            </div>
          ))}
        </div>
      )}

      <h2>Ver más tarde</h2>
      {watchLater.length === 0 ? (
        <p>No has agregado películas aún.</p>
      ) : (
        <div className="movies-grid">
          {watchLater.map((movie) => (
            <div className="card" key={movie.id}>
              <img src={movie.image} alt={movie.title} />
              <h3>{movie.title}</h3>
              <p><strong>Género:</strong> {movie.genre}</p>
              <p><strong>Año:</strong> {movie.year}</p>
              <button onClick={() => removeFromWatchLater(movie.id)}>
                Eliminar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Saved;