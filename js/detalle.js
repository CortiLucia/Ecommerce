window.addEventListener("load", function () {
  const producto = JSON.parse(localStorage.getItem("detalleProducto"));
  const mostrarProducto = document.querySelector("#productoClick");
  console.log(mostrarProducto);
  cargarProductos();

  function cargarProductos() {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
        <h3 class="nombre">${producto.nombre}</h3>
        <p class="puntuacion">${producto.puntuacion}</p>
        <img class="imagen" src="${producto.imgs}" alt="${producto.nombre}">
        <p class="descripcion">${producto.descripcion}</p>
        <a class="volver" href="./index.html">Volver</a>
    `;
    mostrarProducto.append(div);
  }
});
