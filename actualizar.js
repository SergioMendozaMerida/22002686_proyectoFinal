var formularioActualizar = document.getElementById('form-actualizar')
var codigo = document.getElementById('codigo')
var nombre = document.getElementById('nombre')
var descripcion = document.getElementById('descripcion')
var categoria = document.getElementById('categoria')
var existencia = document.getElementById('existencia')
var botonConfirmar = document.getElementById('boton-confirmar')

window.comunication.actualizarCorrecto(function(event, args){
    codigo.value = args[0]
    nombre.value = args[1]
    descripcion.value = args[2]
    categoria.value = args[3]
    existencia.value = args[4]
})

formularioActualizar.addEventListener('submit', function(){
    alert('ha actualizado el producto')
    window.comunication.actualizar([codigo.value,nombre.value,descripcion.value,categoria.value,existencia.value,codigo.value])
    window.close()
})