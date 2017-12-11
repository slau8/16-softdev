/*
  CaSh 
  Shannon Lau and Carol Pan
  SoftDev1 pd7
  K16 -- Sequential Progression
  2017-12-11
*/

// body element
var body = document.getElementsByTagName("body")[0];
console.log(body);

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

//----------------fibonacci-----------------
// procures the next element in the fib sequence
var fibCounter = 1;
var fibList = document.createElement("ol");
var fibButton = document.createElement("button");
fibButton.innerHTML = "Generate Next Fib";

// adding elements to the body
body.appendChild(fibList);
body.appendChild(fibButton);

// functions for fibonacci component
var fibonacci = function(n){
    if (n == 0)
	return 0;
    else if (n == 1 || n == 2)
	return 1;
    else {
	fibNums = document.getElementsByClassName("fib");
	len = fibNums.length;
	return Number(fibNums[len-1].innerHTML) + Number(fibNums[len-2].innerHTML);
    };
};

var fibButtonCallback = function(e){
    var nextFib = document.createElement("li");
    nextFib.setAttribute("class", "fib");
    nextFib.innerHTML = fibonacci(fibCounter);
    fibList.appendChild(nextFib);
    fibCounter++;
};

// add click functionality
fibButton.addEventListener("click", fibButtonCallback);

//----------------triangular sequence-----------------
// procures the next element in the triangular sequence
var triCounter = 1;
var triList = document.createElement("ol");
var triButton = document.createElement("button");
triButton.innerHTML = "Generate Next Triangle";

// adding elements to the body
body.appendChild(triList);
body.appendChild(triButton);

// functions for triangular component
var triangular = function(n){
    if (n == 1)
	return 1;
    else {
	triNums = document.getElementsByClassName("tri");
	len = triNums.length;
	return Number(triNums[len-1].innerHTML) + triCounter;
    };
    triCounter++
};

var triButtonCallback = function(e){
    var nextTri = document.createElement("li");
    nextTri.setAttribute("class", "tri");
    nextTri.innerHTML = triangular(triCounter);
    triList.appendChild(nextTri);
    triCounter++;
};

// add click functionality
triButton.addEventListener("click", triButtonCallback);
