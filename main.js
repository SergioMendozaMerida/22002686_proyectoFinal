const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path')

let ventanaInicio = null

function crearVentanaInicio(){
    ventanaInicio = new BrowserWindow({
        width: 400,
        height: 500,
        webPreferences:{
            preload: path.join(app.getAppPath(), 'preload.js')
        }
    })
    ventanaInicio.loadFile('inicio.html')
}

let ventanaProductos = null

function crearVentanaProductos(){
    ventanaProductos = new BrowserWindow({
        width: 1200,
        height: 780,
        webPreferences:{
            preload: path.join(app.getAppPath(), 'preload.js')
        }
    })
    ventanaProductos.loadFile('ventanaProductos.html')
}


let ventanaActualizar = null

//CREANDO LA VENTANA DONDE SE ACTUALIZARAN LOS PRODUCTOS
function crearVentanaActualizar(){
    ventanaActualizar = new BrowserWindow({
        width: 400,
        height: 500,
        webPreferences:{
            preload: path.join(app.getAppPath(), 'preload.js')
        }
    })
    ventanaActualizar.loadFile('actualizar.html')
}

let ventanaPedir = null

//CREANDO LA VENTANA DONDE SE ACTUALIZARAN LOS PRODUCTOS
function crearVentanaPedir(){
    ventanaPedir = new BrowserWindow({
        width: 400,
        height: 500,
        webPreferences:{
            preload: path.join(app.getAppPath(), 'preload.js')
        }
    })
    ventanaPedir.loadFile('pedir.html')
}

ipcMain.on('inicioValido', function(event,args){
    crearVentanaProductos()
    ventanaProductos.webContents.on('did-finish-load', function(){
        ventanaProductos.webContents.send('inicioCorrecto', 'Bienvenido '+args[0])//acá debería ponerse el nombre del usuario que ingresa
    })
})

//RECIBIENDO EL CLIC DEL BOTON ACTUALIZAR
ipcMain.on('seleccionActualizar', function(event,args){
    crearVentanaActualizar()
    //ENVIANDO LOS DATOS QUE TRAJO EL BOTON ACTUALIZAR, A LA VENTANA ACTUALIZAR
    ventanaActualizar.webContents.on('did-finish-load', function(){
        ventanaActualizar.webContents.send('actualizarCorrecto', args)
    })
})

ipcMain.on('seleccionPedir', function(event,args){
    crearVentanaPedir()
    //ENVIANDO LOS DATOS QUE TRAJO EL BOTON ACTUALIZAR, A LA VENTANA PEDIR
    ventanaPedir.webContents.on('did-finish-load', function(){
        ventanaPedir.webContents.send('pedirCorrecto', args)
    })
})

app.whenReady().then(crearVentanaInicio)