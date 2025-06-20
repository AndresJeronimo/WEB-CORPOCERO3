function buscar() {
    const palabra = document.getElementById("busqueda").value.toLowerCase();

      // Redireccionar según la palabra clave ingresada
    if (palabra === "publicidad") {
        window.location.href = "../publicidad.html";

    } else if (palabra === "prestaciones" || palabra === "servicios") {
        window.location.href = "../prestacionesServicios.html";

    } else if (palabra === "otros servicios") {
        window.location.href = "../otrosServicios.html";

    } else if (palabra === "obras") {
        window.location.href = "../nuestrasObras.html";

    } else {
        // Página por defecto o de "no encontrado"
        window.location.href = "no-encontrado.html";
    }
}