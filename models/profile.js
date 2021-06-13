const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const profileSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    factories: [
        {
            type: Schema.Types.ObjectId,
            ref: "Factory"
        },
    ]
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;