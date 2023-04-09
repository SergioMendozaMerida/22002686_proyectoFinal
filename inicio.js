var formulario = document.getElementById('form-inicio')
var idIngresado = document.getElementById('id-input')
var contrasenia = document.getElementById('pass-input')

formulario.addEventListener('submit', function(evento){
    evento.preventDefault()
    window.comunication.inicioValido([idIngresado.value, contrasenia.value])
})

window.comunication.inicioCorrecto(function(event, args){
    if(args == 'cerrar'){
        window.close()
    }else{
        formulario.innerHTML += '<br><br><label id="alerta">Usuario o contraseña no validos</label><br>'
    }
})