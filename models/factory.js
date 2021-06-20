const mongoose = require("mongoose");
const Profile = require("./profile");

const Schema = mongoose.Schema;

const factorySchema = new Schema({
    name: {
        type: String,
        required: "Enter a name.",
        default: "Factory Name",
    },
    minValue: {
        type: Number,
        required: "Enter a min value.",
        default: 1,
    },
    maxValue: {
        type: Number,
        required: "Enter a max value.",
        default: 10,
    },
    numbers: {
        type: Array,
        default: [],
    },
    // profile: {
    //     type: Schema.Types.ObjectId,
    //     ref: Profile,
    //     required: true,
    // }
});

const Factory = mongoose.model("Factory", factorySchema);

module.exports = Factory;