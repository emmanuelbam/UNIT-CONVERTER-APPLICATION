let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("inpute-el")
let lengthInput = document.getElementById("length-input")
let volumeInput = document.getElementById("volume-input")
let massInput = document.getElementById("mass-input")


const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value.

    lengthEl.textcontent = `${baseValue} meter = ${baseValue * meterToFeet} feet`;

    volumeInput.textContent = `${baseValue} Liters = ${baseValue * literToGallon} Gallons`;

    massInput.textContent = `${baseValue} Kilograms = ${kiloToPound} pound`;

    return baseValue
})
