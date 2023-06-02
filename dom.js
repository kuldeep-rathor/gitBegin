// document.all[10].textContent= 'No Of Items';
// console.log(document.all[10]);
// var headerTitle= document.getElementById('header-title');
// var headerTitle= document.getElementById('main-header');

//  headerTitle.style.borderBottom ='solid 3px #000'

//  console.log(document.domain);
//  console.log(document.URL);
//  console.log(document.title);
//  console.log(document.doctype);
//  console.log(document.head);
//  console.log(document.body);
//  console.log(document.forms);
//  console.log(document.links);
//  console.log(document.images);


// getElementByClassName

// var items = document.getElementsByClassName('list-group-item');
//  console.log(items);

// items[1].textContent = 'Deep';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'pink';
// items[3].style.backgroundColor = 'green';

// for (var i=0; i<items.length; i++){
//     items[i].style.fontWeight ='bold'
// }


// getElementsByTagName
// var li = document.getElementsByTagName('li');
//  console.log(li);

// li[1].textContent = 'Dhabord';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'pink';
// li[3].style.backgroundColor = 'grey';

// for (var i=0; i<li.length; i++){
//     li[i].style.fontWeight ='bold'
// }

// querySelector
// var header = document.querySelector('#main-header');
// header.style.borderBottom = ('solid 4px #ccc');

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.value = " ";


// queryselector all

// var secondItem = document.querySelectorAll('.list-group-item:nth-child(2)');
// secondItem.style.fontColor ='green';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// for (var i=0; i<odd.length; i++ ){
//     odd[i].style.backgroundColor = 'green';
// }
 

// traversingDOM
 var itemList = document.querySelector('#items');

//  parentNode
//  console.log(itemList.parentNode);
//  console.log(itemList.parentNode.parentNode.parentNode);
//  itemList.parentNode.style.backgroundColor = '#f4f4f4'

//  parentElement
// console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = 'pink'

// childNode 
// console.log(itemList.childNodes);
itemList.children[1].textContent = "Hello 2";

// firtChild
// console.log(itemList.firstChild);

// firstElementChild
// console.log(itemList.firstElementChild);
itemList.firstElementChild.style.backgroundColor = 'orange'

// lastChild
// console.log(itemList.lastChild);

// lastElementChild
// console.log(itemList.lastElementChild);

// // nextsibling
// console.log(itemList.nextSibling);

// // nextElementsibling
// console.log(itemList.nextElementSibling);
 
//previousSibling
console.log(itemList.previousSibling);

// previousElementsibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'blue';

// createElement
var newDiv = document.querySelector('div');
 
// addClass
newDiv.className= 'Hello';

// addID
newDiv.id = 'Hello 1';

//  addAttr
newDiv.setAttribute('title', 'Hello Div');
 
// createTextNode
 var newDivText = document.createTextNode('HEllo');

//  add text to div 
newDiv.appendChild(newDivText);

 var container = document.querySelector('header, container');
 var h1 = document.querySelector('header h1');
 
  newDiv.style.fontSize ='30px';
  console.log(newDiv);
  container.insertAfter(newDiv,h1);

// ;