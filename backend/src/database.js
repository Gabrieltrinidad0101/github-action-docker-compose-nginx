const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/hexagonalApp")
    .then(_=> console.log("db is connected"))
    .catch(error => console.error(error))