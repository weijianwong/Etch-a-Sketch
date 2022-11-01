// create 16X16 grid of divs using javascipt
let container = document.createElement('div');

for(let i=0;i<16;i++){

    for(let j=0;j<16;j++){
        let div = document.createElement('div');
        div.style.display = 'inline-block';
        div.textContent ='.';
        container.appendChild(div);


    }
    let lineBreak = document.createElement('br');
    container.appendChild(lineBreak);

}

document.body.appendChild(container);
console.log('hello')