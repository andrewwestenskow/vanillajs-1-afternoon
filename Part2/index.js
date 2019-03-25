//This is not too complicated.  All we're doing is setting the color of the cards to match their correct suit color.  There are no checks to make sure it's correct or to change the values of the cards.

const idInput = document.getElementById('idInput');
//gets the full element saves it to the variable.  From there we can get whatever other info we want on it
const colorInput = document.getElementById('colorInput');
//gets the full element

console.log(idInput)
console.log(colorInput)

function setCard() {
  //The function is called when we push the button
  const card = document.getElementById(idInput.value);
  // The input determines which card's color is going to be changed
  card.style.color = colorInput.value;
  // This changes the color of the element to match whatever I put in the colorInput input element
}