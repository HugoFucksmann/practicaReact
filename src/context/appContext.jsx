import { Component, createContext } from "react";

export const AppContext = createContext();

class AppProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
      isLoading: true,
      usuario: null,
      productos: null,
    };

    this.setLogin = this.setLogin.bind(this);
  }

  checkIsLogin() {
    const isToken = localStorage.getItem("token");

    if (isToken) {
      this.setState({ isLogin: true });
    }

    this.setState({ isLoading: false });
  }

  // reemplaza a useEffect
  componentDidMount() {
    this.checkIsLogin();
  }

  setLogin(token) {
    this.setState({ isLogin: true });
  }

  setLogOut() {}

  render() {
    if (this.state.isLoading) {
      return <h1> LOADING... </h1>;
    }

    return (
      <AppContext.Provider value={{ ...this.state, setLogin: this.setLogin }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
