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
    canvas.apppendChild(cover1)
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
    canvas.apppendChild(cover2)
    turn = 1
  }
}
