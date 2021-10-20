const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    eventTitle: {
      type: String,
      unique: true,
      required: true,
    },
    eventVenue: {
      type: String,
      unique: true,
      required: true,
    },
    eventDate: {
      type: String,
      unique: true,
      required: true,
      time: { type: Date, default: Date.now },
    },
    eventTime: {
      type: String,
      unique: true,
      required: true,
    },
    eventFee: {
      type: String,
      // unique:true,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("event", eventSchema);

