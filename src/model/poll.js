const mongoose = require('mongoose');

const pollSchema = new mongoose.Schema({
    question: { type: String, required: true },
    options: [{
        text: { type: String, required: true },
        votes: { type: Number, default: 0 }
    }],
    createdAt: { type: Date, default: Date.now }
});

const Poll = mongoose.model('Poll', pollSchema);

module.exports = Poll;