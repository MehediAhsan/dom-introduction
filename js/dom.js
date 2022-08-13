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