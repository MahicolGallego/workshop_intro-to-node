//3. import vs require: ¿Cuál es la diferencia?

const fs = require("fs");

fs.readFile("example.txt", "utf8", (err, data) => {
	if(err){
		console.error(err);
		return
	}

	console.log(data)
});
