import { io, Socket } from "socket.io-client";


interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
  hello: () => void;
}

interface InterServerEvents {
  ping: () => void;
}

interface SocketData {
  name: string;
  age: number;
}

// please note that the types are reversed
const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io('http://127.0.0.1:8081');
// const hostAddress = document.location.hostname;
// console.log(`http://${hostAddress}:8081`);
// const wsApi = io(`http://${hostAddress}:8081`);
const oscConfig = {
  server: {
    port: 9000,
    host: '127.0.0.1'
  },
  client: {
    port: 9001,
    host: '127.0.0.1'
  }
};

socket.on('connect', function() {
  socket.emit('config', oscConfig);
});

socket.on('message', function(obj) {
  const status = document.querySelector('header__file-name');
  if (status) {
    status.innerHTML = obj[0];
  }
  console.log(obj);
});


