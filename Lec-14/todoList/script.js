const list = document.querySelector('.list');
const form = document.querySelector('form');
const inp = document.querySelector('input');


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const inpText = inp.value;
    inp.value = '';

    const div = document.createElement('div');
    div.classList.add('task');
    div.innerHTML = `
                    <input class="check" type="checkbox">
                    <p class="text">${inpText}</p>
                    <span class="r-btn">❌</span>`

    list.append(div);
})


list.addEventListener('click', (e)=>{
    // console.log(e.target);
    if(e.target.classList.contains('check')){
        e.target.nextElementSibling.classList.toggle('line');
    }

    else if(e.target.classList.contains('r-btn')){
        console.log(e.target.parentElement.remove());
    }
})