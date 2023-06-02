// delete and edit functionality
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
// console.log(itemList);

// form submit event
form.addEventListener('submit',addItems);

// delete event 
 itemList.addEventListener('click', removeItem);

// Add Item
function addItems(e){
    e.preventDefault();

    // get input value 
var newItem = document.getElementById('item').value ;
// create new li element 
var li = document.createElement('li');

// add class 
li.className = 'list-group-items';

// add text node with input value 
li.appendChild(document.createTextNode(newItem));

// create a delete button
var deleteBtn = document.createElement('button');

// add class to del button
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

// append text node 
deleteBtn.appendChild(document.createTextNode('X'));

// append button to li 
li.appendChild(deleteBtn);

// append li to list 
itemList.appendChild(li);
}

// remove item 
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure ?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


