let displayButton = document.getElementById('link-header-mobile-icon');//the button to change display to block
let afterDisplayShowButton = document.getElementById('hidden-link-header');//the div that will trigger de display none

function showHiddenDiv() {
  if(document.getElementById('header-hidden-mobile').style.display = 'none') {
    document.getElementById('header-hidden-mobile').style.display = 'block';
  }
}

function hideHiddenDiv() {
  if(document.getElementById('header-hidden-mobile').style.display = 'block') {
    document.getElementById('header-hidden-mobile').style.display = 'none';
  }
}


displayButton.onclick = showHiddenDiv;
afterDisplayShowButton.onclick = hideHiddenDiv;
