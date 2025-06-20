const carrusel = document.getElementById('imagenes');
    const total = carrusel.children.length;
    let indice = 0;

    function cambiarImagen() {
        indice = (indice + 1) % total;
        carrusel.style.transform = `translateX(-${indice * 100}%)`;
    }

    setInterval(cambiarImagen, 2500); // Cada 5 segundos
