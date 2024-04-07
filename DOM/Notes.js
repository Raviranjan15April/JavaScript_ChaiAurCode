/*
DOM:- Document Object model.
window is global object. it will give you a lot of information including documents.
Note:- when we will do condole.log(document) we will get information about DOM. if want more things related to window that can be get from console.dir(document);

Note:- <!DOCTYPE html> will tell that which version o html is this. so dcouments will start from the html.
In DOM every tag is called as node. like html node having two node head node & body node.

DOM Selector:-
we can select any Dom by using the below selector.
    a. document.getElementById("give Id");
    b. document.getElementByClassName("give class name")
    c. document.querySelector(query will be similar how we are selecting anything for applying css);    // it will give you first selcted/appeared element
    d. document.querySelectorAll()   // this will give list of selected element.    

Note:- HTML Collection & NodeList is not exactly an array. so all the method of arry will be not applied here. before using anything please check in prototype what all the method is supported by HTML collection/Node List.
    if you want to convert the HTML Collection & NodeList in to array that be done using the Array.from() method. it will convert the HTML collection/NodeList in to array.

Difference between innerHTML, innerText and textContent.
innerHTML:- it is the property that will set/return the HTML content including the html tag.
innerText:- it is the property that will set/return the visible text content of an element excluding the html tag.
textcontent:- it is the property that will set/return raw content of the element(some element is not visible that will also included) including any HTML tag.

*/

/*
How to create a new element:-

// select a element having class parent
const parentNode = document.querySelector('.parent');
console.log(parentNode);

// get the children of the selected parent
const childrenNode = parentNode.children;
console.log(childrenNode);                  // this will give HTMLCollection

// putting loop over the HTMLCollection
for(let i = 0; i < childrenNode.length; i++){
    childrenNode[i].style.color = "red"     // changing the color of node.
}

// getting FirstElementChild from the parentNode
console.log(parentNode.firstElementChild);

// getting lastElementChild from the parentNode
console.log(parentNode.lastElementChild);

// we can move from children to parent node.
const childNode = document.querySelector('.day');
console.log(childNode);
const parentNodeFromChild = childNode.parentElement;
console.log(parentNodeFromChild);               // parent of selected node.
console.log(childNode.nextElementSibling);      // selecting next sibling of selected node 

// create a element

const div = document.createElement("div");      // creating an element
console.log(div);                               
div.className = "my-div";                       // setting class in to div
div.id = "my-Id";                               // setting id in to div
div.setAttribute("title", "div element");       // setting title in to div using setAttribute method
div.style.backgroundColor = "green"             // adding style in to div
div.style.padding = "12px";
// div.innerText = "creating text using innerText";                 // adding text inside the div using innerText

const text = document.createTextNode("creating text using createTextNode method");
div.appendChild(text);

const body = document.getElementById("body");
body.appendChild(div);

// add the new element
function addList(language){
    const newList = document.createElement('li');   // creating the element
    newList.innerHTML = `${language}`;              // adding the text inside the created element
    document.querySelector('.language-list').appendChild(newList);  // selecting the target and adding the element
}

addList('Go Lang');
addList("C++");

function addListInOptimizeWay(language){            // this is the optimize way to add the element
    const listElement = document.createElement("li");
    listElement.appendChild(document.createTextNode(`${language}`));
    document.querySelector('.language-list').appendChild(listElement);
}
addListInOptimizeWay("Ruby");

// Edit the element
const secondList = document.querySelector("li:nth-child(2)");
const newList = document.createElement('li').appendChild(document.createTextNode("Mojo"));
secondList.replaceWith(newList);                // replaceWith will replace the element

// delete the element
const lastList = document.querySelector("li:last-child");
lastList.remove();                              // remove() will remove the element from the list.

*/