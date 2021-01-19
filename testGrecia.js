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
        console.log(data.toString())
        while(i<4){
            console.log(data[i])
            i++
        }
        
        const payload = {
            info: data.toString()
        }
        res.send(payload)
    })
})
