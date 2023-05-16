import { Component, createContext } from "react";

export const userContext = createContext();

class UserProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usuario: null,
      isLogin: false,
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

  setLogin(token) {
    this.setState({ isLogin: true });
  }

  handleLogOut() {
    localStorage.removeItem("token");
    window.location.href = "";
  }

  render() {
    return (
      <userContext.Provider
        value={{
          ...this.state,
          setLogin: this.setLogin,
          handleLogOut: this.handleLogOut,
        }}
      >
        {this.props.children}
      </userContext.Provider>
    );
  }
}

export default UserProvider;
