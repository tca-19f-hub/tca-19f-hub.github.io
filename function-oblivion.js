function collapse_1() {
    document.getElementById("collapse-1").style.display = "block";
    document.getElementById("button-1").style.display = "none";
}

function play_sound_1() {
    var audio_1 = new Audio({
        loop: true,
        volume: 0.2,
        src: ['https://audio.jukehost.co.uk/qyJVTdlOfAJok4s5gHh62yNpsgjmVvgE']
    })
    audio_1.play();
}