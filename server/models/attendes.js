const mongoose = require("mongoose")

const attendesSchema = new mongoose.Schema({
    eventId: {
        type: string,
        required: true
    },
    userId: {
        type: string,
        required: true
    },
    eventDate: {
        type: string,
        required: true
    },
    eventtime: {
        type: string,
        required: true
    }
})