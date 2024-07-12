//6. Introducción al filesystem

//write file

const fs = require("fs")

fs.writeFile("example.txt", "Hello, World!",(err, res) => {
    if(err){
        console.error(err)
        return
    }
    console.log("File Written successfully")
} )