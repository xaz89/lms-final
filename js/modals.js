// function siguiente(opcion) {
//     //  var cambiar = document.getElementById("cambiar-titulo");
//     //  var cambiar2 = document.getElementById("imagen");
//     //  console.log(cambiar, cambiar2);
//     var x = 0;
//     var y = x + 1;

//     cambiarModal(x++);


// }


function cambiarModal(opcion) {
        $("#cambiar-titulo").load("archivo.php #titulo"+opcion);
        $(".modal-imagen").load("archivo.php .modal-imagen"+opcion);
        $(".modal-body").load("archivo.php .modal-body"+opcion);
        
        // console.log(boton);
        // boton.setAttributeNode(valor);
}

 


/*

$(document).ready(function () {
    $("#button1").click(function (event) {
        $("#cambiar-titulo").load("archivo.php #titulo1");
        $(".modal-imagen").load("archivo.php .modal-imagen1");
        $(".modal-body").load("archivo.php .modal-body1");
    });
});

$(document).ready(function () {
    $("#button2").click(function (event) {
        $("#cambiar-titulo").load("archivo.php #titulo2");
        $(".modal-imagen").load("archivo.php .modal-imagen2");
        $(".modal-body").load("archivo.php .modal-body2");
    });
});

$(document).ready(function () {
    $("#button3").click(function (event) {
        $("#cambiar-titulo").load("archivo.php #titulo3");
        $(".modal-imagen").load("archivo.php .modal-imagen3");
        $(".modal-body").load("archivo.php .modal-body3");
    });
});

$(document).ready(function () {
    $("#button4").click(function (event) {
        $("#cambiar-titulo").load("archivo.php #titulo4");
        $(".modal-imagen").load("archivo.php .modal-imagen4");
        $(".modal-body").load("archivo.php .modal-body4");
    });
});

$(document).ready(function () {
    $("#button5").click(function (event) {
        $("#cambiar-titulo").load("archivo.php #titulo5");
        $(".modal-imagen").load("archivo.php .modal-imagen5");
        $(".modal-body").load("archivo.php .modal-body5");
    });
});

$(document).ready(function () {
    $("#button6").click(function (event) {
        $("#cambiar-titulo").load("archivo.php #titulo6");
        $(".modal-imagen").load("archivo.php .modal-imagen6");
        $(".modal-body").load("archivo.php .modal-body6");
    });
});

$(document).ready(function () {
    $("#button7").click(function (event) {
        $("#cambiar-titulo").load("archivo.php #titulo7");
        $(".modal-imagen").load("archivo.php .modal-imagen7");
        $(".modal-body").load("archivo.php .modal-body7");
    });
});

$(document).ready(function () {
    $("#button8").click(function (event) {
        $("#cambiar-titulo").load("archivo.php #titulo8");
        $(".modal-imagen").load("archivo.php .modal-imagen8");
        $(".modal-body").load("archivo.php .modal-body8");
    });
});

$(document).ready(function () {
    $("#button9").click(function (event) {
        $("#cambiar-titulo").load("archivo.php #titulo9");
        $(".modal-imagen").load("archivo.php .modal-imagen9");
        $(".modal-body").load("archivo.php .modal-body9");
    });
});

$(document).ready(function () {
    $("#button10").click(function (event) {
        $("#cambiar-titulo").load("archivo.php #titulo10");
        $(".modal-imagen").load("archivo.php .modal-imagen10");
        $(".modal-body").load("archivo.php .modal-body10");
    });
});

$(document).ready(function () {
    $("#button11").click(function (event) {
        $("#cambiar-titulo").load("archivo.php #titulo11");
        $(".modal-imagen").load("archivo.php .modal-imagen11");
        $(".modal-body").load("archivo.php .modal-body11");
    });
});

$(document).ready(function () {
    $("#button12").click(function (event) {
        $("#cambiar-titulo").load("archivo.php #titulo12");
        $(".modal-imagen").load("archivo.php .modal-imagen12");
        $(".modal-body").load("archivo.php .modal-body12");
    });
});

$(document).ready(function () {
    $("#button13").click(function (event) {
        $("#cambiar-titulo").load("archivo.php #titulo13");
        $(".modal-imagen").load("archivo.php .modal-imagen13");
        $(".modal-body").load("archivo.php .modal-body13");
    });
});
*/