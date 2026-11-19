// 1.Buffer is a global class
// const data = Buffer.from('Hello Node');

// console.log(data);
// console.log(data.toString());

// 2.Buffer.alloc(size)
// const buf1 = Buffer.alloc(10);
// console.log(buf1);
// console.log(buf1.length);



// 3.Buffer.from()
// const textBuffer = Buffer.from("Hello");
// const arrayBuffer = Buffer.from([10, 20, 30]);

// console.log(textBuffer);
// console.log(arrayBuffer);


// 4.Buffer.allocUnsafe(size)

// const buf = Buffer.allocUnsafe(5);
// buf.fill(0);
// console.log(buf);
// console.log(buf.toString('utf8'));


// 5.Buffer.write(string, offset, length, encoding)
// const buf = Buffer.alloc(10);
// const bytesWritten = buf.write("Hello Praveen");

// console.log(bytesWritten);
// console.log(buf.toString());
// console.log(buf.length);

//6.Writing with an offset
// let buf = Buffer.allocUnsafe(10);
// buf.write("Hi hello", 2);

// console.log(buf);
// console.log(buf.toString());


// Reading data from a Buffer
// buf.toString([encoding][, start][, end]);
// const buf = Buffer.from(' "hello" ');

// console.log(buf.toString());
// console.log(buf.toString("utf8", 0, 4));
// console.log(buf.toString("utf8", 4));
// console.log(buf.length);
// let name = "Praveen";
// console.log(Buffer.isBuffer(buf));
// console.log(Buffer.isBuffer(name));



//copying data from one Buffer to another
// const source = Buffer.from("ABC");
// const target = Buffer.alloc(3);

// source.copy(target);
// console.log(target.toString());

// Subarray of a Buffer
// const buf = Buffer.from("Node.js");
// const part = buf.subarray(0, 4);

// console.log(part.toString()); // Node


//Join Buffers:

// const first = Buffer.from("Good ");
// const second = Buffer.from("Morning");

// const result = Buffer.concat([first, second]);
// console.log(result.toString()); // Good Morning


// Convert to JSON:
// const buf = Buffer.from("aBC");
// console.log(buf.toJSON());




// Buffer with the File System module

const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(data);           // Buffer output
    console.log(data.toString()); // Readable text
});
