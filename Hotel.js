/** @format */

import mongoose from 'mongoose';
const { Schema } = mongoose;

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    requird: true,
  },
  type: {
    type: String,
    requird: true,
  },
  city: {
    type: String,
    requird: true,
  },
  address: {
    type: String,
    requird: true,
  },
  distance: {
    type: String,
    requird: true,
  },
  photos: {
    type: [String],
  },
  title: {
    type: String,
    requird: true,
  },
  desc: {
    type: String,
    requird: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  rooms: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
      },
    ],
  },
  cheapestPrice: {
    type: Number,
    requird: true,
  },
  featured: {
    type: Boolean,
    requird: false,
  },
});
export default mongoose.model('Hotel', HotelSchema);
