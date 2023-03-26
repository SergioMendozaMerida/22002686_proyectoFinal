const{ipcRenderer, contextBridge} = require('electron')

contextBridge.exposeInMainWorld(
    'comunication',
    {
        inicioValido: (datos) => ipcRenderer.send('inicioValido', datos),
        inicioCorrecto: (callback) => ipcRenderer.on('inicioCorrecto', callback),
        //CREANDO EL CANAL SELECCIONAR ACTUALIZAR PARA PASAR LOS EVENTOS Y ARGUMENTOS
        seleccionActualizar: (datos) => ipcRenderer.send('seleccionActualizar', datos),
        //CREANDO EL CANAL PARA ENVIAR DATOS QUE ENVIO EL BOTÓN ACTUALIZAR AL MAIN 
        actualizarCorrecto: (callback) => ipcRenderer.on('actualizarCorrecto', callback),
        seleccionPedir: (datos) => ipcRenderer.send('seleccionPedir', datos),
        pedirCorrecto: (callback) => ipcRenderer.on('pedirCorrecto', callback)
        
    }
)
    
