function getColor() {
  return '#' + Math.random().toString(16).slice(2, 8);
};

function setBackground() {
  var backgrounColor = getColor();
  document.body.style.background = backgrounColor;
}

setBackground();
