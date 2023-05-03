export async function getProductos() {
  const productos = await fetch("http://localhost:3012/api/productos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (!res.ok) {
        return null;
      }

      return res.productos;
    })
    .catch((e) => {
      console.warn("error: ", e);
      return null;
    });

  return productos;
}

export async function getLogin(user, password) {
  const productos = await fetch("http://localhost:3012/api/usuario/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: user,
      password: password,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log("res___ ", res);
      if (!res.ok) {
        return res.msj;
      }
      console.log("res.token ", res.token);
      localStorage.setItem("token", res.token);

      return res.usuario;
    })
    .catch((e) => {
      console.warn("error: ", e);
      return false;
    });

  return productos;
}
