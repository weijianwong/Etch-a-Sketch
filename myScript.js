// create n x n grid of divs using javascipt


function createGrid(n){
    let container = document.createElement('div');
    container.classList.add('grid');
    if (n > 100){
        alert('Please choose a number below 100');
        return;
    }
    for(let i=0;i<n;i++){

        for(let j=0;j<n;j++){
            let div = document.createElement('div');
            div.style.display = 'inline-block';
            div.textContent='.'
            container.appendChild(div);
            div.addEventListener('mouseover', function () {
                div.style.backgroundColor = 'black';
            })
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
    if (document.body.contains(document.querySelector('.grid'))) {
        document.body.removeChild(document.querySelector('.grid'));
    };
    number = prompt('Choose a value of n. This will create a grid of n x n size');
    createGrid(number);
})


