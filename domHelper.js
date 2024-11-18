export const crearModal = (tittle, text) => {

    const modal = document.createElement("div")
    modal.classList.add("modal")
    
    const modalContent = document.createElement("div")
    modalContent.classList.add("modal-content")
    
    const closeModalBtn = document.createElement("span")
    closeModalBtn.classList.add("modal-close")
    closeModalBtn.innerHTML = '&times;'
    modalContent.appendChild(closeModalBtn)
    
    closeModalBtn.addEventListener("click", function(){
        modal.style.visibility = "hidden";
        modal.style.opacity = "0";
    })
    
    const modalTitle = document.createElement("h2")
    modalTitle.textContent = tittle
    modalContent.appendChild(modalTitle)

    const modalHR = document.createElement("hr")
    modalContent.appendChild(modalHR)
    
    const modalParagraph = document.createElement("p")
    modalParagraph.textContent = text
    modalContent.appendChild(modalParagraph)
    
    modal.appendChild(modalContent)
    document.body.appendChild(modal)

    window.addEventListener("click", function(event){
        if (event.target === modal) {
            modal.style.visibility = "hidden";
            modal.style.opacity = "0";
        }
    })

    return modal;
}
