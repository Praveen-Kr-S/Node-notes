// const fs = require("fs");

// const readable = fs.createReadStream("input.txt");

// readable.on("data", (chunk) => {
//     console.log("Received a chunk:");
//     console.log(chunk.toString());
// });

// readable.on("end", () => {
//     console.log("Reading completed.");
// });

// readable.on("error", (err) => {
//     console.log("Error:", err.message);
// });


//2 . Write streams

// const fs = require("fs");

// const writable = fs.createWriteStream("out.txt");

// writable.write("Hello Students\n");
// writable.write("Welcome to Node.js Streams\n");

// writable.end();

// writable.on("finish", () => {
//     console.log("Writing completed.");
// });

// writable.on("error", (err) => {
//     console.log("Error:", err.message);
// });



// 3.duplex streams

// const net = require("net");

// const server = net.createServer(
//     (socket) => {
//         socket.write("Hello Mutheswaran\n");

//         socket.on("data",(data) => {
//             console.log("Received data:", data);
//             console.log("Received data:", data.toString());

//             socket.write("Proceess Completed\n");
//         })
//     }
// )

// server.listen(8080, () => {
//     console.log("Server listening on port 8080");
// }
// )


// 4. Transform
// const { Transform } = require("stream");

// const upperCaseStream = new Transform({
//     transform(chunk, encoding, callback) {
        
//         const result = chunk.toString().toLowerCase();
//         callback(null, result);
//     }
// });

// upperCaseStream.on("data", (chunk) => {
//     console.log(chunk.toString());
//     console.log(chunk);
    
// });

// upperCaseStream.write("hello node");
// upperCaseStream.end();




//copy file using streams

// const fs = require("fs");

// const readable = fs.createReadStream("input.txt");
// const writable = fs.createWriteStream("copy.txt");

// readable.pipe(writable);

// writable.on("finish", () => {
//     console.log("File copied successfully!");
// });




const fs = require("fs");

const source = fs.createReadStream("input.txt");
const destination = fs.createWriteStream("ot.txt");

source.on("error", (err) => {
    console.log("Read error:", err.message);
});
destination.on("error", (err) => {
    console.log("Write error:", err.message);
});

destination.on("finish", () => {
    console.log("Copy completed!");
});

source.pipe(destination);

