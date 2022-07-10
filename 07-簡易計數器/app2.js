//Event delegation: set the listener on the parent so that you don't need to set seperate listener on the buttons
//use e.target to specify where specifically you clicked.

const parent = document.querySelector(".counter")

parent.addEventListener("click", (e) => {
  const display = document.querySelector("#counter")
  if (e.target.textContent === "+") {
    display.value = Number(display.value) + 1
  } else if (e.target.textContent === "-") {
    if (display.value > 0) display.value = Number(display.value) - 1
  }
})
