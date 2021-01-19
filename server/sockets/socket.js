const {io} = require ('../server')


io.on('connection', (client) => {
    console.log( 'Usuario Conectado' );

    client.on('disconnect', () => {
        console.log( 'Usuario Desconectado' )
    });

    client.emit('enviarMensaje', {
        usuario: 'Adan',
        mensaje:'Hola desde el Servidor Perros'
    });

    client.on('enviarMensaje', (data, callback) => {

        console.log(data)


        client.broadcast.emit('enviarMensaje', data )
//
//         if(mensaje.usuario) {
//             callback({
//                 resp: 'TODO OK'
//             })
//         } else {
//             callback({
//                 resp:'Todo MAL !!!!!!!! '
//             })
//         }
    })

});