const express = require('express') 
const app = express();
const PORT = 8080;

app.use(express.json())

app.listen(
    PORT,
    () => console.log(` its's alive on http://localhost:${PORT}`)
)

app.get('/tacocombo', (req, res) => {
    res.status(200).send ({
        taco: 'Taco Combo 1',
        price: '10'
        })
});

app.post('/tacocombo/:id', (req, res) => {

    const { id } = req.params;
    const {price} = req.body;

    if (!price) {
        res.status(418).send({ message: 'You need to order something to get points!'})
    }

    res.send({
        tacocombo1:`${price} and ID of ${id}`,
    });

});


