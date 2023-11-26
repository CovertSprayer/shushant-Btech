const p = document.querySelector('p');
const ul = document.querySelector('ul');

// console.log(p.parentElement);
// console.log(p.nextElementSibling);
// console.log(ul.previousElementSibling)
// console.log(ul.children)
// console.log(p.parentElement.nextElementSibling.children[1].children[0])

const li = document.createElement('li');
li.innerText = 'Kiwi';
console.log(li);
ul.append(li);

const newPara = document.createElement('p');
newPara.innerText = 'Random text';
ul.after(newPara);