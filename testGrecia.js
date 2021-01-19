const express = require('express')
const { spawn } = require('child_process')
//const spawn = require('child_process').spawn
const app = express();
const puerto = 3001
let i = 0;



app.listen( puerto , ()=>{
    console.log(`App escuchando por el puerto ${puerto}`)
})

app.get('/', (req,res) => {
    let process = spawn('python', ['./test_python.py']);
    process.stdout.on('data',function(data){
        let mensaje = data.toString()
        let enviar = '';

        console.log(mensaje.length)
        for (let i = 0; i<mensaje.length-1; i++){
            enviar[i] = mensaje[i]
            //console.log(enviar)
            //console.log(enviar[i])
        }
        console.log(enviar)

        const payload = {
            info: mensaje
        }

        res.send(payload)
    })
})
