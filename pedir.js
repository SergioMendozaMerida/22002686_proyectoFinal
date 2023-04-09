var formularioPedir = document.getElementById('form-pedir')
var codigo = document.getElementById('codigo')
var nombre = document.getElementById('nombre')
var proveedor = document.getElementById('proveedor')
var cantidad = document.getElementById('cantidad')
var botonConfirmar = document.getElementById('boton-confirmar')
var desplegable = document.getElementById('desplegable')
var proveedorSeleccionado

/*desplegable.addEventListener('change', function(){
    proveedorSeleccionado = this.options[proveedor.selectedIndex]
})*/

proveedores = []

window.comunication.enviarProveedores(function(event,args){
    console.log(args)
    proveedores = args
})

window.comunication.pedirCorrecto(function(event, args){
    codigo.value = args[0]
    nombre.value = args[1]    
})

setTimeout(menuDesplegable,1000)

function menuDesplegable() {

    for (let i = 0; i < proveedores.length; i++) {
        desplegable.innerHTML += '<option value="'+i+'" id="desplegable">'+proveedores[i].nombre+'</option>'
    }

}

formularioPedir.addEventListener('submit', function(evento){
    alert('El pedidio se ha realizado')

    evento.preventDefault()
    
    window.comunication.realizarPedido([codigo.value,nombre.value,cantidad.value,desplegable.options[desplegable.selectedIndex].text])
    window.close()
})

