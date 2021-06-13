const mongoose = require("mongoose");
const Profile = require("./profile");

const Schema = mongoose.Schema;

const factorySchema = new Schema({
    name: {
        type: String,
        required: "Enter a name.",
    },
    minValue: {
        type: Number,
        required: "Enter a min value.",
    },
    maxValue: {
        type: Number,
        required: "Enter a max value.",
    },
    numbers: {
        type: Array,
    },
    profile: {
        type: Schema.Types.ObjectId,
        ref: Profile,
        required: true,
    }
});

const Factory = mongoose.model("Factory", factorySchema);

module.exports = Factory;