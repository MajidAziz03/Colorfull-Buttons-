const generateRandColor = () => {
    const r = Math.floor(Math.random() * 255 );
    const g= Math.floor(Math.random() * 255 );
    const b = Math.floor(Math.random() * 255 );
    return `rgb(${r}, ${g}, ${b})`

}

const buttons = document.querySelectorAll('button')
for ( let btn of buttons){
    btn.addEventListener('click',()=>
    {
        btn.style.backgroundColor = generateRandColor();
    })

}