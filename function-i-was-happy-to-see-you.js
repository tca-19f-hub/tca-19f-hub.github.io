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
window.onload = function () {
    var a = document.querySelector('#t-1');
    a.onmouseout = function(e) {
      document.getElementById('c-1').style.display='none';
    }
    a.onmouseover = function(e) {
      document.getElementById('c-1').style.display='block';
    };
  }