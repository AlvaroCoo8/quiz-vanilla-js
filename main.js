import './style.css'
import * as domHelper from "./domHelper";
import * as mockData from "./mockData";

const body = document.querySelector("body");
const container = document.createElement("div")
const h2 = document.createElement("h2");
const p = document.createElement("p");
const ul = document.createElement("ul");
const botones = document.createElement("div");
const btnPrevius = document.createElement("button");
const btnNext = document.createElement("button");
const btnCheck = document.createElement("button");

const textTitulo = "Quiz Question"
const textBtnPrevius = "Previus"
const textBtnNext = "Next"
const textBtnCheck = "Check"

let cambiarPregunta = (text) => {

    (text === textBtnNext) ? numPregunta++ : numPregunta--;

    btnPrevius.disabled = numPregunta <= 0;
    btnNext.disabled = numPregunta >= mockData.preguntas.length - 1;

    ul.innerHTML = '';
    cambiarRespuestas(mockData.preguntas, numPregunta)
}

let cambiarRespuestas = (preguntas, numPregunta) =>{

    p.textContent = preguntas[numPregunta].pregunta

    preguntas[numPregunta].respuestas.forEach(i => {
        let liResp = document.createElement("li")
        let btnResp = document.createElement("button")
    
        btnResp.classList.add("answer-btn")
        btnResp.textContent = i
        btnResp.id = "btn-" + i.replace(/ /g, '-');

        if(btnResp.textContent == preguntas[numPregunta].seleccion){
            btnResp.style.backgroundColor = "#3CB371"
        }

        btnResp.addEventListener("click", () => seleccionarRespuesta(btnResp))
        
        liResp.appendChild(btnResp)
        ul.appendChild(liResp)
    });
}

let seleccionarRespuesta = (respuesta) => {    
    
    if(respuesta.textContent != mockData.preguntas[numPregunta].seleccion){
        
        if(mockData.preguntas[numPregunta].seleccion != null){
            let idBoton = mockData.preguntas[numPregunta].seleccion.replace(/ /g, '-');
            const btnAnteriorSeleccion = body.querySelector("#btn-" + idBoton)
            btnAnteriorSeleccion.style.removeProperty("background-color");
        }
        
        mockData.preguntas[numPregunta].seleccion = respuesta.textContent
        respuesta.style.backgroundColor = "#3CB371"
    }
        
    let preguntasSeleccionadas = 0

    mockData.preguntas.forEach(element => {
        if(element.seleccion != null){
            preguntasSeleccionadas++;
        }
    });
    
    if(preguntasSeleccionadas == mockData.preguntas.length){
        btnCheck.disabled = false
    }

}

let comprobarRespuestas = (respuesta) => {    
    
    let aciertos = 0

    mockData.preguntas.forEach(element => {
        if(element.seleccion == element.respuestaCorrecta) 
            aciertos++;
    });

    let modal = domHelper.crearModal("Result", aciertos + " aciertos de " + mockData.preguntas.length);

    modal.style.visibility = "visible"  
    modal.style.opacity = 1
}


let numPregunta = 0

container.classList.add("container")

h2.textContent = textTitulo
container.appendChild(h2)

container.appendChild(p)

ul.classList.add("container-answers");
container.appendChild(ul)

cambiarRespuestas(mockData.preguntas, numPregunta);

botones.classList.add("container-footer")

btnPrevius.classList.add("footer-btn")
btnPrevius.disabled  = true
btnPrevius.textContent = textBtnPrevius
// btnPrevius.addEventListener("click", cambiarPregunta(textBtnPrevius))    // DE ESTA FORMA NOO, HAY QUE PONERLE LOS () =>
btnPrevius.addEventListener("click", () => cambiarPregunta(textBtnPrevius))
botones.appendChild(btnPrevius)

btnNext.classList.add("footer-btn")
btnNext.textContent = textBtnNext
// btnNext.addEventListener("click", cambiarPregunta(textBtnNext))      // DE ESTA FORMA NOO, HAY QUE PONERLE LOS () =>
btnNext.addEventListener("click", () => cambiarPregunta(textBtnNext))
botones.appendChild(btnNext)

btnCheck.classList.add("footer-btn")
btnCheck.disabled  = true
btnCheck.textContent = textBtnCheck
btnCheck.addEventListener("click", () => comprobarRespuestas())
botones.appendChild(btnCheck)

container.appendChild(botones)

body.appendChild(container)
