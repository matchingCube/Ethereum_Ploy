const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema(
  {
    wallet: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    image: {
      type: String
    },
    headline: {
      type: String
    },
    bio: {
      type: String
    },
    linkedin: {
      type: String
    },
    facebook: {
      type: String
    },
    instagram: {
      type: String
    },
    twitter: {
      type: String
    },
    discord: {
      type: String
    },
    github: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

module.exports = User = mongoose.model("Users", UserSchema);
