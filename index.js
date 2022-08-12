let express = require('express');
let mongoose = require('mongoose');
let user =require('./routes/users.js');
let app = express();
let cors = require('cors');
app.use(cors());
app.use(express.json());
let port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/user', {useNewUrlParser:true})
        .then(() => console.log('connected to the database'))
        .catch(err => console.log('something went wrong', err.message));

app.use('/api/users', user);
    app.listen(() => console.log(`port is working on ${port}`));