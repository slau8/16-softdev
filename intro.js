/*
	CaSh 
	Shannon Lau and Carol Pan
	SoftDev1 pd7
	K16 -- Sequential Progression
	2017-12-11
*/

//-------------------------------------------------

var count = 8;

var buttonCallBack = function(e){
    var el = document.createElement("li");
    el.innerHTML = 'item ' + count;
    var list = document.getElementById('thelist');
    list.appendChild(el);
    count++;
}

var b = document.getElementById('b');
b.addEventListener('click', buttonCallBack);

//-------------------------------------------------

var mOverCallBack = function(e){
    var heading = document.getElementById('h');
    heading.innerHTML = this.innerHTML;
};

var mOutCallBack = function(e){
    var heading = document.getElementById('h');
    heading.innerHTML = "Hello World!";
};

var li = document.getElementsByTagName('li');
for (i = 0; i < li.length; i++){
    li[i].addEventListener('mouseover', mOverCallBack);
    li[i].addEventListener('mouseout', mOutCallBack);
}
