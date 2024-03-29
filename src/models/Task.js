const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    dueDate: {
        type: Date,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    completed: {
        type: Boolean,
        default: false
    },
});

mongoose.model('Task', TaskSchema);