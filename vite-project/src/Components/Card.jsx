import "./Card.css";

const Card = ({ nombre, precio, descripcion, imagen }) => {
  return (
    <div className="card">
      <img src={imagen} alt={nombre} className="card-image" />
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <h3>${precio}</h3>
    </div>
  );
};

export default Card;
