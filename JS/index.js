

document.addEventListener("DOMContentLoaded", () => {
  const titulo = document.querySelector(".texto_1");
  const parrafo = document.querySelector(".texto_2");
  const cartas = document.querySelectorAll(".carta");

  if (titulo) {
    titulo.classList.add("animate__animated", "animate__backInLeft");
  }

  if (parrafo) {
    parrafo.classList.add("animate__animated", "animate__backInRight");
  }

  // Animaciones al hacer scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__animated", "animate__flipInX");
        entry.target.classList.remove("animate__flipInX");
        void entry.target.offsetWidth; // Reinicia animación
        entry.target.classList.add("animate__flipInX");
      }
    });
  }, {
    threshold: 0.5
  });

  cartas.forEach((carta) => observer.observe(carta));
});

// CARRUSEL 
  const images = document.querySelectorAll('.slide-img');
  let currentIndex = 0;

  setInterval(() => {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
  }, 5000);