const express = require("express")
const http = require("http")
const app = express()
const server = http.createServer(app)
const socket=require("socket.io")
const cors=require("cors")
const ENV=require("dotenv")
ENV.config()

const io = require("socket.io")(server, {
	cors: {
		origin: "*",
		methods: [ "GET", "POST" ]
	}
})
//const io=socket(server)
console.log(io)
io.on("connection", (socket) => {
	console.log(socket.id)
	socket.emit("me", socket.id)
	console.log("user1",socket.id)
	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	})

	socket.on("callUser", (data) => {
		io.to(data.userToCall).emit("callUser", { signal: data.signalData, from: data.from, name: data.name })
	})

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	})
})
const PORT=process.env.PORT
server.listen(PORT,() => console.log("server running"))
