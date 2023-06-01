// document.all[10].textContent= 'No Of Items';
// console.log(document.all[10]);
var headerTitle= document.getElementById('header-title');
var headerTitle= document.getElementById('main-header');

 headerTitle.style.borderBottom ='solid 3px #000'

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

var odd = document.querySelectorAll('li:nth-child(odd)');
for (var i=0; i<odd.length; i++ ){
    odd[i].style.backgroundColor = 'green';
}



 
