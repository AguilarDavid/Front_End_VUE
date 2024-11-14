// Definición de la clase Producto
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre; // Almacena el nombre del producto
    this.precio = precio; // Almacena el precio del producto
  }
}

// Definición de la clase Carrito
class Carrito {
  constructor() {
    this.productos = []; // Inicializa un array vacío para almacenar productos en el carrito
  }

  // Método para agregar un producto al carrito con una cantidad específica
  agregarProducto(producto, cantidad) {
    this.productos.push({ producto, cantidad }); // Agrega un objeto que contiene el producto y su cantidad al carrito
  }

  // Método para calcular el total de la compra
  calcularTotal() {
    let total = 0; // Inicializa el total a 0
    this.productos.forEach((item) => {
      // Recorre cada item en el carrito
      total += item.producto.precio * item.cantidad; // Suma el precio del producto multiplicado por la cantidad al total
    });
    return total; // Devuelve el total calculado
  }

  // Método para mostrar los detalles de la compra
  mostrarDetalleCompra() {
    alert('Detalles de la compra:'); // Muestra un mensaje inicial
    this.productos.forEach((item, index) => {
      // Recorre cada item en el carrito
      alert(
        `${index + 1}. ${item.producto.nombre} x ${item.cantidad} - $${(
          item.producto.precio * item.cantidad
        ).toFixed(2)}` // Muestra el detalle del producto, la cantidad y el total para ese producto
      );
    });
  }
}

// Crear productos disponibles
const productosDisponibles = [
  new Producto('Leche', 1000), // Crea un nuevo producto con nombre y precio
  new Producto('Pan de Molde', 2000),
  new Producto('Queso', 1200),
  new Producto('Mermelada', 890),
  new Producto('Azúcar', 1300)
];

// Funciones para la interacción del usuario
function mostrarProductosDisponibles() {
  // Muestra los productos disponibles en un alert
  alert('Productos disponibles:\n1.- Leche $1000\n2.- Pan de Molde $2000\n3.- Queso $1200 \n4.- Mermelada $890\n5.- Azúcar $1300');
}

// Función para agregar un producto al carrito basado en la selección del usuario
function agregarAlCarrito(carrito, indexProducto, cantidad) {
  const productoSeleccionado = productosDisponibles[indexProducto - 1]; // Selecciona el producto basado en el índice proporcionado por el usuario

  // Verifica si el producto seleccionado es válido
  if (!productoSeleccionado) {
    alert('Producto no válido. Por favor, elige un producto de la lista.');
    return; // Termina la función si el producto no es válido
  }

  carrito.agregarProducto(productoSeleccionado, cantidad); // Agrega el producto al carrito
  alert(`${cantidad} ${productoSeleccionado.nombre}(s) agregado(s) al carrito.`); // Notifica al usuario
}

// Función para finalizar la compra
function finalizarCompra(carrito) {
  carrito.mostrarDetalleCompra(); // Muestra los detalles de la compra
  const total = carrito.calcularTotal(); // Calcula el total de la compra
  alert(`Compra finalizada. Total : $${total}`); // Notifica al usuario el total a pagar
}

// Programa interactivo
const carritoUsuario = new Carrito(); // Crea una nueva instancia de Carrito para el usuario

while (true) {
  mostrarProductosDisponibles(); // Muestra los productos disponibles

  // Solicita al usuario que ingrese el número del producto y la cantidad
  const indexProducto = parseInt(prompt('Ingresa el número del producto que deseas agregar al carrito:'));
  const cantidad = parseInt(prompt('Ingresa la cantidad de unidades:'));

  // Validaciones para asegurar que la entrada del usuario sea válida
  if (isNaN(indexProducto) || indexProducto < 1 || indexProducto > productosDisponibles.length || isNaN(cantidad) || cantidad <= 0) {
    alert('Entrada no válida. Por favor, ingresa números válidos.'); // Notifica al usuario si la entrada es inválida
    continue; // Reinicia el ciclo
  }

  agregarAlCarrito(carritoUsuario, indexProducto, cantidad); // Agrega el producto seleccionado al carrito

  // Pregunta al usuario si desea continuar agregando productos
  const continuar = prompt('¿Deseas seguir agregando productos? (s/n)').toLowerCase();

  if (continuar !== 's') {
    break;
  }
}


finalizarCompra(carritoUsuario);
