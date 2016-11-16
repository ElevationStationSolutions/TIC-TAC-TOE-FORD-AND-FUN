var namespace = "http://www.w3.org/2000/svg"
var canvas = document.getElementById("BOARD")
var mark1 = document.createElementNS(namespace, "circle")
var cover1 = document.createElementNS(namespace, "rect")
var mark2 = document.createElementNS(namespace, "circle")
var cover2 = document.createElementNS(namespace, "rect")
var mark3 = document.createElementNS(namespace, "circle")
var cover3 = document.createElementNS(namespace, "rect")
var mark4 = document.createElementNS(namespace, "circle")
var cover4 = document.createElementNS(namespace, "rect")
var mark5 = document.createElementNS(namespace, "circle")
var cover5 = document.createElementNS(namespace, "rect")
var mark6 = document.createElementNS(namespace, "circle")
var cover6 = document.createElementNS(namespace, "rect")
var mark7 = document.createElementNS(namespace, "circle")
var cover7 = document.createElementNS(namespace, "rect")
var mark8 = document.createElementNS(namespace, "circle")
var cover8 = document.createElementNS(namespace, "rect")
var mark9 = document.createElementNS(namespace, "circle")
var cover9 = document.createElementNS(namespace, "rect")
var turn = 1
function one() {
  if (turn == 1) {
    mark1.setAttribute("cx", 50)
    mark1.setAttribute("cy", 50)
    mark1.setAttribute("r", 30)
    mark1.setAttribute("fill", "darkred")
    canvas.appendChild(mark1)
    cover1.setAttribute("x", 0)
    cover1.setAttribute("y", 0)
    cover1.setAttribute("width", 100)
    cover1.setAttribute("height", 100)
    cover1.setAttribute("fill", "black")
    cover1.setAttribute("opacity", 0)
    canvas.appendChild(cover1)
    turn = 2
  } else {
    mark1.setAttribute("cx", 50)
    mark1.setAttribute("cy", 50)
    mark1.setAttribute("r", 30)
    mark1.setAttribute("fill", "grey")
    canvas.appendChild(mark1)
    cover1.setAttribute("x", 0)
    cover1.setAttribute("y", 0)
    cover1.setAttribute("width", 100)
    cover1.setAttribute("height", 100)
    cover1.setAttribute("fill", "black")
    cover1.setAttribute("opacity", 0)
    canvas.appendChild(cover1)
    turn = 1
  }
}
function two() {
  if (turn == 1) {
    mark2.setAttribute("cx", 150)
    mark2.setAttribute("cy", 50)
    mark2.setAttribute("r", 30)
    mark2.setAttribute("fill", "darkred")
    canvas.appendChild(mark2)
    cover2.setAttribute("x", 100)
    cover2.setAttribute("y", 0)
    cover2.setAttribute("width", 100)
    cover2.setAttribute("height", 100)
    cover2.setAttribute("fill", "black")
    cover2.setAttribute("opacity", 0)
    canvas.appendChild(cover2)
    turn = 2
  } else {
    mark2.setAttribute("cx", 150)
    mark2.setAttribute("cy", 50)
    mark2.setAttribute("r", 30)
    mark2.setAttribute("fill", "grey")
    canvas.appendChild(mark2)
    cover2.setAttribute("x", 100)
    cover2.setAttribute("y", 0)
    cover2.setAttribute("width", 100)
    cover2.setAttribute("height", 100)
    cover2.setAttribute("fill", "black")
    cover2.setAttribute("opacity", 0)
    canvas.appendChild(cover2)
    turn = 1
  }
}
function three() {
  if (turn == 1) {
    mark3.setAttribute("cx", 250)
    mark3.setAttribute("cy", 50)
    mark3.setAttribute("r", 30)
    mark3.setAttribute("fill", "darkred")
    canvas.appendChild(mark3)
    cover3.setAttribute("x", 200)
    cover3.setAttribute("y", 0)
    cover3.setAttribute("width", 100)
    cover3.setAttribute("height", 100)
    cover3.setAttribute("fill", "black")
    cover3.setAttribute("opacity", 0)
    canvas.appendChild(cover3)
    turn = 2
  } else {
    mark3.setAttribute("cx", 250)
    mark3.setAttribute("cy", 50)
    mark3.setAttribute("r", 30)
    mark3.setAttribute("fill", "grey")
    canvas.appendChild(mark3)
    cover3.setAttribute("x", 200)
    cover3.setAttribute("y", 0)
    cover3.setAttribute("width", 100)
    cover3.setAttribute("height", 100)
    cover3.setAttribute("fill", "black")
    cover3.setAttribute("opacity", 0)
    canvas.appendChild(cover3)
    turn = 1
  }
}
function four() {
  if (turn == 1) {
    mark4.setAttribute("cx", 50)
    mark4.setAttribute("cy", 150)
    mark4.setAttribute("r", 30)
    mark4.setAttribute("fill", "darkred")
    canvas.appendChild(mark4)
    cover4.setAttribute("x", 0)
    cover4.setAttribute("y", 100)
    cover4.setAttribute("width", 100)
    cover4.setAttribute("height", 100)
    cover4.setAttribute("fill", "black")
    cover4.setAttribute("opacity", 0)
    canvas.appendChild(cover4)
    turn = 2
  } else {
    mark4.setAttribute("cx", 50)
    mark4.setAttribute("cy", 150)
    mark4.setAttribute("r", 30)
    mark4.setAttribute("fill", "grey")
    canvas.appendChild(mark4)
    cover4.setAttribute("x", 0)
    cover4.setAttribute("y", 100)
    cover4.setAttribute("width", 100)
    cover4.setAttribute("height", 100)
    cover4.setAttribute("fill", "black")
    cover4.setAttribute("opacity", 0)
    canvas.appendChild(cover4)
    turn = 1
  }
}
function five() {
  if (turn == 1) {
    mark5.setAttribute("cx", 150)
    mark5.setAttribute("cy", 150)
    mark5.setAttribute("r", 30)
    mark5.setAttribute("fill", "darkred")
    canvas.appendChild(mark5)
    cover5.setAttribute("x", 100)
    cover5.setAttribute("y", 100)
    cover5.setAttribute("width", 100)
    cover5.setAttribute("height", 100)
    cover5.setAttribute("fill", "black")
    cover5.setAttribute("opacity", 0)
    canvas.appendChild(cover5)
    turn = 2
  } else {
    mark5.setAttribute("cx", 150)
    mark5.setAttribute("cy", 150)
    mark5.setAttribute("r", 30)
    mark5.setAttribute("fill", "grey")
    canvas.appendChild(mark5)
    cover5.setAttribute("x", 100)
    cover5.setAttribute("y", 100)
    cover5.setAttribute("width", 100)
    cover5.setAttribute("height", 100)
    cover5.setAttribute("fill", "black")
    cover5.setAttribute("opacity", 0)
    canvas.appendChild(cover5)
    turn = 1
  }
}
function six() {
  if (turn == 1) {
    mark6.setAttribute("cx", 250)
    mark6.setAttribute("cy", 150)
    mark6.setAttribute("r", 30)
    mark6.setAttribute("fill", "darkred")
    canvas.appendChild(mark6)
    cover6.setAttribute("x", 200)
    cover6.setAttribute("y", 100)
    cover6.setAttribute("width", 100)
    cover6.setAttribute("height", 100)
    cover6.setAttribute("fill", "black")
    cover6.setAttribute("opacity", 0)
    canvas.appendChild(cover6)
    turn = 2
  } else {
    mark6.setAttribute("cx", 250)
    mark6.setAttribute("cy", 150)
    mark6.setAttribute("r", 30)
    mark6.setAttribute("fill", "grey")
    canvas.appendChild(mark6)
    cover6.setAttribute("x", 200)
    cover6.setAttribute("y", 100)
    cover6.setAttribute("width", 100)
    cover6.setAttribute("height", 100)
    cover6.setAttribute("fill", "black")
    cover6.setAttribute("opacity", 0)
    canvas.appendChild(cover6)
    turn = 1
  }
}
function seven() {
  if (turn == 1) {
    mark7.setAttribute("cx", 50)
    mark7.setAttribute("cy", 250)
    mark7.setAttribute("r", 30)
    mark7.setAttribute("fill", "darkred")
    canvas.appendChild(mark7)
    cover7.setAttribute("x", 0)
    cover7.setAttribute("y", 200)
    cover7.setAttribute("width", 100)
    cover7.setAttribute("height", 100)
    cover7.setAttribute("fill", "black")
    cover7.setAttribute("opacity", 0)
    canvas.appendChild(cover7)
    turn = 2
  } else {
    mark7.setAttribute("cx", 50)
    mark7.setAttribute("cy", 250)
    mark7.setAttribute("r", 30)
    mark7.setAttribute("fill", "grey")
    canvas.appendChild(mark7)
    cover7.setAttribute("x", 0)
    cover7.setAttribute("y", 200)
    cover7.setAttribute("width", 100)
    cover7.setAttribute("height", 100)
    cover7.setAttribute("fill", "black")
    cover7.setAttribute("opacity", 0)
    canvas.appendChild(cover7)
    turn = 1
  }
}
function eight() {
  if (turn == 1) {
    mark8.setAttribute("cx", 150)
    mark8.setAttribute("cy", 250)
    mark8.setAttribute("r", 30)
    mark8.setAttribute("fill", "darkred")
    canvas.appendChild(mark8)
    cover8.setAttribute("x", 100)
    cover8.setAttribute("y", 200)
    cover8.setAttribute("width", 100)
    cover8.setAttribute("height", 100)
    cover8.setAttribute("fill", "black")
    cover8.setAttribute("opacity", 0)
    canvas.appendChild(cover8)
    turn = 2
  } else {
    mark8.setAttribute("cx", 150)
    mark8.setAttribute("cy", 250)
    mark8.setAttribute("r", 30)
    mark8.setAttribute("fill", "grey")
    canvas.appendChild(mark8)
    cover8.setAttribute("x", 100)
    cover8.setAttribute("y", 200)
    cover8.setAttribute("width", 100)
    cover8.setAttribute("height", 100)
    cover8.setAttribute("fill", "black")
    cover8.setAttribute("opacity", 0)
    canvas.appendChild(cover8)
    turn = 1
  }
}
function nine() {
  if (turn == 1) {
    mark9.setAttribute("cx", 250)
    mark9.setAttribute("cy", 250)
    mark9.setAttribute("r", 30)
    mark9.setAttribute("fill", "darkred")
    canvas.appendChild(mark9)
    cover9.setAttribute("x", 200)
    cover9.setAttribute("y", 200)
    cover9.setAttribute("width", 100)
    cover9.setAttribute("height", 100)
    cover9.setAttribute("fill", "black")
    cover9.setAttribute("opacity", 0)
    canvas.appendChild(cover9)
    turn = 2
  } else {
    mark9.setAttribute("cx", 250)
    mark9.setAttribute("cy", 250)
    mark9.setAttribute("r", 30)
    mark9.setAttribute("fill", "grey")
    canvas.appendChild(mark9)
    cover9.setAttribute("x", 200)
    cover9.setAttribute("y", 200)
    cover9.setAttribute("width", 100)
    cover9.setAttribute("height", 100)
    cover9.setAttribute("fill", "black")
    cover9.setAttribute("opacity", 0)
    canvas.appendChild(cover9)
    turn = 1
  }
}
function reset() {
  if (confirm("Do you really really REALLY WANT TO RESET THE GAME?\nIf you press okay, the board will be cleared.") == true) {
    reset1()
  }
}
function reset1() {
  if (confirm("This is your last chance to back out...\n are you REALLY SURE YOU WANT TO RESET THE GAME?") == true) {
    reset2()
  }
}
function reset2() {
  mark1.setAttribute("fill", "none")
  cover1.setAttribute("fill", "none")
  mark2.setAttribute("fill", "none")
  cover2.setAttribute("fill", "none")
  mark3.setAttribute("fill", "none")
  cover3.setAttribute("fill", "none")
  mark4.setAttribute("fill", "none")
  cover4.setAttribute("fill", "none")
  mark5.setAttribute("fill", "none")
  cover5.setAttribute("fill", "none")
  mark6.setAttribute("fill", "none")
  cover6.setAttribute("fill", "none")
  mark7.setAttribute("fill", "none")
  cover7.setAttribute("fill", "none")
  mark8.setAttribute("fill", "none")
  cover8.setAttribute("fill", "none")
  mark9.setAttribute("fill", "none")
  cover9.setAttribute("fill", "none")
  turn = 1
  alert("GAME RESET!")
}
