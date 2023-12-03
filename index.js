const express = require('express')
const app = express();

const http = require("http");

const {addUser,removeUser,getUser,getUsersInRoom} = require('./users.js')
const {Server} = require('socket.io')
const cors = require("cors")
app.use(cors())
const server = http.createServer(app)
const userList = new Set()
const io = new Server(server, {
    cors:{
        origin:"https://christian-chats.online/",
        methods:["GET","POST"],
    }
})


io.on("connection",(socket)=>{
   //console.log(`User Connected:${socket.id}`)
 //  socket.on("send_message",(data)=>{
  //  console.log(data.username)
  //  socket.broadcast.emit("receive message", data)
    
    socket.on("connected",(data)=>{
      // console.log(`User Connected:${socket.id}`)
     userList.add(data)
          console.log(userList)

   })
     console.log(userList)

   socket.on('disconnect', ()=>{

   })
   })
 //  socket.on("users",(data)=>{
  //  socket.emit("users",data.username)

  // })
 



   

server.listen(3001,()=>{
    console.log("Server is running")
})