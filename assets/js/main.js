let buttonToChange = document.getElementById('link-header-mobile');//the button

function showHiddenDiv() {
  let changeDisplay = 'block'
  return document.getElementById('header-hidden-mobile').style.display = changeDisplay;
}

buttonToChange.onclick = showHiddenDiv;
