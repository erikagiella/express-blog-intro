const express = require('express');
const app = express();
const port = 3000;

//Start the server listner
app.listen(port, () => {
    console.log(`Server listening http://localhost:${port}`)
})

//Define your routes