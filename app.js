function getColor() {
  return '#' + Math.random().toString(16).slice(2, 8).toUpperCase();
};

function setBackground() {
  var backgroundColor = getColor();
  document.body.style.background = backgroundColor;
  document.getElementById('hexColor').innerHTML = backgroundColor;
};


setBackground();


document.body.onkeyup = function(e) {
  if (e.keyCode == 32) {
    document.getElementsByClassName('hexColor').innerHTML = "test"
    setBackground();
  }
};
