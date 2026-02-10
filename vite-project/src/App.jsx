import Card from "./Components/Card";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Card
        nombre="Café Premium"
        precio="25000"
        descripcion="Café 100% colombiano"
        imagen="https://www.elespectador.com/resizer/v2/ZKHWFCF5SNFNBBTPH23PWUUBVE.jpg?auth=b1d892c92c629e7f49c57398bd00d2915b446ab9a0ffc8e6d303c87f4844befb&width=910&height=606&smart=true&quality=70"
      />

      <Card
        nombre="Panela Orgánica"
        precio="8000"
        descripcion="Panela natural campesina"
        imagen="https://nueceteria.com/wp-content/uploads/2025/04/panelaaaa.jpg"
      />

      <Card
        nombre="Yuca Fresca"
        precio="5000"
        descripcion="Yuca recién cosechada"
        imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt_423mAXCI56zvPj83pl5D5AxJmgJEq6Ejw&s"
      />
    </div>
  );
};

export default App;
