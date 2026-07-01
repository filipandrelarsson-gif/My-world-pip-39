const over = document.querySelector(".over");
const under = document.querySelector(".under");

over.addEventListener("click", randomizer)

function randomizer() {
    const random_vekt = Math.floor(Math.random() * 151)
    under.innerHTML = `${random_vekt} kg`
}