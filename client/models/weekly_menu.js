const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const menuSchema = new Schema({
    Monday: {
        type: String,
        require: true
    },
    Tuesday: {
        type: String,
        require: true
    },
    Wednesday: {
        type: String,
        require: true
    },
    Thursday: {
        type: String,
        require: true
    },
    Friday: {
        type: String,
        require: true
    },
    Sat_Sun: {
        type: String,
        require: false
    }
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;