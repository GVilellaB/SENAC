document.querySelector('#calcular').addEventListener('click', e => {
    let sal = document.querySelector('#salario').value;

    let reajuste = 0;
    if (sal < 500) {
        reajuste = sal *1.15
    }
    else if (sal >= 500 && sal <= 1000) {
        reajuste = sal *1.10
    }
    else {
        reajuste = sal *1.05
    }

    document.querySelector('#reajustado').innerHTML = reajuste.toFixed(2);
})

