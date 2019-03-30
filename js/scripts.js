window.onload = function () {
  var input = document.getElementById("name").focus();
}

function checkOption(value) {
  const otherTextInput = document.getElementById('other-text');
  
  if (value === 'other') {
    otherTextInput.style.display = 'block';
  }
}