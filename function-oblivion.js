var audio_1 = new Audio('https://audio.jukehost.co.uk/qyJVTdlOfAJok4s5gHh62yNpsgjmVvgE')
var audio_2 = new Audio('')

function collapse_1() {
    document.getElementById("collapse-1").style.display = "block";
    document.getElementById("button-1").style.display = "none";
}
function play_sound_1() {
    audio_1.play();
    audio_1.volume = 0.02;
    audio_1.loop = true;

}
function collapse_2() {
    document.getElementById("collapse-2").style.display = "block";
    document.getElementById("button-2").style.display = "none";
}
function play_sound_2() {
    audio_2.play();
    audio_2.volume = 0.02;
    audio_2.loop = true;
    audio_1.pause();
    audio_1.currentTime = 0;

}