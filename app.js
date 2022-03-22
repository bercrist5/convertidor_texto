var btnMayus = document.getElementById("btnMayus");
var btnMinus = document.getElementById("btnMinus");
var btnCuantos = document.getElementById("btnCuantos");

var texto = document.getElementById("input").value;
var resultado = document.getElementById("h4");


btnMayus.addEventListener("click", () => {
    let mayusculas = texto.toUpperCase()
    resultado.innerHTML = mayusculas
})

btnMinus.addEventListener("click", () => {
    let mayusculas = texto.toLowerCase()
    resultado.innerHTML = mayusculas
})

btnCuantos.addEventListener("click", () => {
    let cuantos = texto.length
    resultado.innerHTML = "La cadena tiene "+ cuantos+" caracteres"  
})