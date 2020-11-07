const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Title is required",
  },
  authors: {
    type: String,
    required: "Author is required",
  },
  description: {
    type: String,
    required: "Description is required",
  },
  image: {
    type: String,
  },
  link: {
    type: String,
    required: "A link is required",
  },
});

const Books = mongoose.model("Book", BooksSchema);

module.exports = Books;