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
const textPreguntas = ["What is the capital of France?", "What is the longest river in the world?", "Who wrote Romeo and Juliet?", "How many planets are there in our solar system?"]
const respuestas = ["London", "Berlin", "Paris", "Madrid"]
const textBtnPrevius = "Previus"
const textBtnNext = "Next"

let cambiarPregunta = (text) => {

    // numPregunta = (text === textBtnNext) ? numPregunta + 1 : numPregunta - 1;
    (text === textBtnNext) ? numPregunta++ : numPregunta--;

    btnPrevius.disabled = numPregunta <= 0;
    btnNext.disabled = numPregunta >= textPreguntas.length - 1;

    p.textContent = textPreguntas[numPregunta];
    console.log("Num pregunta: " + numPregunta);
}

let numPregunta = 0

container.classList.add("container")

h2.textContent = textTitulo
container.appendChild(h2)

p.textContent = textPreguntas[numPregunta]
container.appendChild(p)

ul.classList.add("container-answers");
container.appendChild(ul)

respuestas.forEach(i => {
    let liResp = document.createElement("li")
    let btnResp = document.createElement("button")

    btnResp.classList.add("answer-btn")
    btnResp.textContent = i
    
    liResp.appendChild(btnResp)
    ul.appendChild(liResp)
});

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
