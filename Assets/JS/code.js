function sumar() {
    let n = document.querySelector("#numero").value;
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i;
    }
    document.querySelector("#resultado").classList = "bg-success text-white w-100 rounded-2 p-2"
    document.querySelector("#resultado").innerHTML = "La suma de los números del 1 al " + n + " es: " + suma;

}

function validarNumero() {
    let numero = document.querySelector("#numeroUsuario").value, 
        p=document.querySelector("#resultado")
    console.log(numero)
    if (parseInt(numero) % 2 == 0) {
        p.classList = "w-100 p-2 rounded-2 bg-success text-white"
        p.innerHTML = numero + " Es un número par"
    } else {
        p.classList = "w-100 p-2 rounded-2 bg-danger text-white"
        p.innerHTML = numero + " Es un número impar"
    }
}

function informarPremio() {
    let edad = document.querySelector("#edad").value;
    let genero = document.querySelector("#genero").value;
    p=document.querySelector("#resultado")
    p.classList = ""
    if (edad < 10 && (genero = "hombre")) {
        p.classList = "w-100 p-2 text-white bg-success rounded-2"
        p.innerHTML = "Un jugo";
    } else if (genero === "hombre" && edad >=18) {
        p.classList = "w-100 p-2 text-white bg-success rounded-2"
        p.innerHTML = "una porción de pizza tres carnes y una cerveza"
    } else if (genero === "mujer" && edad >=18) {
        p.classList = "w-100 p-2 text-white bg-success rounded-2"
        p.innerHTML = "una porción de pizza Hawaiana y una cerveza"
    } else{
        p.classList = "w-100 p-2 text-white bg-danger rounded-2"
        p.innerHTML = "ningún premio.";
    }
    
}

let input= document.querySelector("#Plato"),
    btn_enviar= document.querySelector("#btn_enviar"),
    p = document.querySelector("#p"),
    arroz =parseInt(document.querySelector("#arroz").innerHTML),
    pasta =parseInt(document.querySelector("#pasta").innerHTML),
    tacos =parseInt(document.querySelector("#tacos").innerHTML),
    carne =parseInt(document.querySelector("#carne").innerHTML),
    burger =parseInt(document.querySelector("#burger").innerHTML),
    papas =parseInt(document.querySelector("#papas").innerHTML)
    precio =[arroz,pasta,tacos,carne,burger,papas],
    comida =["Arroz chino","Pasta con Champiñones","Tacos al Pastor","Carne a la parrilla","Hamburguesa doble con queso","Salchipapas"],
    total = [],
    suma = 0 

btn_enviar.addEventListener("click",(e)=>{
    e.preventDefault

    if (input.value !=="Pagar" && input.value !== "pagar") {
        for (let i = 0; i<comida.length; i++) {
            if (input.value === comida[i]) {
                total.push(precio[i])
                input.value=""
            }
        }
        console.log(total)

        for(let j= 0; j <total.length; j++){
            numero = total[j]
        }
        suma = suma + numero
        console.log(suma)
    }
    if (input.value ==="Pagar" || input.value === "pagar"){
        p.classList = "w-100 mt-2 rounded-2 bg-info text-white p-2"
        p.innerHTML = `El total de la cuenta es $${suma}`
    }
})


function multiplicar(){
    let dato = document.querySelector("#multiplo").value,
        tbody = document.querySelector("#tbody")

    for (let i =1; i <= 10; i++){
        tr = document.createElement("tr")
        tbody.appendChild(tr)
        resultado = dato * i 
        tr.innerHTML += `<td>${dato}</td><td>x</td><td>${i}</td><td>=</td><td>${resultado}</td>`
    }
}


function calcularMatricula(){
    let promedio = parseFloat(document.getElementById("promedio").value);
    let matricula = 1000000;
    let descuento = 0;
    if (promedio < 3) {
        descuento = 0;
    } else if (promedio >= 3 && promedio <= 4) {
        descuento = matricula * 0.05;
    } else {
        descuento = matricula * 0.5;
    }
    let precioFinal = matricula - descuento;

    document.getElementById("resultado").classList = 'w-100 p-2 bg-info rounded-2 text-white'
    document.getElementById("resultado").innerHTML = "El estudiante debe pagar $" + precioFinal + " por su matrícula";


}
