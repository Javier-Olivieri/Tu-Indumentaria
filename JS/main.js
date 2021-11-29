
//Armado de Carrito
$(() => {
    mostrarCarrito(localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : []);
    sProductos();
});

let contenedorProd = document.querySelector("#contenedorProductos");
let contenedorCarrito = document.querySelector("#contenedorCarrito");


//Muestra Productos (Imágenes)
function mostrarProd(array) {
    contenedorProd.innerHTML = "";
    for (e of array) {
        contenedorProd.innerHTML += `
        <div class = "card col-2" style= "width: 9rem;">
        <img src="${e.img}" class="card-img-top" alt="...">
        <div class= "card-body">
        <h5 class = "card-title">${e.nombre}</h5>
        <p class= "card-text">${e.talle} </p>
        <h5 class= "card-title">$ ${e.precio}</h5>
        <button class= "btn btn-primary" onclick="capturar (${e.id})">Comprar</button>
        </div>
        </div>`
    }
}

//Muestra Productos en Tabla 

function mostrarCarrito(array) {
    let i = 1;
    contenedorCarrito.innerHTML = "";
    for (e of array) {
        contenedorCarrito.innerHTML += `
        <tr>
        <th scope="row">${e.cantidad++}</th>
        <td>${e.nombre}</td>
        <td>${e.talle}</td>
        <td>$ ${e.precio}</td>
        <td><button class= "btn btn-danger" onclick="quitar(${e.id})">O</button></td>
        </tr>
        `

    }

    contenedorCarrito.innerHTML += `
    <tr>
    <td class= "text-center" colspan="3">Total</td>
    <td colspan="2">$<span id="totalCarrito">0</span></td>
    </tr>`
}

//Agregar Storage

function aStorage(x) {
    let archivos = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : [];
    archivos.push(x);
    return archivos;


}

//Guardar Storage
function gStorage(array) {
    localStorage.setItem("carrito", JSON.stringify(array));
}

//Capturar Id

function capturar(id) {
    let carrito = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : [];
    let indice = carrito.findIndex(e => e.id == id);
    if (indice == -1) {
        let prod = Indumentaria.find(e => e.id == id);
        gStorage(aStorage(prod));
    } else {
        carrito[indice].cantidad++;
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
    mostrarCarrito(JSON.parse(localStorage.getItem("carrito")))
    sProductos();

}


//Quitar Producto
function quitar(id) {
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    let carritoFinal = carrito.filter(e => e.id != id);
    gStorage(carritoFinal)
    mostrarCarrito(JSON.parse(localStorage.getItem("carrito")));
    sProductos();
}

//Sumar Importe Productos 

function sProductos() {
    let suma = 0;
    let productosCarrito = JSON.parse(localStorage.getItem("carrito"))
    for (e of productosCarrito) {
        suma += e.precio * e.cantidad

    }
    let total = document.querySelector("#totalCarrito").textContent = suma.toFixed(2);

}


//Ajax  //Importo Productos desde archivo .Json
$.getJSON("../JS/productos.json", function (estado, respuesta) {
    if (respuesta == "success") {
        Indumentaria = estado;
        mostrarProd(Indumentaria);
        estilos();

    }
});



//Estilos
function estilos() {

    $(".card-title").css({ "display": "flex", "justify-content": "center", "color": "blue" })
    $(".containers").css("background-color", "lightblue");
    $(".card-text").css({ "color": "black", "font-weight": "bold", "display": "flex", "justify-content": "center" });
    $("button").css("margin-left", "13px");
    $(".botons").css({ "display": "flex", "justify-content": "center" });
    $(".table").css("background-color", "beige");
    $(".delete").css({ "display": "flex", "justify-content": "center" })

}

//Animaciones

$(() => {
    $("#Mostrar").on("click", function () {
        $("#contenedorCarrito").fadeIn(2000);
    });

    $("#Ocultar").on("click", function () {
        $("#contenedorCarrito").fadeOut(2000);
    });

    $("#Finalizar").on("click", function () {
        localStorage.clear()
        swal({
            title: "Quieres confirmar la compra?",
            text: "Tu Indumentaria",
            icon: "warning",
            buttons: true,
            dangerMode: false,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Muchas Gracias, Compra Confirmada", {
                icon: "success",
              });
            }
          });
      
      
          
        

    });
    

    //Animación título de Página
    $(".tu").css("color", "black")
        .slideUp(3000)
        .slideDown(3000);

});







