var encabezado = document.getElementById('encabezado')
var tablaProductos = document.getElementById('tabla-productos')
let botonesActualizar = []
let botonesPedir = []
//PRODUCTOS EN FORMATO JSON
let productos = [
    {codigo: '1', nombre: 'Frijoles', descripcion: 'Frijoles en lata', categoria: 'Alimentos', existencia: 25},
    {codigo: '2', nombre: 'Chiles', descripcion: 'Chiles en rajas', categoria: 'Alimentos', existencia: 50},
    {codigo: '3', nombre: 'Galletas', descripcion: 'Galletas oreo', categoria: 'Alimentos', existencia: 73}
]

window.comunication.inicioCorrecto(function(event, args){
    encabezado.innerHTML = args
})

window.addEventListener('load', function(evento){
    evento.preventDefault()
    //CREANDO LA TABLA
    for (let i = 0; i < productos.length; i++) {
        tablaProductos.innerHTML += '<tr><td class=\'celda\'>'+productos[i].codigo+'</td>'+
            '<td class=\'celda\'>'+productos[i].nombre+'</td>'+
            '<td class=\'celda\'>'+productos[i].descripcion+'</td>'+
            '<td class=\'celda\'>'+productos[i].categoria+'</td>'+
            '<td class=\'celda\'>'+productos[i].existencia+'</td></td>'+
            //AGREGANDO LOS BOTONES EN LA ULTIMA COLUMNA
            '<td><button id=\'bAct'+[i]+'\' class=\'btnAct\'>Actualizar</button>'+' '+'<button  id=\'bPed'+[i]+'\' class=\'btnPed\'>Pedir</button></td></tr>'
                    
        }
        //OBTENIENDO CADA UNO DE LOS BOTONES EN UN ARREGLO
        for (let i = 0; i < productos.length; i++) {
            botonesActualizar[i] = document.getElementById('bAct'+i)
            botonesPedir[i] = document.getElementById('bPed'+i)
            //AGREGANDOLES UN EVENTO CLICK A CADA UNO DE LOS BOTONES
            botonesActualizar[i].addEventListener('click', function(evento){
                evento.preventDefault()
                window.comunication.seleccionActualizar([productos[i].codigo, productos[i].nombre,
                    productos[i].descripcion, productos[i].categoria,productos[i].existencia])
            })
            botonesPedir[i].addEventListener('click', function(evento){
                evento.preventDefault()
                window.comunication.seleccionPedir([productos[i].codigo, productos[i].nombre])
            })
        }
    })
