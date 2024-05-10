// Скролл вверх страницы - в начало
function topFunction() {
    document.body.scrollTop = 0; // для Safari
    document.documentElement.scrollTop = 0; // для Chrome, Firefox, IE and Opera
  }

// Элемент следует за курсором
const elPointer  = document.querySelector("#pointer");
addEventListener("mousemove", (evt) => {
  elPointer.style.cssText = `
    left: ${evt.clientX}px;
    top:  ${evt.clientY}px;
  `;
});