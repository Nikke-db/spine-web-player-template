"use strict";

//zoom
document.addEventListener("wheel", (e) => {

    if (  e.target !== document.querySelector("#background-div") &&
          e.target !== document.querySelector(".spine-player") &&
          e.target !== document.querySelector(".spine-player-canvas") &&
          e.target !== document.querySelector("body")) {
          return false
    }

    let canvas = document.querySelector("#player-container")
    let height = canvas.style.height.replaceAll("vh", "")

    switch (e.deltaY > 0) {
          case true:
                if (parseInt(canvas.style.height.replaceAll("vh", "")) <= 20) return false
                canvas.style.height = parseInt(height) - 5 + "vh";
                break;
          case false:
                if (parseInt(canvas.style.height.replaceAll("vh", "")) >= 500) return false
                canvas.style.height = parseInt(height) + 5 + "vh";
                break;
    }
})

//click to drag and move the animation
let move = false
let oldx = "";
let oldy = "";

document.addEventListener("mousedown", (e) => {

      if (  e.target !== document.querySelector(".spine-player-canvas") &&
            e.target !== document.querySelector("body")) {
            return false
      }
      move = true
      oldx = e.clientX;
      oldy = e.clientY;
})

document.addEventListener("mouseup", (e) => {
      oldx = ""
      oldy = ""
      move = false
})

document.addEventListener("mousemove", (e) => {
      if (move) {

            let newx = e.clientX
            let newy = e.clientY
            let stylel, stylet;

            stylel = document.querySelector("#player-container").style.left.replaceAll("px", "")

            stylet = document.querySelector("#player-container").style.top.replaceAll("px", "")

            if (newx > oldx) {
                  document.querySelector("#player-container").style.left = (parseInt(stylel) + (newx - oldx)) + "px"
            }
            if (newx < oldx) {
                  document.querySelector("#player-container").style.left = (parseInt(stylel) + (newx - oldx)) + "px"
            }
            if (newy < oldy) {
                  document.querySelector("#player-container").style.top = (parseInt(stylet) + (newy - oldy)) + "px"
            }
            if (newy > oldy) {
                  document.querySelector("#player-container").style.top = (parseInt(stylet) + (newy - oldy)) + "px"
            }
            oldx = newx
            oldy = newy
      }
})