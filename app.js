const screenWidth = window.innerWidth;
const illustration = document.getElementById("illustration");

// Change the illustration based on screensize
if (screenWidth >= 760) {
  illustration.src = "/assets/images/illustration-sign-up-desktop.svg";
}
