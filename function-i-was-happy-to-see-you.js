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
function show_1() {
    document.getElementById('c-1').style.display = 'block';
}
function hide_1() {
    document.getElementById('c-1').style.display = 'none';
}
function show_2() {
    document.getElementById('c-2').style.display = 'block';
}
function hide_2() {
    document.getElementById('c-2').style.display = 'none';
}
function show_3() {
    document.getElementById('c-3').style.display = 'block';
}
function hide_3() {
    document.getElementById('c-3').style.display = 'none';
}