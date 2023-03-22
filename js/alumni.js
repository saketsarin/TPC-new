// scroll the invitation video with the page only on big screens
var alumniIntro = document.getElementById("alumniIntro");
alumniIntro.style.position = "relative";

window.addEventListener("scroll", function () {
  var value = window.scrollY - 50;

  if (window.innerWidth > 768) {
    if (value < 0) {
      value = 0;
    } else if (value > 500) {
      value = 500;
    }

    alumniIntro.style.top = value * 0.5 + "px";
  }
});
