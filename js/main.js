class Productos {
    constructor (id, nombre, precio, stock) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.precio = Number(precio);
        this.stock = stock;
        this.vendido = false
    }

    actualizarStock (x) {
        this.stock = this.stock - x
    }

    sumarIva () {
        this.precio = this.precio * 1.21
    };

    vender () {
        this.vendido = true
    };
}


// -------------------> Subiendo objetos dentro del Array <-------------------

const productosArray = [];

const producto1 = new Productos (01, "Remera roja Puma", 2100, 10);
productosArray.push (producto1);

const producto2 = new Productos (02, "Zapatillas negras HRX", 21300, 10);
productosArray.push (producto2);

const producto3 = new Productos (03, "Jogging gris Adidas", 7800, 10);
productosArray.push (producto3);

const producto4 = new Productos (04, "Chomba azul Puma", 4300, 10);
productosArray.push (producto4);

const producto5 = new Productos (05, "Zapatillas grises HRX", 19000, 10);
productosArray.push (producto5);

const producto6 = new Productos (06, "Remera negra Puma", 2300, 10);
productosArray.push (producto6);

const producto7 = new Productos (07, "Pack medias por 3 HRX", 1700, 10);
productosArray.push (producto7);

const producto8 = new Productos (08, "Reloj negro Fossil", 27900, 5);
productosArray.push (producto8);

const producto9 = new Productos (09, "Reloj con cronometro", 13000, 7);
productosArray.push (producto9);

const producto10 = new Productos (10, "Zapatillas negras camufladas HRX", 19800, 10);
productosArray.push (producto10);

const producto11 = new Productos (11, "Zapatillas grises Roadster", 17200, 10);
productosArray.push (producto11);

const producto12 = new Productos (12, "Jogging negro Nike", 19800, 10);
productosArray.push (producto12);

// -------------------> Funcion cambiar precio de menor a mayor <-------------------

const sortMenorMayor = () => {
    productosArray.sort ((a, b) => a.precio - b.precio);
    console.log (productosArray);
    mostrarListaOrdenada();
}


// -------------------> Funcion cambiar precio de mayor a menor <-------------------

const sortMayorMenor = () => {
    productosArray.sort ((a, b) => b.precio - a.precio);
    console.log (productosArray);
    mostrarListaOrdenada();
}


// -------------------> Funcion mostrar lista ordenada <-------------------

const mostrarListaOrdenada = () => {
    let arrayLista = [];
    productosArray.forEach(producto => arrayLista.push(producto.nombre + " $" + producto.precio));
    alert("Lista de precios:" + "\n" + arrayLista.join("\n"));
}


// -------------------> DOM y Eventos <-------------------

const llamadoProductos = document.getElementsByClassName("llamadoProductos");





const menorMayor = document.getElementById("MenorMayor");

const mayorMenor = document.getElementById("MayorMenor");

    menorMayor.addEventListener("change", () => {
        sortMenorMayor()
    });

    mayorMenor.addEventListener("change", () => {
        sortMayorMenor()
    });


// -------------------> DOM evento boton comprar <------------------- PROBANDO

// const comprarP1 = document.querySelector(".comprar3050");
// const comprarP2 = document.querySelector(".comprar3060");
// const comprarP3 = document.querySelector(".comprar3070");
// const comprarP4 = document.querySelector(".comprar3080");
// const comprarP5 = document.querySelector(".comprar3090");

//     comprarP1.addEventListener("click", () => {
//         alert("Añadiste la placa 3050 al carrito")
//     })
//     comprarP2.addEventListener("click", () => {
//         alert("Añadiste la placa 3060 al carrito")
//     })
//     comprarP3.addEventListener("click", () => {
//         alert("Añadiste la placa 3070 al carrito")
//     })
//     comprarP4.addEventListener("click", () => {
//         alert("Añadiste la placa 3080 al carrito")
//     })
//     comprarP5.addEventListener("click", () => {
//         alert("Añadiste la placa 3090 al carrito")
//     })