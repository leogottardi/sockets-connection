// Client Side

// Imports
const net = require('net');
const readline = require('readline');

// Create a readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Open the client socket
const client = new net.Socket();


// Connects and callback function for when the client connects
client.connect(3000, () => {
    console.log("Connected")

    // Callback function for when the client sends data to server
    rl.on('line', (line) => {
        client.write(line);
    });

    // Callback function for when the server writes data to client
    client.on('data', (data) => {
        console.log(String(data))
    })
})