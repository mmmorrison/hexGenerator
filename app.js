function getColor() {
  return '#' + Math.random().toString(16).slice(2, 8);
};

function setBackground() {
  var backgroundColor = getColor();
  document.body.style.background = backgroundColor;
}

setBackground();

document.body.onkeyup = function(e) {
  if (e.keyCody = 32) {
    setBackground();
  }
};
