import { useEffect, useState } from "react";
import { getProductos } from "../utils/consultasFetch";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState(null);

  useEffect(() => {
    getProductos().then((res) => {
      setProductos(res);
      setLoading(false);
    });
  }, []);

  console.log("loading: ", loading);
  console.log("productos: ", productos);

  if (loading) {
    return <div style={styles.container}>Loading...</div>;
  }

  return (
    <div style={styles.container}>
      <h1>Productos</h1>
      {productos ? (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {productos.map((prod) => (
            <CardProducto key={prod._id} dataProducto={prod} />
          ))}
        </div>
      ) : (
        <div>No hay productos</div>
      )}
    </div>
  );
};

const CardProducto = (props) => {
  const { dataProducto } = props;

  return (
    <div style={styles.divProductos}>
      <div style={styles.cardProduct}>
        <h3>{dataProducto.name}</h3>
        <p>precio</p>
        <p> {dataProducto.price} </p>
      </div>
    </div>
  );
};

const styles = {
  container: { display: "flex", flexDirection: "column", alignItems: "center" },
  divProductos: {
    display: "flex",
    flexWrap: "wrap",
  },
  cardProduct: {
    margin: 16,
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: 180,
    width: 120,
    boxShadow: "3px 3px 5px grey",
    backgroundColor: "#dbdbdb ",
  },
};

export default HomePage;
