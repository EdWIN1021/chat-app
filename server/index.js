const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("a user connect");
  socket.on("send", (socket) => {
    console.log(socket);
    io.emit(socket.receiver, { msg: socket.message });
  });
});

http.listen(8000, () => {
  console.log("sever start");
});
