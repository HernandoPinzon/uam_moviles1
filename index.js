const EXPRESS = require("express");
const MONGOOSE = require("mongoose");
require("dotenv").config();
const APP = EXPRESS();
const PORT = 3000;

MONGOOSE.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log('FALLO'));

APP.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
