var formulario = document.getElementById('form-inicio')
var idIngresado = document.getElementById('id-input')
var contrasenia = document.getElementById('pass-input')

formulario.addEventListener('submit', function(evento){
    evento.preventDefault()
    window.comunication.inicioValido([idIngresado.value, contrasenia.value])
    window.close()
})

window.comunication.inicioCorrecto(function(event, args){
    alert(args)
})