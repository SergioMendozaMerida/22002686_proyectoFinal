var formularioPedir = document.getElementById('form-pedir')
var codigo = document.getElementById('codigo')
var nombre = document.getElementById('nombre')
var proveedor = document.getElementById('proveedor')
var cantidad = document.getElementById('cantidad')
var botonConfirmar = document.getElementById('boton-confirmar')
var desplegable = document.getElementById('desplegable')

proveedores = [
    {nombre: '--Seleccione'},
    {nombre: 'Los Pinos'},
    {nombre: 'CONFIT'},
    {nombre: 'ASORF'},
]

window.comunication.pedirCorrecto(function(event, args){
    codigo.value = args[0]
    nombre.value = args[1]    
})

menuDesplegable()

function menuDesplegable() {

    for (let i = 0; i < proveedores.length; i++) {
        desplegable.innerHTML += '<option value="'+i+'" id="desplegable">'+proveedores[i].nombre+'</option>'
    }

}

formularioPedir.addEventListener('submit', function(){
    alert('El pedidio se ha realizado')
    window.close()
})