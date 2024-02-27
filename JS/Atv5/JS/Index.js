document.querySelector('#calcular').addEventListener('click', e => {
    document.querySelector('#val').innerHTML = '';
    let numero = document.querySelector('#numero').value;
    let x = 0;
for (let i=0; i <= 10; i++ ){
    x = numero * i
    document.querySelector('#val').innerHTML += `${i} * ${numero} = ${x}<br>`
    
}
document.querySelector('#numero').value = '';


for (let i=1; i <= 100; i++ ){
    if ( i%2 == 0){
        console.log(`${i}`)
    }
}

for (let t=1; t <= 100; t++ ){
    if ( t%2 != 0){
        console.log(`${t}`)
    }
}

})