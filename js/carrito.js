let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const vaciarCarrito = document.querySelector(".carrito-acciones-vaciar");

function cargarProductosCarrito() {
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
        <button class="carrito-producto-eliminar" id="${
          producto.id
        }"> <i class="fa-regular fa-trash-can"></i></button>
        `;
      contenedorCarritoProductos.append(div);
    });
  } else {
    contenedorCarritoVacio.classList.remove("ocultar");
    contenedorCarritoProductos.classList.add("ocultar");
    contenedorCarritoAcciones.classList.add("ocultar");
    contenedorCarritoComprado.classList.add("ocultar");
  }
}

cargarProductosCarrito();

function actualizarBotonEliminar() {
  botonEliminar = document.querySelectorAll(".carrito-producto-eliminar");

  botonEliminar.forEach((boton) => {
    boton.addEventListener("click", eliminarDelCarrito);
  });
}

function eliminarDelCarrito(e) {
  const idBoton = e.currentTarget.id;
  const index = productosEnCarrito.findIndex(
    (producto) => producto.id === idBoton
  );
  productosEnCarrito.splice(index, 1);
  cargarProductosCarrito();

  localStorage.setItem(
    "productos-en-carrito",
    JSON.stringify(productosEnCarrito)
  );
}
