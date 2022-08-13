/* First way */
const allHeadings = document.getElementsByTagName('h1');
// console.log(allHeadings);
for(const h1 of allHeadings){
    console.log(h1.innerText);
}

/* Second way */
const elementTitle = document.getElementById('element-title');
// console.log(elementTitle);
elementTitle.innerText = 'Five different ways to finding element from html'
console.log(elementTitle.innerText);

/* Third way */
const elements = document.getElementsByClassName('elements');
// console.log(elements);
for(const element of elements){
    console.log(element.innerText);
}

/* Fourth way */
const findOneLi = document.querySelector('.elements-container li');
console.log(findOneLi.innerText);

/* Fifth way */
const findLi = document.querySelectorAll('.elements-container li');
// console.log(findLi.innerText);
for(const li of findLi){
    console.log(li.innerText);
}


/* using dynamic style */

document.getElementById('things-title').style.color='red';
document.getElementById('things-title').style.textAlign='center';

/* get or set attribute */

document.getElementById('things-title').setAttribute('title','This the title');
console.log(document.getElementById('things-title').getAttribute('title'));

/* inner html vs inner text */

console.log(document.getElementsByClassName('elements-container')[0].innerHTML);
console.log(document.getElementsByClassName('elements-container')[0].innerText);
// console.log(document.getElementsByClassName('elements-container')[0].innerHTML='<h1>This is the process to set tag</h1>');
// console.log(document.getElementsByClassName('elements-container')[0].innerText='This is the process to set text');



/* add or remove css class */

const objectContainer = document.getElementById('object-container');
objectContainer.classList.add('object-border');
objectContainer.classList.remove('object-bg');


/* DOM node */

const nodeContainer = document.getElementById('node-container');
console.log(nodeContainer.childNodes);
console.log(nodeContainer.firstChild);
console.log(nodeContainer.childNodes[5]);
console.log(nodeContainer.childNodes[5].childNodes[5]);
console.log(nodeContainer.childNodes[5].childNodes[5].nextSibling);

//add element
//select where to add
const nodeUl = document.querySelector('#node-container ul');
console.log(nodeUl);
//what to be added
const newLi = document.createElement('li');
newLi.innerText = 'appendChild';
console.log(newLi);
//add the child
nodeUl.appendChild(newLi);

console.log(nodeUl.parentNode);


/* section add */

const mainContainer = document.getElementById('main-container');

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'Create HTML elements';
section.appendChild(h1);
const p = document.createElement('p');
p.innerText = 'The appendChild() method of the Node interface adds a node to the end of the list of children of a specified parent node. If the given child is a reference to an existing node in the document, appendChild() moves it from its current position to the new position.'
section.appendChild(p);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'select where to add';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'what to be added';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'add the child';
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);

//set innerHTML directly

const sectionDirect = document.createElement('section');
sectionDirect.innerHTML = `
<h1>Create HTML elements directly</h1>
<p>Here we can easily create a html element. we can use innerHTML for this and add elements one by one</p>
<ul>
    <li>create a section</li>
    <li>add html elements into innerHTML</li>
    <li>add the child</li>
</ul>
`

mainContainer.appendChild(sectionDirect);