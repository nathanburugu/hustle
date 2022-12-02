/** @format */

import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      requird: true,
      unique: true,
    },
    email: {
      type: String,
      requird: true,
      unique: true,
    },
    password: {
      type: String,
      requird: true,
    },

    isAdmin: {
      type: Boolean,
      requird: false,
    },
  },
  { timestamps: true }
);
export default mongoose.model('User', UserSchema);
