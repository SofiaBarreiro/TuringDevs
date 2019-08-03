


class Calculadora {

    numeroA;
    numeroB;
    resultado;


    Suma() {
        if (isNaN(this.numeroA) || isNaN(this.numeroB)) {
            this.resultado = 'Alguno de los datos ingresados no es un número';
        } else {

            this.resultado = this.numeroA + this.numeroB;
        }
        return this.resultado;

    }

    Resta() {
        if (isNaN(this.numeroA) || isNaN(this.numeroB)) {
            this.resultado = 'Alguno de los datos ingresados no es un número';
        } else {
        this.resultado = this.numeroA - this.numeroB;
        }
        return this.resultado;
    }


}

function getNumbers() {
    var nuevaCalculadora = new Calculadora();
    var input1 = document.getElementById('inputN1').value;
    var input2 = document.getElementById('inputN2').value;
    nuevaCalculadora.numeroA = parseInt(input1);
    nuevaCalculadora.numeroB = parseInt(input2);
    return nuevaCalculadora;

}

function limpiar(){

    document.getElementById('inputN1').value = '';
    document.getElementById('inputN2').value = '';

}

var botonSumar = document.getElementById('botonSumar');

botonSumar.addEventListener('click', function (load) {
    load.preventDefault();
    var nuevaCalculadora = getNumbers();
    nuevaCalculadora.Suma();
    alert(nuevaCalculadora.resultado);
    limpiar();
});

var botonRestar = document.getElementById('botonRestar');
botonRestar.addEventListener('click', function (load) {
    load.preventDefault();
    var nuevaCalculadora = getNumbers();
    nuevaCalculadora.Resta();
    alert(nuevaCalculadora.resultado);
    limpiar();  
});





