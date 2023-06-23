//your JS code here. If required.
window.onload = function() {
  var targetElement = document.getElementById("level");
  var domLevel = 0;

  while (targetElement.parentElement) {
    targetElement = targetElement.parentElement;
    domLevel++;
  }

  console.log(alert("The level of the element is:"+domLevel));
};