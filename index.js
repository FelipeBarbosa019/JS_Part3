const btn = document.querySelector ('#submit')
const text = document.querySelector ('h2')
let result

btn.addEventListener ("click", function(e) {
    e.preventDefault()
    const operando1 = parseFloat(document.getElementById ('operando1').value)
    const operando2 = parseFloat(document.getElementById ('operando2').value)
    const operador = document.getElementById ('operador').value

    if (operador === "soma") {
        result = operando1 + operando2
    text.textContent = `O resultado da operação é ${result}` 
    }
    else if (operador === "sub") {
        result = operando1 - operando2
        text.textContent = `O resultado da operação é ${result}`
    }
    else if (operador === "mult") {
        result = operando1 * operando2
        text.textContent = `O resultado da operação é ${result}`
    }
    else {
        result = operando1 / operando2
        text.textContent = `O resultado da operação é ${result}`
    }

});
