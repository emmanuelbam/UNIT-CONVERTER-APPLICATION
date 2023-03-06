let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")


const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    console.log(lengthEl)

    lengthEl.textContent = `${baseValue} meters = ${baseValue * meterToFeet} feet `

    volumeEl.textContent = `${baseValue} Liters = ${baseValue * literToGallon} Gallons`;

    massEl.textContent = `${baseValue} Kilograms = ${kiloToPound} pound`;

    return baseValue
})
