const mongoose = require('mongoose');

mongoose.connect("mongodb://mongodb:27018/hexagonalApp")
    .then(_=> console.log("db is connected"))
    .catch(error => console.error(error))