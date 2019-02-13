function siguiente() {
    var atributo = $("#boton-sig").val();
    var uno = 1;
    var aumento = Number(atributo) + Number(uno);
    // console.log(aumento);
    if (aumento <= 13) {
     
        cambiarModal(aumento);
    }

    else {
        $(".modal").css("display", "none").attr("aria-hidden", "true").removeClass("show");
        // $(".modal").attr("aria-hidden", "true");
        // $(".modal").removeClass("show");
        $(".modal-backdrop").removeClass("modal-backdrop fade show");
        $("body").removeClass("modal-open");
    }

}

function anterior() {
    var atributo = $("#boton-ant").val();
    var uno = 1;
    var aumento = Number(atributo) - Number(uno);
    // console.log(aumento);
    if (aumento >= 1) {
        cambiarModal(aumento);
    }

    else {
        $(".modal").css("display", "none").attr("aria-hidden", "true").removeClass("show");
        // $(".modal").attr("aria-hidden", "true");
        // $(".modal").removeClass("show");
        $(".modal-backdrop").removeClass("modal-backdrop fade show");
        $("body").removeClass("modal-open");
    }
}


function cambiarModal(opcion) {
    $("#cambiar-titulo").load("archivo.php #titulo" + opcion);
    $(".modal-imagen").load("archivo.php .modal-imagen" + opcion);
    $(".modal-body").load("archivo.php .modal-body" + opcion);

    document.getElementById("boton-ant").value = opcion;
    document.getElementById("boton-sig").value = opcion;

}
