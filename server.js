// Server Side

// Imports
const net = require('net');
const { randomUUID } = require('crypto')
const readline = require('readline')


// Create a readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Callback function for when the client connects
const handleCreateServer = (socket) => {
    const id = randomUUID();

    socket.write(`Welcome to the server ${id}`);

    // Callback function for when the client sends data
    socket.on('data', data => {
        console.log(`${id}: ${String(data)}`);
    })

    // Callback function when server write data to client
    rl.on('line', line => {
        socket.write(`Server say: ${line}`);
    })
}

// Create a server
const server = net.createServer(handleCreateServer)

// Listen on port 3000
server.listen(3000);