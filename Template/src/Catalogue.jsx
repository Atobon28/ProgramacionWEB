import movies from "./data";
import { useMovies } from "./context/MoviesContext";
import { Link } from "react-router-dom";

function Catalogue() {
  const { addToFavorites, addToWatchLater } = useMovies();

  return (
    <div className="container">
      <h1>Catálogo de Películas</h1>

      <div className="nav">
        <Link to="/saved">Ir a guardadas</Link>
      </div>

      <div className="movies-grid">
        {movies.map((movie) => (
          <div className="card" key={movie.id}>
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p><strong>Género:</strong> {movie.genre}</p>
            <p><strong>Año:</strong> {movie.year}</p>

            <button onClick={() => addToFavorites(movie)}>
              Agregar a favoritos
            </button>

            <button onClick={() => addToWatchLater(movie)}>
              Ver más tarde
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogue;