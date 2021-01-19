var socket = io();
socket.on('connect', function () {
    console.log('Conectado')
});
// on - escuchar eventos
socket.on('disconnect', function () {
    console.log('Perdimos Conexion con el Servidor')
});


// emit - enviar info
socket.emit('enviarMensaje', {
    usuario: 'Adan',
    mensaje:'Hola Perros'
}, function(resp) {
    console.log('respuesta server:',resp)
});

socket.on('enviarMensaje', function (mensaje) {
    console.log('Servidor:', mensaje)
});
