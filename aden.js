var darkModeButton = document.getElementById('darkMode');
var webpageBackground = document.body;
var hideDarkMode = false;
var selfPortrait = document.getElementById('selfPortrait');

function activate() {
  if (hideDarkMode == true) {
    webpageBackground.style.background='honeydew';
     hideDarkMode = false;
     darkModeButton.innerHTML='Apply Dark Mode';

  }
  else if (hideDarkMode == false) {
    webpageBackground.style.background='black';
    hideDarkMode = true;
    darkModeButton.innerHTML='Hide Dark Mode';
    selfPortrait.style.border= 'solid 10px white';

  }
  console.log("activate");
}
darkModeButton.addEventListener("click", activate);
