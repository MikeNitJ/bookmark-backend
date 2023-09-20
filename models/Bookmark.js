const mongoose = require("../db/Connection");

const bookmarkSchema = new mongoose.Schema({
    title: String,
    url: String
});

const Bookmark = mongoose.model('Bookmark', bookmarkSchema);

module.exports= Bookmark;