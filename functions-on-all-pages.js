// Скролл вверх страницы - в начало
function topFunction() {
    document.body.scrollTop = 0; // для Safari
    document.documentElement.scrollTop = 0; // для Chrome, Firefox, IE and Opera
  }

// Элемент следует за курсором
const move = document.getElementById("move");
document.body.onpointermove = event => {
  const { clientX, clientY } = event;
  
  move.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
      
  }, {duration: 1000, fill: "forwards"})
}