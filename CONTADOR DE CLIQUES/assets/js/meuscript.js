
let btn_add = document.querySelector(".btn-add")
let btn_remove = document.querySelector(".btn-remove")
let btn_reset = document.querySelector(".btn-reset")
let cliques = document.querySelector(".cliques")
let contador = 0
cliques.innerHTML = contador

if (localStorage.getItem("Cliques")) {
    contador = parseInt(localStorage.getItem("Cliques"));
    cliques.innerHTML = contador;
}

btn_add.addEventListener("click", () => {

    cliques.innerHTML = ++contador

    
    if (contador > 500000000) cliques.innerHTML = (contador = 500000000)
    
    localStorage.setItem("Cliques", contador)
})

window.addEventListener('keydown', function(event) {
    const key = event.key; // const {key} = event; ES6+
    if (key === "Backspace" || key === "Delete") {
        
        if (contador < 0) {
            cliques.innerHTML = 0
            contador = 0
            alert("O numero não pode ser mais decrementado")
            return
        }
        
        cliques.innerHTML = --contador
        localStorage.setItem("Cliques", contador)
        
    }

    if (key === "Enter") {
        cliques.innerHTML = ++contador

        
        if (contador > 500000000) {
            cliques.innerHTML = (contador = 500000000)
            alert('Você chegou no maximo, Parabens :D')
            return
        }

        localStorage.setItem("Cliques", contador)
    }

});

btn_remove.addEventListener("click", () => {

    cliques.innerHTML = --contador

    if (contador < 0) cliques.innerHTML = (contador = 0)
    
    localStorage.setItem("Cliques", contador)

})

btn_reset.addEventListener("click", () => {

    cliques.innerHTML = 0
    contador = 0 
    
    localStorage.clear('Cliques')

})