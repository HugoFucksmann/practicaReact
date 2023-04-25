const MarketHeader = () => {
  return (
    <div style={styles.containerHeader}>
      <div style={styles.logoContainer}>
        <div style={styles.logo}></div>
      </div>
      <div style={styles.menu}>
        <span style={styles.item}>home</span>
        <span style={styles.item}>carrito</span>
        <span style={styles.item}>productos</span>
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
    backgroundColor: "#fee",
  },
  logo: {
    height: 30,
    width: 30,
    borderRadius: "50%",
    backgroundColor: "blue",
  },
  menu: {
    width: "50%",
  },
  item: {
    marginRight: 12,
  },
};

export default MarketHeader;
