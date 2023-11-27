// functionality

const btnConvert = document.querySelector('[data-convert]')

let input = document.querySelector('[data-hex]')

let output = document.querySelector('[data-res]')

function convert() {
    let r = parseInt(input.value.slice(0,2), 16)
    let g = parseInt(input.value.slice(2,4), 16)
    let b = parseInt(input.value.slice(4,input.value.length), 16)
    output.textContent = `RGB: (${r}, ${g}, ${b})`
}
btnConvert.addEventListener('click', convert)