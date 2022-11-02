// create n x n grid of divs using javascipt
let container = document.querySelector('.grid');

function createGrid(n){
    // let container = document.createElement('div');
    // container.classList.add('grid');
    if (n > 100){
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
            div.addEventListener('mouseover', function () {
                div.style.backgroundColor = 'black';
            })
        }
        let lineBreak = document.createElement('br');
        lineBreak.style.content ='';
        lineBreak.style.margin = 0;
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
    number = prompt('Resolution');
    createGrid(number);
})


