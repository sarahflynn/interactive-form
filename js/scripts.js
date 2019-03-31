// focus onload
window.onload = function() {
  var input = document.getElementById('name').focus();
};

// title other text box display
function checkOption(value) {
  const otherTextInput = document.getElementById('other-title');

  if (value === 'other') {
    otherTextInput.style.display = 'block';
  }
}

// conditional display of shirt colors
function checkShirtDesign(value) {
  const colors = document.getElementById('color');

  if (value === 'js puns') {
    colors.innerHTML = '<option value="cornflowerblue">Cornflower Blue</option><option value="darkslategrey"> Dark Slate Grey</option><option value="gold">Gold</option>'
  } else if (value === 'heart js') {
    colors.innerHTML = '<option value="tomato">Tomato</option><option value = "steelblue" > Steel Blue</option><option value="dimgrey">Dim Grey</option>'
  } else {
    colors.innerHTML = '';
  }
}
