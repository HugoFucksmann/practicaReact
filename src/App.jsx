import AppProvider from "./context/appContext";
import UserProvider from "./context/userContext";
import RootRouter from "./rootRouter";

const App = () => {
  return (
    <AppProvider>
      <UserProvider>
        <RootRouter />
      </UserProvider>
    </AppProvider>
  );
};

export default App;
