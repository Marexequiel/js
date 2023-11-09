//  se realiza un supuesto caso de subscripcion a una web de una  marca de ropa luego  agrega productos al carrito de compras

//  variables subscripcion

let nombreYApellido;
let email;
let fecha;
let subscribirse;

const AÑO_SUPERIOR = 2023

// variables carrito
let total = 0;
let nombrEProducto;
let precio;
let talle;
let cantidad;
let subtotal;
let seguiRComprando = "si";

//  subscripocion (se le pide al usuario ingresar sus datos,la subscripcion se ejecuta correctamente solo si el año de naciemiento es igual o menor a 2023

nombreYApellido = prompt('Bienvenido a Radical Waves!\n ingrese su Nombre y Apellido');
email = prompt('Ingrese un email');
fecha = +prompt('Ingrese si fecha de Nacimiento');
if (fecha > AÑO_SUPERIOR) {
    alert('Ingrese un año de naciemiento valido');
}
else {
    alert('Te subscribiste correctamente');
}

// agrega prosuctos al carrito de compras

do {
    nombrEProducto = prompt('Remera Summer Vibes\n elejir color');
    talle = prompt('ingrese talle');
    precio = +prompt('ingrese precio');
    cantidad = +prompt('ingrese cantidad');
    total = total + precio * cantidad;
    seguiRComprando = prompt('seguir comprando si/no');
}
while (seguiRComprando === 'si');

alert(`el total de tu compra es ${total} `);
