const productosEnCarrito = JSON.parse(
  localStorage.getItem("productos-en-carrito")
);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");

if (productosEnCarrito) {
  contenedorCarritoVacio.classList.add("ocultar");
  contenedorCarritoProductos.classList.remove("ocultar");
  contenedorCarritoAcciones.classList.remove("ocultar");
  contenedorCarritoComprado.classList.add("ocultar");

  contenedorCarritoProductos.innerHTML = "";

  productosEnCarrito.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("carrito-producto");
    div.innerHTML = `
        <img class="carrito-producto-imagen"src="${producto.imgs}" alt="${
      producto.nombre
    }" />
        <div class="carrito-producto-titulo">
          <small>titulo</small>
          <h3>${producto.nombre}</h3>
        </div>
        <div class="carrito-producto-cantidad">
          <small>Cantidad</small>
          <p>${producto.cantidad}</p>
        </div>
        <div class="carrito-producto-precio">
          <small>Precio</small>
          <p>$${producto.precio}</p>
        </div>
        <div class="carrito-producto-subtotal">
          <small>Subtotal</small>
          <p>$${producto.precio * producto.cantidad}</p>
        </div>
        <button class="carrito-producto-eliminar" id=${
          producto.id
        }> <i class="fa-regular fa-trash-can"></i></button>
        `;
    contenedorCarritoProductos.append(div);
  });
}
