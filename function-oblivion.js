var audio_1 = new Audio('https://audio.jukehost.co.uk/LomD71PtH0bA7hnDrg6jA4l69SKQnOil')
var audio_2 = new Audio('https://audio.jukehost.co.uk/YwqrPugixR8h8Kn3K6BVsrCA4kTPlw3H')
var audio_3 = new Audio('https://audio.jukehost.co.uk/x6uPYuZ6cjTrOIzwu4wKepRTSvKPzLrc')
var audio_4 = new Audio('https://audio.jukehost.co.uk/FXk05pIxnlltatBt83qwjcNv51J0xDwG')
var audio_5 = new Audio('https://audio.jukehost.co.uk/AgaFwRQcZQHSJR0LEBUljnKo8Yn6bGiB')

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

function collapse_3() {
    document.getElementById("collapse-3").style.display = "block";
    document.getElementById("button-3").style.display = "none";
}
function play_sound_3() {
    audio_3.play();
    audio_3.volume = 0.02;
    audio_3.loop = true;
    audio_2.pause();
    audio_2.currentTime = 0;
}

function collapse_4() {
    document.getElementById("collapse-4").style.display = "block";
    document.getElementById("button-4").style.display = "none";
}
function play_sound_4() {
    audio_4.play();
    audio_4.volume = 0.02;
    audio_4.loop = true;
    audio_3.pause();
    audio_3.currentTime = 0;
}

function collapse_5() {
    document.getElementById("collapse-5").style.display = "block";
    document.getElementById("button-5").style.display = "none";
}
function play_sound_5() {
    audio_5.play();
    audio_5.volume = 0.02;
    audio_5.loop = true;
    audio_4.pause();
    audio_4.currentTime = 0;
}

function collapse_6() {
    document.getElementById("collapse-6").style.display = "block";
    document.getElementById("button-6").style.display = "none";
}

function collapse_7() {
    document.getElementById("collapse-7").style.display = "block";
    document.getElementById("button-7").style.display = "none";
}

function collapse_8() {
    document.getElementById("collapse-8").style.display = "block";
    document.getElementById("button-8").style.display = "none";
}

function collapse_9() {
    document.getElementById("collapse-9").style.display = "block";
    document.getElementById("button-9").style.display = "none";
}

function collapse_10() {
    document.getElementById("collapse-10").style.display = "block";
    document.getElementById("button-10").style.display = "none";
}

function collapse_11() {
    document.getElementById("collapse-11").style.display = "block";
    document.getElementById("button-11").style.display = "none";
}