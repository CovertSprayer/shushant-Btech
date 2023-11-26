const para = document.querySelector('p');
const text = para.innerText; // getter
const textinHTML = para.innerHTML;
console.log(text);
console.log(textinHTML);

para.innerText = '<em>Hello!! this is some text.</em>' //setter
para.innerHTML = '<em>Hello!! this is some text.</em>' 

para.setAttribute('id', 'special');
// para.setAttribute('class', 'one two');
// para.removeAttribute('class');
// console.log(para.getAttribute('id'));
// console.log(para.hasAttribute('id'));

const img = document.querySelector('img');
img.setAttribute('src', 'https://images.unsplash.com/photo-1682695799561-033f55f75b25?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D');


img.classList.add('one', 'two', 'three');
img.classList.remove('one');
console.log(img.classList.contains('two'))
img.classList.toggle('one');

