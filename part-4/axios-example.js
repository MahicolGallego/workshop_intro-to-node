//4. Manejo de Paquetes con npm

const axios = require("axios");

axios
   .get("https://jsonplaceholder.typicode.com/posts")
   .then((response) => console.log(response.data))
   .catch((error) => console.error(error));
