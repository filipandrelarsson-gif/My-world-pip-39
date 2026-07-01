const cm = document.querySelector(".height")
const kg = document.querySelector(".weight")
const bmi = document.querySelector(".bmi")


cm.addEventListener("change", bmicalc)
kg.addEventListener("change", bmicalc)

function bmicalc() {
    const kgcm = (Math.round(100*(kg.value / (0.01*cm.value)**2)))/100
    bmi.innerHTML = `${kgcm} bmi`

console.log("hei")
}