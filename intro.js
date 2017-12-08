/*
CaSh 
Shannon Lau and Carol Pan
SoftDev1 pd7
K16 -- Sequential Progression
2017-12-11
*/

var count = 8; // list item number

// when button clicked, add new list item
var buttonCallBack = function(e){
    var el = document.createElement("li");
    el.innerHTML = 'item ' + count;
    var list = document.getElementById('thelist');
    list.appendChild(el);
    mouseCalls();
    count++;
}

// add click event to button
var b = document.getElementById('b');
b.addEventListener('click', buttonCallBack);

// when mouseover list item, change heading to item name
var mOverCallBack = function(e){
    var heading = document.getElementById('h');
    heading.innerHTML = this.innerHTML;
};

// when mouseout list item, change heading to 'Hello World!'
var mOutCallBack = function(e){
    var heading = document.getElementById('h');
    heading.innerHTML = "Hello World!";
};

// when list item clicked, remove list item
var clickCallBack = function(e){
    this.remove();
}

// add mouseover, mouseout, and click events to list items
var mouseCalls = function(){
    var li = document.getElementsByTagName('li');
    for (i = 0; i < li.length; i++){
	li[i].addEventListener('mouseover', mOverCallBack);
	li[i].addEventListener('mouseout', mOutCallBack);
	li[i].addEventListener('click', clickCallBack);
    };
};

mouseCalls();
