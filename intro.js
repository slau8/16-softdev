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
    addListeners(el);
    count++;
};

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
};

var addListeners = function(item){
    item.addEventListener('mouseover', mOverCallBack);
    item.addEventListener('mouseout', mOutCallBack);
    item.addEventListener('click', clickCallBack);
};

// add mouseover, mouseout, and click events to list items
var li = document.getElementsByTagName('li');
for (i = 0; i < li.length; i++){
    addListeners(li[i]);
};

//creating procures the next element in the fib sequence
var fibCounter = 1;
var fibList = document.createElement("ol");
var fibButton = document.createElement("button");
fibButton.innerHTML = "Generate Next Fib";
var body = document.getElementsByTagName("body")[0];
console.log(body);

//adding elements to the body
body.appendChild(fibList);
console.log(fibList);
body.appendChild(fibButton);
console.log(fibButton);

//functions for fibonacci component
var fibonacci = function(n){
    if (n == 0)
	return 0;
    else if (n == 1)
	return 1;
    else
	return fibonacci(n-1) + fibonacci(n-2);
};

var fibButtonCallback = function(e){
    var nextFib = document.createElement("li");
    nextFib.innerHTML = fibonacci(fibCounter);
    fibList.appendChild(nextFib);
    fibCounter++;
};

//add click functionality
fibButton.addEventListener("click", fibButtonCallback);

