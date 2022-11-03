// create n x n grid of divs using javascipt
let container = document.querySelector('.grid');


function createGrid(n){
    // let container = document.createElement('div');
    // container.classList.add('grid');
    if (n > 100 || n <0|| isNaN(n)){
        alert('Please choose a number below 100');
        return;
    }
    for(let i=0;i<n;i++){

        for(let j=0;j<n;j++){
            let div = document.createElement('div');
            div.classList.add('cell');
            div.style.height = 400/n + 'px';
            div.style.width =400/n + 'px';
            container.appendChild(div);
            // div.addEventListener('mouseover', function () {
            //     div.style.backgroundColor = 'black';
            // })
        }
        let lineBreak = document.createElement('br');
        container.appendChild(lineBreak);
    
    }
    
    document.body.appendChild(container);

}

let number;

// reference the button and use it to change grid
let button = document.querySelector('.button');
button.addEventListener('click', () => {
    // Check if the document already has a grid, if it does remove it
    if(container.contains(document.querySelector('.cell'))){
        container.innerHTML = '';
    }
    let number = prompt('Please choose a number between 0 and 100')
    createGrid(number);
})

let blackBtn = document.querySelector('.black');
let cellList = document.getElementsByClassName('cell');
blackBtn.addEventListener('click', () =>{
    for(let i = 0; i<cellList.length;i++){
        cellList[i].addEventListener('mouseover', function () {
            cellList[i].style.backgroundColor = 'black';
        })
    }
})
let randomBtn = document.querySelector('.random');
randomBtn.addEventListener('click', function () {
    for(let i = 0; i<cellList.length;i++){
        cellList[i].addEventListener('mouseover', function () {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            cellList[i].style.backgroundColor = '#' + randomColor;
        })
    }
})