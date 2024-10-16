import './style.css'

const body = document.querySelector("body");
const container = document.createElement("div")
const h2 = document.createElement("h2");
const p = document.createElement("p");
const ul = document.createElement("ul");
const botones = document.createElement("div");
const btnPrevius = document.createElement("button");
const btnNext = document.createElement("button");

const textTitulo = "Quiz Question"
const preguntas = [
    {
        pregunta: "What is the capital of France?",
        respuestas: ["London", "Berlin", "Paris", "Madrid"],
        seleccion: null
    },
    {
        pregunta: "What is the longest river in the world?",
        respuestas: ["Amazonas", "Nilo", "Yangtsé", "Miño"],
        seleccion: null
    },
    {
        pregunta: "Who wrote Romeo and Juliet?",
        respuestas: ["Jane Austen", "Cervantes", "William Shakerpeare", "Charles Dickens"],
        seleccion: null
    },
    {
        pregunta: "How many planets are there in our solar system?",
        respuestas:  ["7", "8", "9", "10"],
        seleccion: null
    }
]
const textBtnPrevius = "Previus"
const textBtnNext = "Next"

let cambiarPregunta = (text) => {

    (text === textBtnNext) ? numPregunta++ : numPregunta--;

    btnPrevius.disabled = numPregunta <= 0;
    btnNext.disabled = numPregunta >= preguntas.length - 1;

    ul.innerHTML = '';
    cambiarRespuestas(preguntas, numPregunta)
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
    
    if(respuesta.textContent != preguntas[numPregunta].seleccion){
        
        if(preguntas[numPregunta].seleccion != null){
            let idBoton = preguntas[numPregunta].seleccion.replace(/ /g, '-');
            const btnAnteriorSeleccion = body.querySelector("#btn-" + idBoton)
            btnAnteriorSeleccion.style.removeProperty("background-color");
        }

        preguntas[numPregunta].seleccion = respuesta.textContent
        respuesta.style.backgroundColor = "#3CB371"
    }

}

let numPregunta = 0

container.classList.add("container")

h2.textContent = textTitulo
container.appendChild(h2)

container.appendChild(p)

ul.classList.add("container-answers");
container.appendChild(ul)

cambiarRespuestas(preguntas, numPregunta);

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

container.appendChild(botones)

body.appendChild(container)
