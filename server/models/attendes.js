const mongoose = require("mongoose")

const attendesSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    eventId: {
       type:mongoose.Schema.Types.ObjectId,
       ref="event"
    },
    eventDate: {
        type: mongoose.Schema.Types.eventDate,
        ref="event"
    },
    eventTime: {
        type: mongoose.Schema.Types.eventTime,
        ref="event"
    }

});

module.exports = mongoose.model("attendes", attendesSchema)