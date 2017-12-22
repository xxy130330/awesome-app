const express = require('express');
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 9000;

const app = express();

app.use(cors());

app.use(express.static(path.resolve(__dirname, 'client', 'dist')));


app.get('/api/get-stuff', (req, res) => {
    const stuff = {
        name: 'Stuffins',
        message: 'Here is some stuff'
    };

    res.send(stuff);

});


app.get('/api/better-stuff', (req, res) => {
    const betterStuff = {
        better: 'This is the real stuff',
        message: 'The best stuff'
    };

    res.send(betterStuff);
});






app.get('*', (req, res) => {
    res.send(path.resolve(__dirname, 'client', 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log('Server is running at localhost: ' + PORT);
});





