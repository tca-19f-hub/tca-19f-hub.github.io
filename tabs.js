function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("maintab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
function myFunction1() {
  var x = document.getElementById("toc-1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";

    var y = document.getElementById("toc-2");
  }
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function myFunction2() {
  var x = document.getElementById("toc-2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
    var y = document.getElementById("toc-1");
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    x.style.display = "block";
}
}