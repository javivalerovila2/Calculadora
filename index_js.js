
//Funcion que vacia el contenido de la consola

const vaciar = () => {
    document.getElementById("pantalla").value = "";
  }

// Funcion rellenar info que indica si el resultado es <100 | >100 & <200 | >200

var rellenar_info = (num) => {
if (num < 100){
    document.getElementById("info").innerHTML = "Info: El resultado es menor que 100"
}
else if (num < 200){
    document.getElementById("info").innerHTML = "Info: El resultado está entre 100 y 200"
}
else if (num > 200){
    document.getElementById("info").innerHTML = "Info: El resultado es superior a 200"
}
}

//Funcion que calcula el cuadrado de un numero

var cuadrado = () => {
validar()
let num = document.getElementById("pantalla");
num.value = num.value * num.value;
rellenar_info(num.value)
}

//Funcion que calcula el cubo de un numero

var cubo = () => {
    validar()
let num = document.getElementById("pantalla");
num.value = num.value * num.value*num.value;
rellenar_info(num.value)
}

//Funcion que calcula el modulo de un numero, pero no lo entiendo, es valor abosoluto?
//Preguntar significado -- modulo == resto ?

var mod = () => {
    validar()
    let num = document.getElementById("pantalla");
if (num.value < 0) {
    num.value = -1 * num.value;
}
    rellenar_info(num.value)
    }

// //Funcion que calcula el factorial de un numero

var factorial = () => {
    validar()
let num = document.getElementById("pantalla");
let r = 1;
for(let i = num.value; i>0; i--){
    r *= i;
}
num.value = r
rellenar_info(num.value)
}


//Definimos variables globales
var numero = 1
var operador =""


//Funcion que calcula la suma de dos numeros introducidos

var add = () => {
    validar()
let num = document.getElementById("pantalla");
numero = num.value;
rellenar_info(num.value);
operador = "+"
vaciar()
}

//Funcion que calcula la multiplicacion entre dos numeros introducidos

var mul = () =>  {
    validar()
    let num = document.getElementById("pantalla");
    numero = num.value;
    rellenar_info(num.value);
    operador = "*"
    vaciar()
}

//Funcion que calcula la resta entre dos numeros introducidos

var resta = () =>  {
    validar()
    let num = document.getElementById("pantalla");
    numero = num.value;
    rellenar_info(num.value);
    operador = "-"
    vaciar()
    }

//Funcion que realiza una division entre dos numeros introducidos

var div = () =>  {
    validar()
    let num = document.getElementById("pantalla");
    numero = num.value;
    rellenar_info(num.value);
    operador = "/"
    vaciar()
    }

//Funcion que calcula el resto correspondiente entre dos numeros instroducidos

var resto = () =>  {
    validar()
    let num = document.getElementById("pantalla");
    numero = num.value;
    rellenar_info(num.value);
    operador = "%"
    vaciar()
    }

//Funcion que realiza la potencia de los numeros introducidos (base y exponente)

var potencia = () =>  {
    validar()
    let num = document.getElementById("pantalla");
    numero = num.value;
    rellenar_info(num.value);
    operador = "**"
    vaciar()
    }

//Funcion que hace uso de las variables globales para realizar la operacion correspondiente

var eq = () =>  {
let num = document.getElementById("pantalla");
if (operador == "-") {
    num.value = Number(numero) - Number(num.value)
    operador == ""
}
else if (operador == "*") {
    num.value = Number(numero) * Number(num.value)
    operador == ""

}
else if (operador == "+") {
    num.value = Number(numero) + Number(num.value)
    operador == ""
}
else if (operador == "/") {
    num.value = Number(numero) / Number(num.value)
    operador == ""
}
else if (operador == "%") {
    num.value = Number(numero) % Number(num.value)
    operador == ""
}
else if (operador == "**") {
    num.value = Number(numero) ** Number(num.value)
    operador == ""
}
}

//Funcion que realiza el sumatorio la lista de numeros

var sumatorio = () =>  {
    validar_lista()
    let num = document.getElementById("pantalla");
    let list = num.value.split(",");

    let i = 0, acc = 0;
    while (i < list.length) acc += +list[i++];

    num.value = acc;
  }

//Funcion que ordena la lista de numeros

var ordenar = () => {
    validar_lista()

    let num = document.getElementById("pantalla");
    let list = num.value.split(",");
    num.value = list.sort((a, b) => a - b)
}

//Funcion que ordena inversamente la lista de numeros

var revertir = () => {
    validar_lista()

    let num = document.getElementById("pantalla");
    let list = num.value.split(",");
    num.value = list.reverse()
}

//Funcion que elimina el ultimo dato de la lista de numeros

var quitar = () => {
    validar_lista()

    let num = document.getElementById("pantalla");
    let list = num.value.split(",");
    list = list.splice(0, list.length-1)
    num.value = list
}


//Excepciones

// Validamos si el dato introducido es un numero

var validar = () => {
let num = document.getElementById("pantalla");
const message = document.getElementById("p01");
  message.innerHTML = "";
try {
    if(isNaN(num.value)) throw "Error al introducir los datos. Vuelva a intentarlo";
    num.value = Number(num.value)
  }
  catch(err) {
    message.innerHTML =  err
}
}


var validar_lista = () => {
let num = document.getElementById("pantalla");
const message = document.getElementById("p01");
message.innerHTML = "";
let list = num.value.split(",");
for (let i of list) {
    try {         //Podria poner la funcion validar, ganaria eficiencia??
        if(isNaN(i)) throw "Error al introducir los datos. Vuelva a intentarlo";
        i = Number(i)
        }
        catch(err) {
        message.innerHTML =  err
    }
}

}