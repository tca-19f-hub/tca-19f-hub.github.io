// Элемент следует за курсором
document.addEventListener('mousemove', (e) => {

    const mouseFollow = document.getElementById('cursor-1');
    const x = e.clientX - 25; //-25 to center div over mouse
    const y = e.clientY - 25; 
    console.log(x);
     
    mouseFollow.style.top = `${y}px`;
    mouseFollow.style.left = `${x}px`;
  })

// Подсказка появляется и исчезает
  const isHover = e => e.parentElement.querySelector(':hover') === e;    
  
  const translate = document.getElementById('t1');
  document.addEventListener('mousemove', function checkHover() {
    const hovered = isHover(translate);
    if (hovered !== checkHover.hovered) {
      document.getElementById('cursor-1').style.display = "block";
    }
    else
      document.getElementById('cursor-1').style.display = "none";
  });