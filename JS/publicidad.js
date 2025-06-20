function callback(entries){
  entries.forEach(entry => {
    console.log(entry)
    
  });

}

const option ={
  root: null, 
  rootMargin: '0px',
  threshold: 0
}

const observer  = new IntersectionObserver(callback, Option);
const element = document.querySelector('.columna-publicidad-Izquierda');

observer.observe(element);