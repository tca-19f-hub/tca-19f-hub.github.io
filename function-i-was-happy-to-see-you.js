// Элемент следует за курсором
document.addEventListener('mousemove', (e) => {

    const mouseFollow = document.getElementById('c-1');
    const x = e.clientX - 25; //-25 to center div over mouse
    const y = e.clientY - 25; 
    console.log(x);
     
    mouseFollow.style.top = `${y}px`;
    mouseFollow.style.left = `${x}px`;
  })

// Подсказка появляется и исчезает
window.onmousemove = function() {
    var div = document.querySelector('#c-1');
    div.style.display = document.querySelectorAll('#t-1:hover').length ? 'none' : 'block';
}

var raz1 = document.getElementById('t-1');
raz1.onmouseover = function() {
  document.getElementById('c-1').style.display = 'block';
}
raz1.onmouseout = function() {
  document.getElementById('c-1').style.display = 'none';
}