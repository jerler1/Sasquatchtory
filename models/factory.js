const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const factorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    minValue: {
        type: Number,
        required: true,
    },
    maxValue: {
        type: Number,
        required: true,
    },
    numbers: {
        type: Array,
    }
});

const Factory = mongoose.model("Factory", factorySchema);

module.exports = Factory;