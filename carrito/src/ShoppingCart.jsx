import { useState } from "react";
import "./ShoppingCart.css";

function App() {
  const productos = [
    { id: 1, nombre: "Articulo 1", precio: 12000 },
    { id: 2, nombre: "Articulo 2", precio: 3000 },
    { id: 3, nombre: "Ariticulo 3", precio: 4500 },
  ];

  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const existe = prev.find((item) => item.id === producto.id);

      if (existe) {
        return prev.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }

      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const aumentar = (id) => {
    setCarrito((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  const disminuir = (id) => {
    setCarrito((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };

  const eliminar = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  };

  const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  const precioTotal = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  return (
    <div className="contenedor">
      <h2>Productos</h2>

      <div className="bloque">
        {productos.map((p) => (
          <div key={p.id} className="fila">
            <span>
              {p.nombre} - ${p.precio}
            </span>
            <button onClick={() => agregarAlCarrito(p)}>Agregar</button>
          </div>
        ))}
      </div>

      <h2>Carrito</h2>

      {carrito.length === 0 ? (
        <p className="texto">Carrito vacio</p>
      ) : (
        <div className="bloque">
          {carrito.map((item) => (
            <div key={item.id} className="fila">
              <span>
                {item.nombre} (${item.precio}) x {item.cantidad}
              </span>

              <div className="botones">
                <button onClick={() => disminuir(item.id)}>-</button>
                <button onClick={() => aumentar(item.id)}>+</button>
                <button onClick={() => eliminar(item.id)}>x</button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="totales">
        <p>Total productos: {cantidadTotal}</p>
        <p>Total a pagar: ${precioTotal}</p>
      </div>
    </div>
  );
}

export default App;