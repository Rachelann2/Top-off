const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    first_and_last_name: {
        type: String,
        require: true
    },
    meal: {
        type: String,
        require: true
    },
    dietary_restrictions: {
        type: String,
        require: true
    },
    special_requests: {
        type: String,
        require: false
    }
});

const Orders = mongoose.model("Orders", orderSchema);

module.exports = Orders;