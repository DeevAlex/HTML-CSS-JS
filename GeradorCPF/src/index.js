// Apenas mexer nesse index.js
// 2
// 3
import "./assets/CSS/style.css" // para importar o CSS


import geraCPF from "./modules/geraCPF"
import "./assets/CSS/style.css"

const btn_gerar = document.querySelector(".gerar")

btn_gerar.addEventListener("click", () => {
    (function () {
        const gera = new geraCPF()
        const resultado = document.querySelector(".resultado")
        resultado.innerHTML = gera.geraNovoCPF()
    })();
})