var mongoose = require('mongoose');

exports.demo = async (req, res) => {

    const Schema = mongoose.Schema;
    const bookSchema = new Schema({
        _id: { type: Schema.Types.ObjectId, required: true },
        title: String,
        author: String,
        publicationYear: Number
    });

    const BookModel = mongoose.model('Book', bookSchema);

    const customId = new mongoose.Types.ObjectId("5a934e000102030405000000");

    const newBook = new BookModel({
        _id: customId,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publicationYear: 1925
    });

    try {
        // Save the new book to the database
        const savedBook = await newBook.save();
        res.status(201).json(savedBook); // Send response indicating success
    } catch (error) {
        // Handle any errors that occur during the saving process
        res.status(500).json({ error: error.message });
    }
}
