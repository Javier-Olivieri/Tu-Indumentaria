$(document).ready(function () {
    $("#Enviar").dblclick(function (e) {
        e.preventDefault();
        const nombre = $("#nombre").val();
        const email = $("#Email").val();
        const number = $("#number").val();

        if (localStorage.getItem("datosNewsletter") == null) {
            let news = []
            news.push(nombre, email, number);
            localStorage.setItem("datosNewsletter", JSON.stringify(news));
        } else {
            let news = JSON.parse(localStorage.getItem("datosNewsletter"));
            news.push(nombre, email, number);
            console.log(news);
            localStorage.setItem("datosNewsletter", JSON.stringify(news));
            console.log(JSON.parse(localStorage.getItem("datosNewsletter")));
        }

    });

});


$(document).ready(function () {
    $("#btn4").dblclick(function () {
        $(".parag").append("<b>Esperamos Nuevamente, Recomendanos</b>.");
        swal({
            title: "Sos muy importante para nosotros",
            text: "Seguinos!",
            icon: "success",
            button: "Click",
        });
    });
});


$(document).ready(function () {
    $("#Enviar").dblclick(function () {
        $("#gracias").toggle();

    });

    $("#gracias").hide();
});



//Estilos
$("#containerForm").css({ "display": "flex", "justify-content": "center" })
$(".comprobar").css({
    "display": "flex", "justify-content": "center",
    "font-size": "25px", "text-decoration": "underline", "font-weight": "Bold"
})

$(".boton").css({ "margin-left": "60px", "margin-top": "30px" })

$(".campo").css("background-image", "linear-gradient(to left, beige, lightblue, white)")

$("#gracias").css({ "display": "flex", "justify-content": "center", "font-size": "40px", "font-weight": "bold" })

$("#Enviar").css("margin-left", "70px")

$(".containerCont").css("background-color", "lightblue")

//Animaciones
$("#Enviar").dblclick(() => {
    $("#formulario").toggle("slow");
});

