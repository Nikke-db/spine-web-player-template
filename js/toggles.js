"use strict";

document.querySelector("#checkboxPremultipliedToggle").addEventListener('input', (e) => {
  premultipliedAlphaValue = e.target.checked

  if (current_spine !== "") {
    reloadSpine()
  }
})