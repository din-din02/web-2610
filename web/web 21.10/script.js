let main = document.getElementById('main');
let text = document.getElementsByClassName('text');
let button = document.getElementById('button');

// console.log(main);
// console.log(text);
// console.log(button);

let div = document.querySelector('div');
let text2 = document.querySelectorAll('.text');
let link = document.querySelector('#link');

// console.log(div);
// console.log(text2);
// console.log(link);

let f = main.innerHTML;
let s = main.innerText;
let t = main.textContent;

// console.log(f);
// console.log(s);
// console.log(t);

let newElement = document.createElement('p');
newElement.textContent = 'new element';
main.append(newElement);

newElement.classList.add('newClass');

newElement.style.background = 'black';
newElement.style.width = 'fit-content';

newElement.classList.remove('newClass');

newElement.setAttribute('id', 'newtext');


let textArray = Array.from(text);

// textArray.map(text => {
//     text.style.color = 'red';
// })

let moduleWindow = document.getElementById('module')
let closeButton = document.getElementById('close-button')

button.addEventListener('click', () => {
    moduleWindow.style.display = 'inherit';
    main.style.display = 'none';
    //moduleWindow.style.display = 'block';
})

closeButton.addEventListener('click', () => {
    main.style.display = 'block';
    moduleWindow.style.display = 'none';
})




