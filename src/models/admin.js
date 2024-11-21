// import mongoose from "mongoose";

import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },

  email: {
    type: String,
    require: true,
    trim: true,
    unique: true,
  },

  gender: {
    type: String,
    require: true,
    enum: ["M", "F", "O"],
  },

  contact: {
    type: Number,
    require: true,
  },

  country: {
    type: String,
    require: true,
    enum: ["US", "PK", "UK", "GH", "AS", "NG"],
  },
  password: {
    type: String,
    require: true,
  },
});
const adminModel = mongoose.models.admin || mongoose.model("admin", adminSchema)
export default adminModel