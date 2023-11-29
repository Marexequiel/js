
const productos = [
    { nombre: 'Summer Vibes', precio: 9200 },
    { nombre: 'Low Desert', precio: 10500 }
];

let carrito = []

let seleccion = prompt('Bienvenido a Radical Waves,desea comprar?');

while (seleccion != 'si' && seleccion != 'no') {
    alert('Ingrese si o no');
    seleccion = prompt('desea comprar?');
}

if (seleccion == 'si') {
    alert('Lista de productos');
    let listaProductos = productos.map(
        (producto) => producto.nombre + ' ' + producto.precio + '$');
    alert(listaProductos.join('-'));
} else if (seleccion == 'no');


while (seleccion != 'no') {
    let producto = prompt('Seleccione el producto');
    let precio = 0

    if (producto == 'summer vibes' || producto == 'low desert') {
        switch (producto) {
            case 'summer vibes':
                precio = 9200;
                break;
            case 'low desert':
                precio = 10500;
                break;
            default:
                break;
        }
        let cantidad = +prompt('Ingrese cantidad');
        carrito.push({ producto, cantidad, precio });

        seleccion = prompt('Desea seguir comprando?');

        while (seleccion === 'no') {
            carrito.forEach((carritototal) => {
                alert(`su compra: \n
                ${carritototal.producto}
                ${carritototal.cantidad}
                ${carritototal.precio}`);
            })
            break;
        }
    }
}

let total = carrito.reduce((acc,el) => acc + el.precio * el.cantidad,0);
alert(`el total de tu compra es $ ${total}`);

























