import AppProvider from "./context/appContext";
import RootRouter from "./rootRouter";

const App = () => {
  return (
    <AppProvider>
      <RootRouter />
    </AppProvider>
  );
};

export default App;
