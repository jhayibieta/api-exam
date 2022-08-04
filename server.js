const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const blogsRoute  = require('./routes/blogs.js');
const { default: mongoose } = require('mongoose');

const PORT = 8080;
const url = 'mongodb://localhost/blogs';

mongoose.connect(url, {useNewUrlParser:true});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});


app.use(bodyParser.json());

app.use('/blogs', blogsRoute);


app.get('/', (req, res) => {
    res.status(200).json({
        status: "API is now currently working"
    });  
});

app.listen(PORT, () => console.log("Now listening to http://localhost:" + PORT + "."));


