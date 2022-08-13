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

