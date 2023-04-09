const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path')
const mysql = require('mysql2')

var limite
var usuarios
var productos
var proveedores
var error

//creando la conexion a base de datos
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'CerjioCerjio',
    database: 'proyectofinal'
})
//querty para obtener datos de usuarios
conexion.query(
    'SELECT * FROM usuarios',
        function(err, result, fields){
            if(err){
                error = err
            }else{
                usuarios = result
            }
        }
)

conexion.query(
    'SELECT * FROM inventario',
        function(err, result, fields){
            if(err){
                error = err
            }else{
                productos = result
            }
        }
)

conexion.query(
    'SELECT * FROM proveedores',
        function(err, result, fields){
            if(err){
                error = err
            }else{
                proveedores = result
            }
        }
)


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
    var contador = 0
    
        for (let i = 0; i < usuarios.length; i++) {
            if(args[0] == usuarios[i].idLog && args[1] == usuarios[i].pass){
                crearVentanaProductos()
                ventanaProductos.webContents.on('did-finish-load', function(){
                    ventanaProductos.webContents.send('enviarProductos', productos)
                    ventanaInicio.webContents.send('inicioCorrecto', 'cerrar')
                    ventanaProductos.webContents.send('inicioCorrecto', 'Bienvenido '+ usuarios[i].nombre)               
                })
                
                break
            }else{
                contador+=1
            }
        }
        if(contador == usuarios.length){
            ventanaInicio.webContents.send('inicioCorrecto', 'Usuario o Contraseña Incorrectos')          
        }
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
        ventanaPedir.webContents.send('enviarProveedores', proveedores)
    })
})

ipcMain.on('actualizar', function(event,args){
    conexion.promise().execute('UPDATE inventario SET idProducto = ?, nombre = ?, descripcion = ?,'+
    ' categoria = ?, existencia = ? WHERE idProducto = ?',
    args)
})

ipcMain.on('realizarPedido', function(event,args){
    conexion.promise().execute('INSERT INTO pedidos VALUES (?,?,?,?)', args)
    
})

app.whenReady().then(crearVentanaInicio)