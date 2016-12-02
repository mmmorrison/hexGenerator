function getColor() {
  return '#' + Math.random().toString(16).slice(2, 8).toUpperCase();
};

function setBackground() {
  var backgroundColor = getColor();
  document.body.style.background = backgroundColor;
}

function displayHex() {
  document.write(getColor());
}

displayHex();
setBackground();


// document.body.onkeyup = function(e) {
//   if (e.keyCody = 32) {
//     setBackground();
//   }
// };
