import './style.css'

const body = document.querySelector("body");
const container = document.createElement("div")
const h2 = document.createElement("h2");
const p = document.createElement("p");
const ul = document.createElement("ul");
const botones = document.createElement("div");
const btnPrevius = document.createElement("button");
const btnNext = document.createElement("button");

const respuestas = ["London", "Berlin", "Paris", "Madrid"]

const textTitulo = "Quiz Question"
const textSubtitulo = "What is the capital of France?"
const textBtnPrevius = "Previus"
const textBtnNext = "Next"


container.classList.add("container")

h2.textContent = textTitulo
container.appendChild(h2)

p.textContent = textSubtitulo
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
btnPrevius.textContent = textBtnPrevius
botones.appendChild(btnPrevius)

btnNext.classList.add("footer-btn")
btnNext.textContent = textBtnNext
botones.appendChild(btnNext)

container.appendChild(botones)

body.appendChild(container)
