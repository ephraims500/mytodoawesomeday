//I Created a "close" button and append it to each list item
var myTodoList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myTodoList.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00d7");
    span.className = "close";
    span.appendChild(txt);
    myTodoList[i].appendChild(span);
}

//I created a Click and will close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

//I Added a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

//I Created a new list item when clicking on the "Add" button
function newElement() {
var li = document.createElement("li");
var inputValue = document.getElementById("t-input").value;
var t = document.createTextNode(inputValue);
li.appendChild(t);
if (inputValue === '') {
    alert("Please you write a todo!");
} else {
    document.getElementById("t-list").appendChild(li);
}
document.getElementById("t-input").value = "";

var span = document.createElement("span");
var txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
li.appendChild(span);

for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
  }
}

// and that's not all! I am still this awesome! peice of shit!...