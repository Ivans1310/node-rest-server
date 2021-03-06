const port = require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
// the .use are middlewares that enconde each request 
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/usuario', function(req, res) {
    res.json('Get usuario');
})

app.post('/usuario', function(req, res) {

    let body = req.body;

    if (body.nombre === undefined) {
        //400 Bad Request
        res.status(400).json({
            ok: false,
            message: "The name is required"
        });

    } else {
        res.json({
            persona: body
        });

    }

})

app.post('/usuario/:id', function(req, res) {

    let id = req.params.id;
    res.json({
        id
    });
})

app.put('/usuario', function(req, res) {
    res.json('Put usuario');
})

app.delete('/usuario', function(req, res) {
    res.json('Delete usuario');
})

app.listen(port.PORT, () => {
    console.log('Escuchando puerto ', port.PORT);
})