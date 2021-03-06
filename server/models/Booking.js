const mongoose = require("mongoose");
const mongooseHistory = require("mongoose-diff-history/diffHistory");

const BookingSchema = new mongoose.Schema([
  {
    party_name: String,
    occupancy: [
      {
        room: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "room"
        },
        check_in_date: Date,
        check_out_date: Date,
        occupants: [String],
        cost_center: String,
        confirmation_number: String,
        discount: Number,
        comment: String
      }
    ],
    status: Boolean,
    isArchived: {
      type: Boolean,
      default: false
    }
  }
]);

BookingSchema.plugin(mongooseHistory.plugin);
module.exports = Booking = mongoose.model("booking", BookingSchema);
