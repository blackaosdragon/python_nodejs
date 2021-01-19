const http = require('http');
//const axios = require('axios');
const fetch = require('node-fetch')
const direccion = '192.168.1.77'
const puerto = 3001
const end_point = '/'
const url = "http://192.168.0.11:3001/"

fetch(url).then(response=>{
    console.log("Recibe el json")
    return response.json()
})
.then( data => {console.log(data)})
.catch( e => console.log(e))


