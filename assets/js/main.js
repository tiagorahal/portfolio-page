const displayButton = document.getElementById('link-header-mobile-icon');// the button to change display to block
const afterDisplayShowButton = document.getElementById('hidden-link-header');// the div that will trigger de display none

/* eslint-disable */
function showHiddenDiv() {
  if (document.getElementById('header-hidden-mobile').style.display = 'none') {
    document.getElementById('header-hidden-mobile').style.display = 'block';
  }
}

function hideHiddenDiv() {
  if (document.getElementById('header-hidden-mobile').style.display = 'block') {
    document.getElementById('header-hidden-mobile').style.display = 'none';
  }
}
/* eslint-enable */

displayButton.onclick = showHiddenDiv;
afterDisplayShowButton.onclick = hideHiddenDiv;
