class Productos {
    constructor (id, nombre, precio, stock, img, redireccion) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.precio = Number(precio);
        this.stock = stock;
        this.vendido = false
        this.img = img
        this.redireccion = redireccion
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

const producto1 = new Productos (01, "Remera roja Puma", 2100, 10, "../assets/img/product-1.jpg", "../views/productos/remeras/remera-roja.html");
productosArray.push (producto1);

const producto2 = new Productos (02, "Zapatillas negras HRX", 21300, 10, "../assets/img/product-2.jpg", "../views/productos/zapatillas/zapatillas-negras.html");
productosArray.push (producto2);

const producto3 = new Productos (03, "Jogging gris Adidas", 7800, 10, "../assets/img/product-3.jpg", "../views/productos/pantalones/jogging-gris-adidas.html");
productosArray.push (producto3);

const producto4 = new Productos (04, "Chomba azul Puma", 4300, 10, "../assets/img/product-4.jpg", "../views/productos/remeras/chomba-puma.html");
productosArray.push (producto4);

const producto5 = new Productos (05, "Zapatillas grises HRX", 19000, 10, "../assets/img/product-5.jpg", "../views/productos/zapatillas/zapatillas-grises-hrx.html");
productosArray.push (producto5);

const producto6 = new Productos (06, "Remera negra Puma", 2300, 10, "../assets/img/product-6.jpg", "../views/productos/remeras/remera-negra-puma.html");
productosArray.push (producto6);

const producto7 = new Productos (07, "Pack medias por 3 HRX", 1700, 10, "../assets/img/product-7.jpg", "../views/productos/accesorios/medias-hrx.html");
productosArray.push (producto7);

const producto8 = new Productos (08, "Reloj negro Fossil", 27900, 5, "../assets/img/product-8.jpg", "../views/productos/accesorios/reloj-negro-fossil.html");
productosArray.push (producto8);

const producto9 = new Productos (09, "Reloj con cronometro", 13000, 7, "../assets/img/product-9.jpg", "../views/productos/accesorios/reloj-cronometro.html");
productosArray.push (producto9);

const producto10 = new Productos (10, "Zapatillas negras camufladas HRX", 19800, 10, "../assets/img/product-10.jpg", "../views/productos/zapatillas/zapatillas-camufladas-hrx.html");
productosArray.push (producto10);

const producto11 = new Productos (11, "Zapatillas grises Roadster", 17200, 10, "../assets/img/product-11.jpg", "../views/productos/zapatillas/zapatillas-grises-roadster.html");
productosArray.push (producto11);

const producto12 = new Productos (12, "Jogging negro Nike", 19800, 10, "../assets/img/product-12.jpg", "../views/productos/pantalones/jogging-negro-nike.html");
productosArray.push (producto12);

// -------------------> Creando carrito de compras <-------------------



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

    const contenedorProductos = document.getElementById("producto-contenedor");

    productosArray.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('col-4');
    div.innerHTML += `<div>
                        <a href="${producto.redireccion}">
                            <img src="${producto.img}">
                        </a>
                        <h4>${producto.nombre}</h4>
                        <div class="rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    </div>
                    <div class="card-content">
                        <p>$${producto.precio}</p>
                    </div>
                    <button class="btn alCarrito">Añadir al carrito</button>`
    contenedorProductos.appendChild(div);
    })
