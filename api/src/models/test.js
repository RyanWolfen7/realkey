const mongoose = require("mongoose");
const { Schema } = mongoose;

const testSchema = new Schema({
    name: {
        type: String,
        trim: true
    }
});

const TEST = mongoose.model("TEST", testSchema);
module.exports = TEST ;
