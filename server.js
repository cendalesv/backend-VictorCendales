import express, { request, response } from "express";
import "dotenv/config.js"
const server = express()

const PORT = process.env.PORT || 8080

const ready = ()=> console.log("server ready in port : "+PORT);

//server.listen(PORT,ready)

server.get('/',(request,response) =>{
    response.send('Hola mundo en Express')
})

server.get('/',(request,response) =>{
    response.send('Hola mundo en Express')
})

//console.log(process.env.PORT);

server.listen(PORT,ready)






