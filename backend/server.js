import express from "express"
import path from "path"
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
import { app,server,io } from "../frontend/src/socket/socket.js"
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve()

dotenv.config();

app.use(express.json())
app.use(cookieParser()); // Acces the cookies
 //  Оно разбирает JSON-строку в теле запроса и предоставляет доступ к ней через req.body.
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"),)
})
// app.get("/",(req,res)=>{
//     // root route https://localhost:5000/
//     res.send("Hello World!")
// })
server.listen(PORT,()=> {
    connectToMongoDB()
    console.log(`Server listening on ${PORT}`)
});