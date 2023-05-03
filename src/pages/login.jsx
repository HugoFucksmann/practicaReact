import React, { useContext, useRef } from "react";
import { getLogin } from "../utils/consultasFetch";
import { AppContext } from "../context/appContext";

const LoginScreen = () => {
  const { setLogin } = useContext(AppContext);
  const userRef = useRef(null);
  const passwordRef = useRef(null);

  function handleLogin() {
    const userValue = userRef.current.value;
    const passwordValue = passwordRef.current.value;
    console.log("userRef: ", userValue);
    console.log("passwordRef ", passwordValue);
    /* 
    VALIDACIONES VARIAS
    */

    getLogin(userValue, passwordValue).then((res) => {
      if (typeof res === "string") {
        alert(res);
        return;
      } else if (!res) {
        alert("fallo la peticion, vuelva a intentar");
        return;
      }
      console.log("ress ", res);
      setLogin(res);
    });
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <div
        style={{
          backgroundColor: "#f2f2f2",
          display: "flex",
          flexDirection: "column",
          padding: 20,
          borderRadius: 8,
        }}
      >
        <span>Usuario</span>

        <input ref={userRef} type="text" />
        <br />
        <span>Contraseña</span>

        <input ref={passwordRef} type="password" />
        <br />
        <button onClick={() => handleLogin()}>Login</button>

        <br />
      </div>
    </div>
  );
};

export default LoginScreen;
