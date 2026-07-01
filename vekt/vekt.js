const over = document.querySelector(".over");
const under = document.querySelector(".under");



over.addEventListener("click", randomizer)

function randomizer() {
    const random_vekt = Math.floor(Math.random() * 151) // Gir random heltall fra 0 til 150
    under.innerHTML = `${random_vekt} kg` // I elementet "under", display verdien til variabel random_vekt og skriv kg ved siden av
}
