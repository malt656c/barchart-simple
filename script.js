/* defininition af vores listeelement*/
const list = document.querySelector("ul");
/* bar og farvefunktion */
function generateBarChart() {
    /* generér random tal */
  let randomNumber = Math.floor((Math.random() * 100)+1);
  /* laver li element og påsætter det på vores liste */
  const li = document.createElement("li");
  list.appendChild(li);
  /* sætter css property "--height", som bestemmer farver og højde på li elementet, til vores randomNumber */
  li.style.setProperty("--height", `${randomNumber}`);
  /* tjekker mængden af elementer i listen og fjerner det ældste "barn" i listen når mængden af "børn" når over 20 */
  if (list.children.length > 20) {
    list.removeChild(list.children[0]);
  }
}
/* køre funktionen hvert sekund (1000ms) */
setInterval(generateBarChart, 1000);
