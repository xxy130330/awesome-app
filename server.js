const express = require('express');
const PORT = process.env.PORT || 9000;

const app = express();

app.get('*', (req, res) => {
    res.send('<h1>Awesome app working!</h1>');
});

app.listen(PORT, () => {
    console.log('Server is running at localhost: ' + PORT);
});





