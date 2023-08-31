const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

// Terminal typing code by Steve Dekorte
function getAllElementsWithAttribute(attribute) {
  var matchingElements = [];
  var allElements = document.getElementsByTagName('span');
  for (var i = 0, n = allElements.length; i < n; i++) {
    if (allElements[i].getAttribute(attribute)) {
      matchingElements.push(allElements[i]);
    }
  }
  return matchingElements;
}
var terminalElements = getAllElementsWithAttribute("terminal");
function terminals_init() {
  var elements = terminalElements;
  for (var i = 0; i < elements.length; i++) {
    var e = elements[i]
    e.completeHTML = e.innerHTML
    e.innerHTML = ""
    e.i = 0
  }
}
function terminals_start() {
//terminalIntervalFunction = function(){ terminals_next() }
//setInterval(terminalIntervalFunction, 1000/60);
terminals_next()
}
function terminals_next() {
  var done = true
  var elements = terminalElements;
  for (var i = 0; i < elements.length && done == true; i++) {
    var e = elements[i]
    e.i ++
    if (e.innerHTML.length >= e.completeHTML.length) {
      e.innerHTML = e.completeHTML
    } else {
      var s =  e.completeHTML.substring(0, e.i) 
      if (s.slice(-1) == " ") {
        if(e.innerHTML.length % 6 == 0 ) { s = s + "" } else { s = s + "|" }
      } else {
        s = s + "|"
      }
      e.innerHTML = s
      e.parentNode.style.display = 'none'
      e.parentNode.style.display = 'block'
      done = false
    }
  }
  if (!done) {
  //window.clearInterval(terminalIntervalFunction)
  setTimeout(terminals_next, 800/20)
  }
}
terminals_init()
window.onload = function() { terminals_start() };

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 
