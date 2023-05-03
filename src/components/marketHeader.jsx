function handleNavigation(path) {
  window.location.href = `/${path}`;
}

const MarketHeader = () => {
  return (
    <div style={styles.containerHeader}>
      <div style={styles.menu}>
        <button style={styles.button} onClick={() => handleNavigation("")}>
          Home
        </button>
        <button
          style={styles.button}
          onClick={() => handleNavigation("Carrito")}
        >
          Carrito
        </button>
        <button
          style={styles.button}
          onClick={() => handleNavigation("Productos")}
        >
          Productos
        </button>
      </div>
      <div style={styles.logoContainer}>
        <div style={styles.logo}></div>
      </div>
    </div>
  );
};

const styles = {
  containerHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    backgroundColor: "#d1d1d1",
    padding: "0 20px",
  },
  menu: {
    width: "50%",
    display: "flex",
    justifyContent: "flex-start",
  },
  button: {
    marginRight: 12,
    padding: "10px 15px",
    borderRadius: 8,
    border: "none",
    backgroundColor: "#f7f7f7",
    color: "#333",
    fontWeight: "bold",
    textDecoration: "none",
    transition: "all 0.3s ease-in-out",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "#333",
      color: "#fff",
    },
  },
  logoContainer: {
    width: "50%",
    display: "flex",
    justifyContent: "flex-end",
  },
  logo: {
    height: 40,
    width: 40,
    marginRight: 30,
    borderRadius: "50%",
    backgroundColor: "#3ea3a3",
  },
};

export default MarketHeader;
