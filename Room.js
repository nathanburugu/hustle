/** @format */

import mongoose from 'mongoose';
const { Schema } = mongoose;

const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      requird: true,
    },
    price: {
      type: Number,
      requird: true,
    },
    maxPeople: {
      type: Number,
      requird: true,
    },
    desc: {
      type: String,
      requird: true,
    },
    roomNumbers: [
      {
        number: Number,
        unavailableDates: { type: [Date] },
      },
    ],
  },
  { timestamps: true }
);
export default mongoose.model('Room', RoomSchema);
